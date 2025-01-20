// 1. Yöntem : Literal Söz dizimi.

const araba = {
    marka:'Toyota',
    model:'Corolla',
    yil:2024
}

//2.Yöntem: Object constructor yöntemi.
const araba2 = new Object();
araba2.marka = "Honda";
araba2.model ="Civic";
araba2.yil = 2025;
araba2.rented = false;


// console.log(araba);

// console.log(araba2);

//3. Yöntem : Object.create

// const prototip = {tur:"Araç"};
// const araba3 = Object.create(prototip);
// araba3.marka = "Deneme";
// araba3.model = 2021;


// console.log(araba3);


// console.log(araba3.marka);
// console.log(araba3['model']);


const ogrenci = {
    isim:'Ahmet',
    yas:28,
    dersler : ['FrontEnd','Backend','Mobil'],
    mezunMu:false,
    info : function(){
        return `Merhaba benim adım :${this.isim} , yaşım : ${this.yas}`;
    }
}

console.log(ogrenci.info());


const kitap = {
    baslik : 'Abasıyanık',
    yazar : {
        ad:'Sait',
        soyad:'Faik'
    }
};

console.log(kitap);
console.log(kitap.yazar.ad);
console.log(kitap['yazar']['ad']);


// c# .net
// react
// Spring boot  
