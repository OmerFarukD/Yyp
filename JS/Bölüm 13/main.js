
const programmingLanguages = [

    {
        name : "C++",
        image:"./images/cpp.png",
        description:"Kullanım Alanları: Sistem Programlama,Oyun Gelişttirme,Gömülü Sistem "
    },

    {
        name:"Python",
        image:"./images/python.jpg",
        description:`Kullanım Alanları : 
                Veri Analizi,
                Veri Bilimi,
                Yapay Zeka,
                Web Geliştirme `
    },

    {
        name:"JavaScript",
        image:"./images/JavaScript.png",
        description:`Kullanım Alanları :
                Web Geliştirme, Mobil Uygulamalar, Yapay Zeka`
    },
    {
        name:"Java",
        image:"./images/java.png",
        description:`Kullanım Alanları : 
                Web Geliştirme, Android Uygulama Geliştirme`
    },
    {
        name:"C#",
        image:"./images/csharp.jpg",
        description:`    Kullanım Alanları : 
                Web Geliştirme, Oyun Geliştirme, Mobil Geliştirme ,
                Yapay Zeka, Masaüstü Uygulama Geliştirme  `
    },
    {
        name:"C#",
        image:"./images/csharp.jpg",
        description:`    Kullanım Alanları : 
                Web Geliştirme, Oyun Geliştirme, Mobil Geliştirme ,
                Yapay Zeka, Masaüstü Uygulama Geliştirme  `
    }
]

const gridContainer = document.querySelector(".grid-container");

programmingLanguages.forEach((language)=>{


// Kart ekleme
const card = document.createElement("div");
card.classList.add("card")

// Resim
const img = document.createElement("img");
img.src = language.image;
img.alt = `${language.image} Logo`;

// Başlık 
const title = document.createElement("h2");
title.textContent = language.name;

// Açıklama 
const description = document.createElement("p");
description.textContent = language.description;


gridContainer.appendChild(card);
card.appendChild(img);
card.appendChild(title);
card.appendChild(description)
});
