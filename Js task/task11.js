const repos = [
  { repo: "A", stars: 100 },
  { repo: "B", stars: 200 }
];

const totalStars = repos.reduce(
  (sum, repo) => sum + repo.stars,
  0
);

console.log(totalStars);