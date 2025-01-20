// kullanıcıdan yaş değeri alarak 18 den küçük ise
// bir alert yardımı ile ehliyet alabilir ehliyet alamaz ekran çıktısını versin.

// const age = prompt("Lütfen Yaşınızı giriniz.");

// if(age<=0){
// alert("Girmiş olduğunuz yaş alanı negatif değer alamaz.");
// }

// else if(age<18){
//     alert("Ehliyet alamaz.")
// }

// else{
//     alert("Ehliyet alabilir.")
// }


// Kullanıcıdan ürün fiyatını ve kaç adet almak istediğini alınız.
// toplam ücreti 10.000 tl nin altındaysa herhangi bir indirim yapılmasın 
// toplam ücreti 10.000 - 15.000 tl arasındaysa %10 indirim yapılsın
// toplam ücreti 15.000 - 20.000 tl arasındaysa %20 indirim yapılsın 
// toplam ücreti 25.000 den fazla ise %30 indirim yapsın.


const price = prompt("Ürün fiyatını giriniz : ");
const count = prompt("Ürün sayısı");
let totalPrice = price * count;

if(totalPrice<10000){
    alert("indirim yapılmamışstır: \n toplam ücret: "+totalPrice);
}else if(totalPrice>=10000 && totalPrice<=15000){
    const indirimliFiyat = totalPrice * 0.9;
    const indirimOrani = 10;
    const fiyatFarki = totalPrice - indirimliFiyat;
    
    alert('Ürün toplam ücreti :'+totalPrice+"\n"
        + "İndirim Oranı :"+ indirimOrani+ "\n"
        +  "Fiyat Farkı :"+fiyatFarki + "\n"+
        "İndirimliFiyat: "+ indirimliFiyat
    );
}
else if(totalPrice>=15000 && totalPrice<=20000){
    let indirimliFiyat = totalPrice * 0.8;
    let indirimOrani = 20;
    let fiyatFarki = totalPrice - indirimliFiyat;
    
    alert('Ürün toplam ücreti :'+totalPrice+"\n"
        + "İndirim Oranı :"+ indirimOrani+ "\n"
        +  "Fiyat Farkı :"+fiyatFarki + "\n"+
        "İndirimliFiyat: "+ indirimliFiyat
    );
}
else{
    var indirimliFiyat = totalPrice * 0.7;
    var indirimOrani = 30;
    var fiyatFarki = totalPrice - indirimliFiyat;
    
    alert('Ürün toplam ücreti :'+totalPrice+"\n"
        + "İndirim Oranı :"+ indirimOrani+ "\n"
        +  "Fiyat Farkı :"+fiyatFarki + "\n"+
        "İndirimliFiyat: "+ indirimliFiyat
    );
}
console.log(indirimliFiyat);

