import obj from "./data.js";

function averAge(obj) {
  let a = 0;
  let aver = 0;
  obj.forEach((el) => {
    a += el["age"];
  });
  aver = a / obj.length;
  console.log(aver);
}
averAge(obj);
// console.log(obj);
