const car = {
     
    name:"Thar",
    price: 50000000,
    color: ["black","White"]
}
console.log(car);
console.log(car.price);
console.log(car.color[1]);

const cars = [
{
 name :"BMW",
 price : 40000000,
 color : ["white","black","blue"]
},
 {
    name: "Audi",
    price: 500000,
    color: ["blue","black","white"]
 },
{
name : "Suzuki",
price : 3000000,
color : ["white", "black", "blue"]
},
 
]
console.log(cars);
console.log(cars [0].price);
console.log(cars [1].name);
cars[1].color.push("grey");
console.log(cars[1]);
