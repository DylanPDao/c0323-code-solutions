const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObject = prices.map((e) => ({ price: e, salePrice: e / 2 }));
console.log('Priced object', priceObject);

const formattedPrices = prices.map((e) => `${e.toFixed(2)}`);
console.log('Formatted prices', formattedPrices);
