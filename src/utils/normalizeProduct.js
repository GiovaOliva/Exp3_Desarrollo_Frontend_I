export function normalizeProduct(p) {
  return {
    id: Number(p.id),
    title: p.title ?? p.nombre ?? "Producto",
    description: p.description ?? p.descripcion ?? "",
    category: (p.category ?? p.categoria ?? "").toLowerCase(),
    price: Number(p.price ?? p.precio ?? 0),
    image: p.image ?? p.imagen ?? "",
    alt: p.alt ?? p.altText ?? p.descripcion ?? p.title ?? p.nombre ?? "Producto",
  };
}