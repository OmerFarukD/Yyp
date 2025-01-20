
const productNames = ["Monster Abra A7", "Msi Bravo","Iphone 16 pro max"];
const prices = [36500,47500,120000];
const stocks = [150,25,35];


const text = prompt('Hangi Ürünü İstersiniz ? \n'+
    '1-)Monster Abra A7 \n'+
    '2-)Msi Bravo\n'+
    '3-)Iphone 16 pro max'
);

if(text==1){
    const count = Number(prompt("Monster Abra A7 ürününden kaç adet almak istersiniz."))
    if(count>stocks[0]){
        alert("Elimizde yeterli ürün yok")
    }

    stocks[0]-= count;

    const totalPrice = count * prices[0]
    alert(`Toplam ücret ${totalPrice}`);
}


else if(text==2){
    const count = Number(prompt("Msi Bravo ürününden kaç adet almak istersiniz."))
    if(count>stocks[1]){
        alert("Elimizde yeterli ürün yok")
    }

    stocks[1]-= count;
    console.log(stocks[1]);

    const totalPrice = count * prices[1]
    alert(`Toplam ücret ${totalPrice}`);
}
else if(text==3){
    const count = Number(prompt("Iphone 16 pro max ürününden kaç adet almak istersiniz."))
    if(count>stocks[2]){
        alert("Elimizde yeterli ürün yok")
    }

    stocks[2]-= count;

    

    const totalPrice = count * prices[2]
    alert(`Toplam ücret ${totalPrice}`);
}


console.log("Kalan Ürünler: ");
for(let i =0;i<productNames.length;i++){
    const response = `Ürün Adı : ${productNames[i]} \n 
    Ürün Fiyatı : ${prices[i]} \n
    Ürünün Stok Adedi : ${stocks[i]}
    `
    console.log(response);
}

const deletedproducts = []

for(let i =0; i<stocks.length; i++){
if(stocks[i]==0){

    deletedproducts.push(productNames[i])

   delete stocks[i];
   delete productNames[i];
   delete prices[i];
}
}
console.log("Silinen ürünler");
console.log(deletedproducts);
console.log(productNames);


