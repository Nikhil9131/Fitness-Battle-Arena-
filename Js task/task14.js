const marks = [45, 80, 60, 90, 30];

const passedMarks = marks.filter(mark => mark > 50);

const average =
  passedMarks.reduce((sum, mark) => sum + mark, 0) /
  passedMarks.length;

console.log(average);