const PROMOS = {
  figuras: 50000,
  poleras: 35000,
  posters: 14000,
};

export function computePromoTotals(items) {
  const subtotal = items.reduce((acc, it) => acc + it.price * it.qty, 0);

  const byCat = { figuras: [], poleras: [], posters: [] };
  items.forEach((it) => {
    if (!byCat[it.category]) return;
    for (let i = 0; i < it.qty; i++) byCat[it.category].push(it.price);
  });

  const discountLines = [];
  let totalDiscount = 0;

  Object.entries(PROMOS).forEach(([cat, promoPrice]) => {
    const prices = (byCat[cat] || []).slice();
    if (prices.length < 2) return;

    prices.sort((a, b) => b - a);
    const pairs = Math.floor(prices.length / 2);
    if (pairs <= 0) return;

    const countInPromo = pairs * 2;
    const promoItemsSum = prices.slice(0, countInPromo).reduce((a, v) => a + v, 0);
    const promoTotal = pairs * promoPrice;
    const discount = promoItemsSum - promoTotal;

    if (discount > 0) {
      totalDiscount += discount;

      const label = cat === "figuras" ? "Figuras" : cat === "poleras" ? "Poleras" : "Pósters";

      discountLines.push({
        label: `${label} (Promo 2x ${formatCLP(promoPrice)}) × ${pairs}`,
        amount: discount,
      });
    }
  });

  const totalPayable = Math.max(0, subtotal - totalDiscount);
  return { subtotal, totalDiscount, totalPayable, discountLines };
}

export function formatCLP(value) {
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(value);
}