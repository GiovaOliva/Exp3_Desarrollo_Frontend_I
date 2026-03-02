import { useEffect, useMemo, useState } from "react";
import { computePromoTotals, formatCLP } from "./utils/pricing";
import { normalizeProduct } from "./utils/normalizeProduct";
import { fetchProducts } from "./services/productsApi";

import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import CartOffcanvas from "./components/CartOffcanvas";
import Hero from "./components/Hero";
import PromoCarousel from "./components/PromoCarousel";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

export default function App() {
  // ===== Estado global de la app
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]); // [{ id, qty }]
  const [error, setError] = useState("");       // solo errores reales
  const [searchMsg, setSearchMsg] = useState("");

  /**
   * Carga inicial (S8: Fetch / simulación API)
   * - Llama al service fetchProducts()
   * - Normaliza para tolerar variaciones del JSON
   * - Setea productos + listado visible
   */
  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      setError("");
      setSearchMsg("");

      try {
        const raw = await fetchProducts();
        const data = raw.map(normalizeProduct);

        if (!cancelled) {
          setProducts(data);
          setFiltered(data);
          setError("");
        }
      } catch (e) {
        console.error(e);
        if (!cancelled) {
          setError("No pudimos cargar los productos. Intenta nuevamente más tarde.");
          setFiltered([]);
          setSearchMsg("");
        }
      }
    }

    loadProducts();
    return () => (cancelled = true);
  }, []);

  // ===== Derivados (useMemo) para evitar recalcular en cada render
  const cartItems = useMemo(() => {
    // Une carrito {id, qty} con el producto real (price, title, etc.)
    return cart
      .map((ci) => {
        const p = products.find((x) => x.id === ci.id);
        return p ? { ...p, qty: ci.qty } : null;
      })
      .filter(Boolean);
  }, [cart, products]);

  const cartCount = useMemo(() => {
    // Total de unidades (badge)
    return cartItems.reduce((acc, it) => acc + it.qty, 0);
  }, [cartItems]);

  const totals = useMemo(() => {
    // Subtotal + descuentos promo + total final
    return computePromoTotals(cartItems);
  }, [cartItems]);

  const byCat = useMemo(() => {
    // Agrupa productos filtrados por categoría para render seccionado
    const obj = { figuras: [], poleras: [], posters: [] };
    filtered.forEach((p) => obj[p.category]?.push(p));
    return obj;
  }, [filtered]);

  // ===== Acciones carrito
  function addToCart(id) {
    const pid = Number(id);

    setCart((prev) => {
      const exists = prev.some((x) => x.id === pid);

      if (exists) {
        return prev.map((item) => (item.id === pid ? { ...item, qty: item.qty + 1 } : item));
      }

      return [...prev, { id: pid, qty: 1 }];
    });
  }

  function removeOne(id) {
    const pid = Number(id);

    setCart((prev) => {
      const current = prev.find((x) => x.id === pid);
      if (!current) return prev;

      // Si queda en 0, lo quitamos
      if (current.qty <= 1) return prev.filter((x) => x.id !== pid);

      return prev.map((item) => (item.id === pid ? { ...item, qty: item.qty - 1 } : item));
    });
  }

  function clearCart() {
    setCart([]);
  }

  function onSearchSubmit(e) {
    e.preventDefault();
    const q = (e.target.elements.q?.value || "").trim().toLowerCase();

    // 1) Validación de búsqueda => searchMsg (NO error)
    if (q.length > 0 && q.length < 2) {
      setSearchMsg("Ingresa al menos 2 caracteres para buscar.");
      setError("");
      return;
    }

    // Si hubo error real de carga, no tiene sentido buscar
    if (error) return;

    if (!q) {
      setFiltered(products);
      setSearchMsg("");
      return;
    }

    const result = products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );

    setFiltered(result);
    setSearchMsg(result.length === 0 ? "No se encontraron productos con ese criterio." : "");
  }

  function onClearSearch() {
    setError("");
    setSearchMsg("");
    setFiltered(products);
    const input = document.getElementById("searchInput");
    if (input) input.value = "";
  }

  return (
    <div>
      <Navbar cartCount={cartCount} onSearchSubmit={onSearchSubmit} onClearSearch={onClearSearch} error={error}
        searchMsg={searchMsg} />

      <Hero />
      <PromoCarousel />

      <main id="productos" className="container my-5">
        <h2 className="text-center fw-bold mb-4">PRODUCTOS DESTACADOS</h2>

        {filtered.length === 0 ? null : (
          ["figuras", "poleras", "posters"].map((cat) => (
            <ProductSection
              key={cat}
              title={cat}
              products={byCat[cat]}
              onAddToCart={addToCart}
              formatCLP={formatCLP}
            />
          ))
        )}
      </main>

      <CartOffcanvas
        items={cartItems}
        totals={totals}
        onRemoveOne={removeOne}
        onClear={clearCart}
        formatCLP={formatCLP}
      />

      <Footer />
    </div>
  );
}