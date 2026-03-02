export default function ProductCard({ product, onAddToCart, formatCLP }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="p-3">
        <img
          src={product.image}
          className="card-img-top"
          style={{ height: 210, objectFit: "contain" }}
          alt={product.alt}
        />
      </div>

      <div className="card-body text-center">
        <h4 className="h5">{product.title}</h4>
        <p className="text-secondary mb-2">{product.description}</p>
        <p className="fw-bold">{formatCLP(product.price)}</p>

        <button className="btn btn-dark w-100" onClick={() => onAddToCart(product.id)}>
          <i className="bi bi-cart-plus me-1" aria-hidden="true" /> Agregar al carrito
        </button>
      </div>
    </article>
  );
}