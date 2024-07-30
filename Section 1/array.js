//let car1 = "wagon R"
//let car2 = "BMW"
//let car3 = "Nano"
//console.log(car1);
//console.log(car2);
//console.log(car3);


const car = ['G wagon','Rolls Royce','BMW','Davidputra 2000cc' ]

console.log(Array. isArray(car));
console.log(car.length);
//car[2] = "jaguar"
//console.log(car);

//car[3] = "bugatti"
//console.log(car);
//const cars =[]
//cars[0] = "Wagon R"
//cars[1] = "BMW"
//cars[2] = "Nano"
//console.log(cars);

//indexing
console.log(car[2]);
console.log(car.indexOf('Rolls Royce'));
console.log(car.at(-1));


//modifying array
car.push("jaguar")
car.unshift("kia")
console.log(car)

car.pop()
car.shift()
console.log(car)

//slicing
console.log(car.slice(1,2));
console.log(car.slice(-2,-1));

//splicing
//car.splice(1,3,"audi","ferarri")
//console.log(car);
car.splice(2,2,"mercedes","bugatti")
console.log(car);