const products = [
    {name:"Monster Abra A7",price:36500,stock:150},
    {name:"Msi Bravo",price:47500,stock:25},
    {name:"Iphone 16 pro max",price:120000,stock:25}
]


// SOLID -> Open Closed 

const getInfo = ()=>{
    return prompt('Hangi Ürünü İstersiniz ? \n'+
        '1-)Monster Abra A7 \n'+
        '2-)Msi Bravo\n'+
        '3-)Iphone 16 pro max'
    );
}



const getCountNumber = (productName)=>{
    return Number(prompt(`${productName} ürününden kaç adet almak istersiniz.`));
}


const updateStock = (index,count,products)=>{
    if(products[index]['stock']<count){
        alert("Elimizde yeterli ürün yok")
    }else{
        products[index]['stock'] -= count;
        const totalPrice = products[index]['price'] * count;
        alert(`Toplam ücret ${totalPrice}`);
    }
}


const stockManage = (text,products)=>{
if(text==1){
    const count = getCountNumber("Monster Abra A7");
    updateStock(0,count,products);
}

else if(text==2){
    const count = getCountNumber("Msi Bravo");
    updateStock(1,count,products);
}


else if(text==3){
    const count = getCountNumber("Iphone 16 pro max");
    updateStock(2,count,products);
}

}



const printAllProducts = (products)=>{
    for(let i=0; i<products.length;i++){
        const productName = products[i]['name'];
        const productPrice = products[i]['price'];
        const productStock = products[i]['stock'];
        console.log(`Ürün adı : ${productName} \n 
            Ürün değeri : ${productPrice} \n
            Ürün Stoğu : ${productStock}
            `);
    }
}


const metin = getInfo();
stockManage(metin,products);


//12:25 de dersteyiz.