//auqi sao as variaveis, nao se esqueca o querySelector e para selecionar um item dentro do html
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-bar");

menu.addEventListener("click",() =>{
  nav.classList.toggle("active");
});
