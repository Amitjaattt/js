/*const cart = document.querySelector("nav .cart")
const cartsidebar = document.querySelector(".cart-sidebar")
const closeCart = document.querySelector(".close-Cart")
const burger = document.querySelector(".burger")
const menusidebar = document.querySelector(".menu-sidebar")
const closemenu = document.querySelector(".close-menu")
const cartItemsTotal = document.querySelector("noi")
const cartPriceTotal = document.querySelector(".total-amount")
const cartUi = document.querySelector(".cart-sidebar .cart")
const totalDiv = document.querySelector(".total-sum")
const clearBtn = document.querySelector(".clear-cart-btn")
const cartcontent = document.querySelector(".cart-content")

let amit=[];
let buttonDom = [];

cart.addEventListener("click",function(){
    cartsidebar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay")
    setYimeout(function(){
        document.querySelector("body").append(bodyOverlay)

    },300)
})


closeCart.addEventListener("click",function(){
    cartSideBar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
})



burger.addEventListener("click",function(){
    menusidebar.style.transform = "translate(0%)"
})
closemenu.addEventListener("click",function(){
    menusidebar.style.transform = "translate(-100%)"
})


class product{
    async getproduct(){
        const respnose = await fetch("products.json");
        const data = await respnose.json()
        let products = data.items;
        products = products.map(item=>{
            const{title,price} = item.feilds;
            const{id} = item.sys;
            const image = item.fiilds.image.fields.file.url;
            return {title,price,id,image
            };
        })
        return products;
    }
}


class UI{
    displayProduct(products){
        let result = "";
        products.forEach(product=>{
            const productDiv = document.createElement("div")
            productDiv.innerHTML = <div class = "product-card">
                <img src="${product.image}"alt="product"></img>

                  <span class="add-to-cart" data-id="${product.id}">
                       <i class = "fa fa-cart --plus fa-1x"   
                       style ="margin-right:0.1em; font-size:1em;"></i>
                       Add to cart
                       </span>
                       <div class = "product-name">${product.title}</div>
                       <div class = "product-pricing">${product.title}</div>
                 </div>
                 const p = document.querySelector(".product")
                 p.append(productDiv)
        })
    }
}

getButtons();{
    const btns = document.querySelectorAll(".add-to-cart")
    Array.from(btns)
    buttonDom = btns;
    btns.forEach((btn)=>{
        let id = btn.dataset.id
        let incart = cart.find((item)=>item.id===id);
        if(incart)
        {
            btn.innerHTML = "In cart"
            btn.dissabled = true
        }
        btn.addEventListener("click",(e)=>{
            e.currentTarget.innerHtml = "In Cart"
            e.currentTarget.style.color = "white"
            e.currentTarget.style.pointerEvents = "none"
            let cartItem ={...Storage.getStorageProduct(id),'amount':1}
            cart.push(cartItem)
            Storage.saveCart(cart)
            this.setCartValues(cart)
            this.addcartItem(cartItem)
        })
    })
}
setCartValues(cart);{
    let tempTotal = 0;
    let cartItemsTotal = 0;
    cart.map((item)=>{
        tempTotal += (item.price*item.amount);
        itemTotal += item.amount;
        parseFloat(tempTotal.toFixed(2))
    })
    cartItemsTotal.innerHTML = iemsTotal 
    cartPriceTotal.innerHTml = parseFloat(tempTotal.toFixed(2))

}
addCartItem(cartItem);{
    let cartItemUi = document.createElement("div")
    cartItemUi.innerHTML = <div class = "cart=product">
                           <div class = "product-image">
                              <img src = "${cartItem.image}" alt="product"></img>
                            </div>
                            <div class = "cart-product-content">
                            <div class = "cart-product-name"><h3>${cartItem-title}</h3></div>
                            <div  class = "cart-product-name"><h3>${cartItem-price}</h3></div>
                            <div class= "cart-product-remove data-id="${...cartItem.id}
                          href = "#" style="color:red;">remove</div>
                            </div>
                            <div class ="plus-minus">
                            <i class= "fa fa-angle-left add-amount"
                            data-id="${cartItem.id}"></i>
                            <span class="no-of-items">${cartItem.amount}</span>
                            data-id="${cartItem.id}"
                            </div>
                            </div>
                            cartcontent.append(cartItemUi)
}
     setupApp();{
        cart = Storage.getcart()
        this.setCartValues(cart)
        cart.map((item)=>{
            this.addcartItem(item)
        })
     }
     cartLogic();{
        clearBtn.addEventListener("click",()=>{
            this.closeCart()
        })
        cartcontent.addEventListener("click",(event)=>{
            if(event.target.classList.constains("cart-product-remove")){
                let id = event.target.dataset.id
                this.removeItem(id)
                let div = event.target.parentElement.parentElement.parentElement.parentElement
                removeChild(event.target.parentElement.parentElement.parentElement.parentElement)
            }
            else if(event.target.classList.constains("add-amount")){
                let id = event.target.dataset.id
                let item = cart.find((item)=>item.id===id)
                item.amount++
                Storage.savcart(cart)
                this.setCaertValues(cart)
                event.target.nextElementSibling.innerHTML = item.amount
            }
            else if(event.target.classList.constains("reduce-amount")){
                let id = event.target.dataset.id
                let item = cart.find((item)=>item.id===id)
                if(item.amount>0){
                      item.amount--
                      Storage.saveCart(cart)
                      this.setCartValues(cart)
                      event.target.previousElementSibling.innerHTML = item.amount
                }
                else{
                    this.removeItem(id)
                    let div=event.target.parentElement.parentElement.parentElement.parentElement
                    div.removeChild(event.target.parentElement.parentElement.parentElement.parentElement)

                }
            }
        })


     }
     addAmount();{
        const addBtn = document.querySelectorAll(".add-mount")
        addBtn.forEach((btn)=>{
            btn.addEventListener("click",(event)=>{
                let id = (event.currentTarget.dataset.id)
                cart.map((item)=>{
                    if(item.id===id){
                    item.amount++
                    Storage.saveCart(cart)
                    this.setCartValues(cart)
                    const amountUI = event.currentTarget.parentElement.children[1]
                    amountUI.innerHTML = item.amount
                    }

                })
            })
        })
     }
     reduceAmount();{
        const reduceBtn = document.querySelectorAll(".reduce-amount")
        reduceBtn.forEach((btn)=>{
            btn.addEventListener("click",(event)=>{ 
            let id = (event.currentTarget.dataset.id)
            cart.map((item)=>{
                if(item.id===id){
                    item.amount--
                    if(item.amount>0){
                        Storage.saveCart(cart)
                        this.setCaertValues(cart)
                    }
                }
            })
        })
    })
     }*/
     const sign_in_btn = document.querySelector("#sign-in-btn");
     const sign_up_btn = document.querySelector("#sign-up-btn");
     const container = document.querySelector(".container");
     const sign_in_btn2 = document.querySelector("#sign-in-btn2");
     const sign_up_btn2 = document.querySelector("#sign-up-btn2");
     sign_up_btn.addEventListener("click", () => {
         container.classList.add("sign-up-mode");
     });
     sign_in_btn.addEventListener("click", () => {
         container.classList.remove("sign-up-mode");
     });
     sign_up_btn2.addEventListener("click", () => {
         container.classList.add("sign-up-mode2");
     });
     sign_in_btn2.addEventListener("click", () => {
         container.classList.remove("sign-up-mode2");
     });















  