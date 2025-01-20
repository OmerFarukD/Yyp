class Araba{
constructor(marka,model,year){
this.marka = marka;
this.model = model;
this.year = year;
}

info(){
    return `Aracın markası : ${this.marka}, Aracın modeli : ${this.model}, Aracın Yılı : ${this.year}`
}

}
const car = new Araba("Bmw ","M5",2024);
console.log(car.info());




class Product{
    constructor(name,stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }


    // getter 
    get priceInfo(){
        return this.price;
    }

    

    set priceInfo(value){
        this.price  = this.price * 1.20;
    }
}



const product = new Product(name="Ürün 1 ", price=250,stock=25);

product.priceInfo = 250;
console.log(product.priceInfo);
class Matematik {

    static topla(a,b){
        return a + b;
    }
    static carpma(a,b){
        return a * b;
    }
}
console.log(Matematik.topla(25,37));
console.log(Matematik.carpma(9,9));


class Hayvan {
    constructor(isim){
        this.isim = isim;
    }



    sesCikar(){
        console.log(`${this.isim} bir ses çıkarıyor.`);
    }
}



class Kopek extends Hayvan{
    sesCikar(){
        console.log(`${this.isim} havlıyor.`);
    }


}

const kopek = new Kopek("Prens");
kopek.sesCikar();


class BankaHesabi {
    constructor(sahip,bakiye){
        this.sahip = sahip;
        this._bakiye = bakiye;
    }

    bakiyeGoster(){
        console.log(`${this.sahip} hesabında ${this._bakiye} para var`);
    }


    paraYatir(miktar){

        if(miktar>0){
            this._bakiye += miktar;
        }
    }

}


class BankaHesabi1 {

    #bakiye;
    constructor(sahip,bakiye){
        this.sahip = sahip;
        this.#bakiye = bakiye;
    }

    bakiyeGoster(){
        console.log(`${this.sahip} hesabında ${this.#bakiye} para var`);
    }


    paraYatir(miktar){

        if(miktar>0){
            this.#bakiye += miktar;
        }
    }

}


const banka =new BankaHesabi("Berkay Kaplan",3000000);
console.log(banka._bakiye);
banka.bakiyeGoster();
banka.paraYatir(123456789);
banka.bakiyeGoster();


const banka1 =new BankaHesabi1("Berkay Kaplan",3000000);
banka1.bakiyeGoster();
banka1.paraYatir(123456789);
banka1.bakiyeGoster();