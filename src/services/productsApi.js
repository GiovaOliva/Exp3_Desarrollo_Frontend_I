// Simula una API: en un proyecto real esto sería un endpoint backend.
export async function fetchProducts() {
  const url = `${import.meta.env.BASE_URL}data/productos.json`;

  // simula latencia de red
  await new Promise((r) => setTimeout(r, 250));

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("No pudimos cargar los productos. Intenta nuevamente más tarde.");
  }

  const contentType = res.headers.get("content-type") || "";

  // 🔥 Si no viene JSON, casi seguro llegó HTML (index.html de Vite)
  if (!contentType.includes("application/json")) {
    // opcional: leer un pedazo para debug sin romper UX
    const body = await res.text();
    console.warn("Respuesta no JSON:", body.slice(0, 80));
    throw new Error("No se pudieron cargar los productos (ruta incorrecta o archivo inexistente).");
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error("Ocurrió un problema cargando los productos.");
  }

  return data;
}