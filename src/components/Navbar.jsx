export default function Navbar({
  cartCount,
  onSearchSubmit,
  onClearSearch,
  error,
  searchMsg,
}) {
  const message = error || searchMsg;
  const variant = error ? "danger" : "warning";

  return (
    <div className="sticky-top">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark hero-bg shadow-sm" aria-label="Navegación principal">
        <div className="container py-2">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
            <img src={`${import.meta.env.BASE_URL}img/logo-animeshop.svg`} alt="Logo de AnimeShop" width="36" height="36" />
            <span className="fw-semibold">AnimeShop</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarAnimeShop"
            aria-controls="navbarAnimeShop"
            aria-expanded="false"
            aria-label="Abrir navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarAnimeShop">
            <ul className="navbar-nav ms-lg-auto mb-3 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>

            <div className="navbar-actions d-flex flex-column flex-lg-row gap-2 ms-lg-3">
              <form className="d-flex w-100" role="search" aria-label="Buscar productos" onSubmit={onSearchSubmit}>
                <div className="input-group input-group-sm w-100">
                  <input
                    id="searchInput"
                    name="q"
                    className="form-control"
                    type="search"
                    placeholder="Buscar productos..."
                    aria-label="Buscar productos"
                  />

                  <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={onClearSearch}
                    aria-label="Limpiar búsqueda"
                    title="Limpiar"
                  >
                    <i className="bi bi-x-lg" aria-hidden="true"></i>
                  </button>

                  <button className="btn btn-outline-light" type="submit" aria-label="Buscar">
                    <i className="bi bi-search" aria-hidden="true"></i>
                  </button>
                </div>
              </form>

              <button
                className="btn btn-sm btn-outline-light w-100 w-lg-auto"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#cartCanvas"
                aria-controls="cartCanvas"
              >
                <i className="bi bi-cart3 me-1" aria-hidden="true"></i>
                <span className="d-inline">Carrito</span>
                <span className="badge text-bg-light text-dark ms-1">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* BARRA DE MENSAJES (debajo del navbar) */}
      {message ? (
        <div className={`bg-${variant} bg-opacity-10 border-bottom border-${variant} border-opacity-25`}>
          <div className="container py-2">
            <div className={`alert alert-${variant} mb-0 py-2`} role="status" aria-live="polite">
              <i
                className={`bi ${error ? "bi-exclamation-triangle" : "bi-info-circle"} me-2`}
                aria-hidden="true"
              ></i>
              {message}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}