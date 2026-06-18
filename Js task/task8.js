const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

const totalSpending = customers.reduce(
  (sum, customer) => sum + customer.amount,
  0
);

console.log(totalSpending);