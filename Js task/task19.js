const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

const discountedProducts = products.map(product => ({
  ...product,
  price: product.price * 0.9
}));

console.log(discountedProducts);