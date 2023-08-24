// const inventory = [
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   {
//     id: 4,
//     car_make: "Land Rover",
//     car_model: "Defender Ice Edition",
//     car_year: 2010,
//   },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];
// function getCarHonda(carInventory) {
//   let a = inventory.filter((el) => el.car_make === "Honda")[0];
//   console.log(`This is a ${a.car_make} ${a.car_model} from ${a.car_year}.`);
// }
// getCarHonda();

// Part 2
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
function sortCarInventoryByYear(carInventory) {
  let sorted = Object.entries(inventory).sort(
    ([, a], [, b]) => a.car_year - b.car_year
  );
  console.log(sorted);
}
sortCarInventoryByYear(inventory);
