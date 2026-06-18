const text = "The fox is quick. The fox is smart.";

const count = text
  .toLowerCase()
  .match(/\bfox\b/g)?.length || 0;

console.log(count); 