const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 }
];

const totalCredit = transactions
  .filter(tx => tx.type === "credit")
  .reduce((sum, tx) => sum + tx.amount, 0);

console.log(totalCredit);