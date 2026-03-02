export default function CartOffcanvas({ items, totals, onRemoveOne, onClear, formatCLP }) {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartCanvas" aria-labelledby="cartCanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartCanvasLabel">
          <i className="bi bi-cart3 me-2" aria-hidden="true" /> Carrito
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar" />
      </div>

      <div className="offcanvas-body">
        {items.length === 0 ? (
          <p className="text-secondary">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {items.map((it) => (
                <li key={it.id} className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="me-2">
                    <div className="fw-semibold">{it.title}</div>
                    <div className="text-secondary small">
                      {formatCLP(it.price)} • Cant: {it.qty}
                    </div>
                  </div>

                  <button className="btn btn-sm btn-outline-danger" onClick={() => onRemoveOne(it.id)} aria-label="Quitar uno">
                    <i className="bi bi-dash" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-top pt-3">
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">Subtotal:</span>
                <span className="fw-bold">{formatCLP(totals.subtotal)}</span>
              </div>

              <div className="mt-2">
                <div className="text-success fw-semibold">Descuentos:</div>

                {totals.discountLines.length === 0 ? (
                  <div className="text-secondary">Sin descuentos aplicados</div>
                ) : (
                  <ul className="list-unstyled mb-0">
                    {totals.discountLines.map((d) => (
                      <li key={d.label} className="d-flex justify-content-between">
                        <span>{d.label}</span>
                        <span>- {formatCLP(d.amount)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="d-flex justify-content-between mt-2 border-top pt-2">
                <span className="fw-semibold">Total a pagar:</span>
                <span className="fw-bold">{formatCLP(totals.totalPayable)}</span>
              </div>
            </div>

            <button className="btn btn-outline-danger w-100 mt-3" type="button" onClick={onClear}>
              <i className="bi bi-trash me-1" aria-hidden="true" /> Vaciar carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
}