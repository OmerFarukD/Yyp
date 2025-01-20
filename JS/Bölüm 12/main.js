
// const basliklar = document.querySelectorAll('h1');

// for(let i=0;i<basliklar.length;i++){

//    console.log(basliklar[i].innerText); 
// }


const printAllTexts = (data)=>{
    for(let i=0;i<data.length;i++){

        console.log(data[i].innerText); 
     }
}


const basliklar = document.getElementsByTagName("h1");


const parags1 = document.querySelectorAll('.paragClass');
printAllTexts(parags1);

const parags2 = document.getElementsByClassName('paragClass');
printAllTexts(parags2);

const getId = document.getElementById('paragId');
console.log(getId.innerHTML);


// İlgili içeriği değiştirme
const baslik = document.getElementById("domId");
const btn = document.querySelector('#contentChange');

btn.addEventListener('click',function(){
baslik.textContent = "DOM (Document Object Model) nedir ? "
});



// iligili paragrafın sitilini değiştirme

const paragraf = document.getElementById("firstP");
const btnChange = document.getElementById("stillChange");


btnChange.addEventListener("click",()=>{
paragraf.style.fontSize = "20px";
paragraf.style.backgroundColor = "red";
paragraf.style.color = "yellow"
});


// html e element ekleme.

const liste = document.getElementById("liste"); // ul
const ekleBtn = document.getElementById("newElement");


let sayac = 2;

ekleBtn.addEventListener("click",()=>{

    sayac++;
    const yeniLi = document.createElement("li");
    yeniLi.textContent = `öğe ${sayac}`;
    liste.appendChild(yeniLi);
});


// Event dinleyiciler 

const btnEvent = document.getElementById("eventTakip");

btnEvent.addEventListener("click",()=>{
    alert("Butona tıklandı.")
});


btnEvent.addEventListener("mouseover",()=>{
    alert("Buton üstüne geldiniz.")
    btnEvent.style.backgroundColor = "gray";
});

btnEvent.addEventListener('mouseout',()=>{
    btnEvent.style.backgroundColor = "";
    alert("button üzerinden çıkıldı")
});


// html den element silme durumları .

const btnSil = document.getElementById("deleteElement");
const silinecekListe = document.getElementById("sil");

btnSil.addEventListener("click",()=>{
    silinecekListe.remove();
});

// form veya inputlar ile çalışma


const input = document.getElementById("input");
const msjBtn = document.getElementById("mesajEkle");
const msjParag = document.getElementById("mesaj");



msjBtn.addEventListener("click",()=>{
    msjParag.textContent = `Merhaba ${input.value}`
})

