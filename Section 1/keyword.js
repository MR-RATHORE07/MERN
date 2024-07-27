num = 321
console.log(num);

let num1 = 342;
console.log(num1);

//var num2 = 432;//
//console.log(num2);//

const num3 = 456;
console.log(num3);


// block scope 

//let and const are blocked scope
//var is global scope
{
    var x=2
    //console.log(x);
}
console.log(x);

var y = 3
var y ="shiva"
console.log(y);



n = 356;

if(n%2 === 0){
   console.log('even');
   global = 'this should be global scope'
   let nature = 'good'
   console.log(nature);

   const x = 'bad'
   console.log(x);
}
else{
    console.log('odd'); 
}
console.log(global);
 

