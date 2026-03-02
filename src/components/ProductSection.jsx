import ProductCard from "./ProductCard";

export default function ProductSection({ title, products, onAddToCart, formatCLP }) {
    return (
        <section className="mb-5" aria-label={`Sección ${title}`}>
            <h3 className="text-center text-uppercase fw-bold">{title}</h3>

            <div className="row g-3 justify-content-center mt-3">
                {products.map((p) => (
                    <div key={p.id} className="col-12 col-md-6 col-lg-4">
                        <ProductCard
                            product={p}
                            onAddToCart={onAddToCart}
                            formatCLP={formatCLP}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}