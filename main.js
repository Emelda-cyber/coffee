let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}


let header = document.querySelector('hearder');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0 );
}
);

let cartIcon = document.querySelector("#cartIcon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#closeCart");

//opening cart
cartIcon.onclick = () => {
cart.classList.add("active");
};

//closing cart
closeCart.onclick = () => {
cart.classList.remove("active");
};

if (document.readyState== "loading") {
document.addEventListener("DOMContentLoaded", ready);
}
else{
ready();
}