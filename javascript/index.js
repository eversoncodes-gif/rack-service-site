 // aqui sao as variaveis constantes
 const menu = document.querySelector(".menu-toggle")
 const nav = document.querySelector(".nav-bar")

 // aqui e o evento que quero que aconteca
menu.addEventListener("click", () =>{
  nav.classList.toggle("active")
 })

