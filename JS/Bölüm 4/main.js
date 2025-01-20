// kullanıcıdan 1 den 4 e kadar bir sayı alınsın ve sırasıyla
// ekran çuktısı olarak 
// İlkbahar , yaz , sonbahar, Kış

const num = Number(prompt("Lütfen 1 den 4 e kadar bir sayı giriniz."))
switch(num){

    case 1:
        console.log("İlkbahar");
        break;
    case 2:
        console.log("Yaz");
        break;
    case 3:
        console.log("Sonbahar");
        break;
    case 4:
        console.log("Kış");
        break;
    default:
        console.log("Girmiş olduğunuz karakter uygun değildir.");
        break;
}