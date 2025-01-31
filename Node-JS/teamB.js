function sum(a, b) {
  console.log("---Calculating sum---");
  return a + b;
}
const mul = (a, b) => {
  console.log("---Calculating product---");
  return a * b;
};
// module.exports = sum;
const container = {
  sum: sum,
  mul: mul,
};
module.exports = container;
