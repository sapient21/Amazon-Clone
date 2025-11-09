export function formatCurrency(priceCents) {
    (priceCents / 100).toFixed(2);
}

export default formatCurrency;