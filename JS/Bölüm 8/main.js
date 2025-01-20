// parametresiz geleneksel ve değer döndürmeyen fonksiyon   
// DRY -> Don t Repeat Yourself
selamVer();
selamVer2("Mehmet");
selamVer2("Buse");
selamVer2("Cem");
selamVer2("Kadir");
selamVer2(36);




// parametresiz geleneksel ve değer döndürmeyen fonksiyon
function selamVer(){
    console.log("Herkese selamlar");
    console.log("Hello");
    console.log("Hi");
    console.log("Merhabalar");
}

// parametreli geleneksel ve değer döndürmeyen fonksiyon fonksiyon oluşturma
function selamVer2(isim){
    console.log(`Merhabalar : ${isim}`);
    }

function info(name,surname,age){

    alert(`Ad : ${name}, Soyad: ${surname}, Yaş : ${age}`)
}



// Anonim fonksiyon 
const deneme = function(){
    console.log("Selam 1");
}
const deneme2 = function(num1,num2){
    console.log(num1+num2);
}

deneme();


deneme2(25,41);

// değer döndüren fonksiyonlar 
function kareAl(sayi){
    return sayi**2;
}

const sonuc = kareAl(25);
console.log("Sonuç :",sonuc);


//normal fonksiyon

function topla(a,b){
    return a + b;
}

console.log(topla(2,3));
// Arrow function : ES6 ile gelen gir özelliktir. Daha kısa 
// fonksiyon tanımlamak için kullanılan bir yöntemdir. 

const toplaArrow = (a,b)=> a+b;
const toplaArrow1 = (a,b)=>{
    console.log("toplaArrow1 çalıştı");
    return a + b;
}


const kareAl2 = x => x**2;


const merhabaDe = ()=> "Merhaba";

console.log(toplaArrow1(25,36));
console.log(kareAl2(35));
console.log(merhabaDe()); 




