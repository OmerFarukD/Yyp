// Aritmetik operatörler +,-,*,/,%

// const number1 = prompt("Lütfen 1. Sayıyı Giriniz :");
// const number2 = prompt("Lütfen 2. Sayıyı Giriniz :");


// const toplam = number1 + number2;
// const cikarma = number1 - number2;
// const bolme = number1 / number2;
// const carpmma = number1*number2;
// const mod = number1%number2;

// const us = number1**number2;


//           "25"            "5"
// console.log(number1 + " + "+ number2+ " = "+toplam);
// console.log(number1 + " - "+ number2+ " = "+cikarma);
// console.log(number1 + " / "+ number2+ " = "+bolme);
// console.log(number1 + " * "+ number2+ " = "+carpmma);
// console.log(number1 + " % "+ number2+ " = "+mod);
// console.log(us);

// Atama operatörleri  = ,+=,*=,-= ... 

let a = 25;
console.log(a+=3);
console.log(a-=8);

// karşılaştırma operatörleri  
console.log("Karşılaştırma operatörleri");
console.log(25==26); // eşit midir ?
console.log(21 != 22); // eşit değil midir ?
console.log(21<=18);
console.log(23>=45);

console.log("25"==25); // true
console.log("25"===25); // false


// Mantıksal Operatörler : && and(Ve operatörü),
// ||or (veya  operatörü)
//   ! not operatoru

console.log(25<5 && 67!=85); // false
console.log(25<5 || 67!=85); // true
const notValue = !(25<5 || 67!=85) //false
console.log(notValue);