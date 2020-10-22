//the idea is to make a class active with the 3d -animation and add/remove it when the hamburger element is clicked.
//requiring both hamburger and the container .
const hamburger_menu=document.querySelector(".hamburger-menu");
const  container=document.querySelector(".container");

//event listener
hamburger_menu.addEventListener("click",()=>{
  container.classList.toggle("active");
});
