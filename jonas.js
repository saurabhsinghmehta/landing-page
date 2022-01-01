//mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);
console.log(ageJonas * 2, ageJonas / 2);  

//assignment operators
let x = 10 + 5; //15
x += 10; // x= x + 10 = 25
x *= 4; // x= x * 4 = 100
x ++; // x= x + 1 =101
x --; // x= x - 1 = 100

console.log(x);

//comparison operators 
 console.log(ageJonas > ageSarah); // >, <, >=, <=.
 console.log(ageSarah>= 18);
 console.log(now -1991  > now -2018);
 const averageAge = (ageJonas + ageSarah) / 2 
 console.log( ageJonas, ageSarah, averageAge);

 //Problem set one
 //test1
/* let markWeight = 78;
 let markHeight = 1.69;
 let johnWeight = 92;
 let johnHeight = 1.95;*/

 let markWeight = 95;
 let markHeight = 1.88;
 let johnWeight = 85;
 let johnHeight = 1.76;
 
 
 const BMIMark = markWeight / markHeight ** 2;
 const BMIJohn = johnWeight / johnHeight ** 2;
 const markHigherBMI = BMIMark > BMIJohn;
 console.log(BMIMark, BMIJohn, markHigherBMI);