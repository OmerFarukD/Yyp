// bir for döngüsünü başlatıp 1 den 20 ye kadar birer birer artsın
// her bir elemanı ilk başta bir tane array içine eklesin
// sonrasında eklenen liste içerisinde ayrı bir for döngüsü kullanarak 

// çift sayılar : []
// tek sayılar : []
// asal sayılar : []


let liste = [];
for (let i = 1; i <= 20; i++) {
  liste.push(i);
}
 
let ciftSayilar = [];
for (let i = 1; i < liste.length; i += 2) {
  ciftSayilar.push(liste[i]);
}
 
let tekSayilar = [];
for (let i = 0; i < liste.length; i += 2) {
  tekSayilar.push(liste[i]);
}
 
let asalSayilar = [];
for (let i = 0; i < liste.length; i++) {
    if(liste[i] > 1){
        let asal = true;
        for(let j = 2; j<liste.length; j++){
            if(liste[i] % j == 0){
                if(liste[i] != j){
                    asal=false;
                }
            }
        }
        if(asal==true){
        asalSayilar.push(liste[i]);}
    }
  }
 
 
console.log(ciftSayilar);
console.log(tekSayilar);
console.log(asalSayilar);