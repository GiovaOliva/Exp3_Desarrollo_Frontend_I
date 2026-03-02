export default function Hero() {
  return (
    <header id="inicio" className="hero-bg text-white">
      <section>
        <div className="container py-5 text-center">
          <img
            src={`${import.meta.env.BASE_URL}img/logo-animeshop.svg`}
            alt="Logo de AnimeShop"
            width="64"
            height="64"
            className="mb-3"
          />
          <h1 className="fw-bold mb-2">AnimeShop</h1>
          <p className="text-white-50 mb-0">Tu tienda de artículos animé favorita</p>
        </div>
      </section>
    </header>
  );
}