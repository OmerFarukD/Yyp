const STORAGE_KEY = "products";

function loadProducts(){
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveProducts(products){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(products));
}




let products = loadProducts();

// products : [

//     {name:"Kupa Bardak",stock:200,price:350},
//     {name:"Anı Defteri",stock:250,price:450},
//     {name:"Anı Defteri 1",stock:2500,price:350}
// ]

function renderProducts(){

    const tableBody = document.getElementById("product-table");

    if(tableBody){
        tableBody.innerHTML = "";

        products.forEach((product)=>{

            const row = `
             <tr>
                    <td>${product.name}</td>
                    <td>${product.stock}</td>
                    <td>${product.price}</td>
                </tr>
            `;

            tableBody.innerHTML += row;
        })
    }

}


const addProduct = (name,price,stock)=>{
  
    console.log(name,price,stock);
    products.push({name, stock:parseInt(stock),price:parseFloat(price)});
    saveProducts(products);
}


const form = document.getElementById("product-form");

if(form){
    form.addEventListener("submit",(event)=>{

        event.preventDefault();;
        
        const productName = document.getElementById("productName").value.trim();
        const stock = document.getElementById("stock").value;
        const price = document.getElementById("price").value;
        


        let isValid = true;
        
        if(!productName || productName.length<3){
            isValid= false;
            document.getElementById("error-productName")
            .textContent = "Ürün Adı minimum 3 karakterli olmalıdır."
        }else{
          
            document.getElementById("error-productName").textContent="";
        }
        
        if(stock<=0){
            isValid = false;
            document.getElementById("error-stock")
            .textContent = "Ürün Stoğu 0 veya negatif değer alamaz."
        }else{
         
                document.getElementById("error-stock")
            .textContent = ""
        }
        
        if(price<=0){
            isValid = false;
            document.getElementById("error-price")
            .textContent = "Ürün Değeri 0 veya negatif değer alamaz."
        }else{
         
                document.getElementById("error-price")
            .textContent = ""
        }
        
        if(isValid){

            console.log(productName,price,stock);
            console.log(typeof price);
            console.log(typeof stock);
            addProduct(productName,price,stock);
            window.location.href = "index.html";
        }
        
        });
        
}
renderProducts();