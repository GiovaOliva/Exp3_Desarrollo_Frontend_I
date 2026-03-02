export default function PromoCarousel() {
    return (
        <section className="container my-5">
            <div
                id="promoCarousel"
                className="carousel slide shadow rounded overflow-hidden"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                {/* Indicadores */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#promoCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Figuras"
                    />
                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="1" aria-label="Poleras" />
                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="2" aria-label="Pósters" />
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${import.meta.env.BASE_URL}img/carrusel-naruto.avif`} className="d-block w-100" alt="Promoción figuras de anime Naruto" />
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                            <div className="bg-dark bg-opacity-50 rounded p-4">
                                <h3 className="fw-bold">Figuras coleccionables</h3>
                                <p className="fs-5 mb-0">2 x $50.000</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src={`${import.meta.env.BASE_URL}img/carrusel-shingeki.avif`}
                            className="d-block w-100"
                            alt="Promoción poleras Attack on Titan"
                        />
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                            <div className="bg-dark bg-opacity-50 rounded p-4">
                                <h3 className="fw-bold">Poleras oficiales</h3>
                                <p className="fs-5 mb-0">2 x $35.000</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={`${import.meta.env.BASE_URL}img/carrusel-onepiece.webp`} className="d-block w-100" alt="Promoción pósters One Piece" />
                        <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                            <div className="bg-dark bg-opacity-50 rounded p-4">
                                <h3 className="fw-bold">Pósters destacados</h3>
                                <p className="fs-5 mb-0">2 x $14.000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controles */}
                <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>
    );
}