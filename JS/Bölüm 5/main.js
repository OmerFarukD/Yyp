const text = "Lorem ipsum dolor sit amet.";
console.log("text in uzunluğu :",text.length);


console.log("text in içerisindeki 3. indexteki eleman : ",text.charAt(3));

console.log("text in içerisindeki 3. indexteki elemanın ascii kodu",

    text.charCodeAt(3)
);



const ad = "Berkay ";
const surname = "Kaplan";
const birlestirilmis = ad.concat(surname);
console.log(birlestirilmis);


const email = "a@a@a.com";

console.log("email içinde @gmail.com geçiyor mu : ",email.includes('@gmail.com'));

console.log("email içerisinde @ karakteri baştan kaçıncı indexte",
    email.indexOf('@')
);

console.log("email içerisinde @ karakteri en son kaçıncı indexte :",
    email.lastIndexOf('@')
);


console.log(birlestirilmis.toUpperCase());
console.log(birlestirilmis.toLowerCase());

// trim metodu stringin başındaki ve sonundaki boşlukları siler.

const txt = "          merhaba          ";
console.log(txt.trim());

console.log(txt.trimEnd());
console.log(txt.trimStart());

const programlamaDili = "JavaScript";
console.log(programlamaDili.slice(0,4));

console.log(programlamaDili.slice(-6));


// substring ile slice arasındaki fark substring içerisinde yazılan indexler negatif değer alamaz.
console.log(programlamaDili.substring(0,4));


// substr Belirtilen başlangıç indexinden itibaren belirli uzunlukta bir kısmı döner

console.log(programlamaDili.substr(4,6));


const meyveler = "Elma,Armut,Kiraz";
const arr = meyveler.split(",");
console.log(arr);


const deneme = "Ömer Faruk Doğan ";
console.log(deneme.replace('Ömer Faruk','Buse'));

const deneme2 = "Ömer Faruk Doğan Ömer Faruk Doğan Ömer Faruk Doğan";
console.log(deneme2.replaceAll('Ömer Faruk','Buse'));

const deneme3 = deneme.repeat(3);
console.log(deneme3);



const playerName ="Mauro";
const playerSurname = "Icardi";
const jerseyNumber = 9;


''  ``

const playerFullName = `Futbolcu adı : ${playerName} \n
Futbolcu Soyadı : ${playerSurname} \n
Forma Numarası : ${jerseyNumber}
`

console.log(playerFullName);
