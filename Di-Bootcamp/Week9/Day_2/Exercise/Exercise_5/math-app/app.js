let _ = require("lodash");

const { plus, multiply } = require("./math.js");

// const a = _.map([plus(5, 7), multiply(8, 9)], square);
// console.log(a);
const sum = _.sum([plus(5, 7), multiply(8, 9)]);
console.log(sum);
