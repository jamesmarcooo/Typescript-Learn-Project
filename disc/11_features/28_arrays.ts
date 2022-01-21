const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// const carsByMake = [
//     ['f150'],
//     ['corolla'],
//     ['camaro']
// ]

const cardsByMake: string[][] = [];

//Help with inference when extracting values
const car = carMakers[0];
const myCard = carMakers.pop();

//Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());
