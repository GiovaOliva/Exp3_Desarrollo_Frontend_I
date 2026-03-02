export default function Footer() {
  return (
    <footer id="contacto" className="hero-bg text-white mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2" aria-hidden="true" />
              <a
                href="mailto:contacto@animeshop.cl?subject=Consulta%20AnimeShop&body=Hola,%20tengo%20una%20consulta..."
                className="text-white text-decoration-underline"
              >
                contacto@animeshop.cl
              </a>
            </p>
          </div>

          <div className="col-12 col-md-4 text-center">
            <h5 className="fw-bold mb-3">Síguenos</h5>
            <div className="d-flex justify-content-center gap-3 fs-4">
              <a
                href="https://www.instagram.com/"
                className="text-white"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>

              <a
                href="https://www.facebook.com/"
                className="text-white"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>

              <a
                href="https://x.com/"
                className="text-white"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x" aria-hidden="true" />
              </a>

              <a
                href="https://www.youtube.com/"
                className="text-white"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card bg-dark border-0 shadow-sm h-100">
              <div className="card-body text-center text-md-start">
                <h5 className="card-title fw-bold text-white">¿Quiénes somos?</h5>
                <p className="card-text text-white-50 mb-0">
                  AnimeShop es una tienda ficticia dedicada a productos inspirados en el animé, creada con fines
                  educativos para aprender diseño web responsivo con Bootstrap 5.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 text-white-50 small">© 2026 AnimeShop — Proyecto académico</div>
      </div>
    </footer>
  );
}