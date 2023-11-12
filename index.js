var togglebar = document.getElementById("toggle-bar");
var header=document.querySelector("header")
var navbar = document.getElementById("navbar");
var closeicon = document.getElementById("closeicon");
var showicon = document.getElementById("showicon");

window.addEventListener("scroll",()=>{
   if(window.scrollY >0){
      header.classList.add("activeheader")
   }else{
    header.classList.remove("activeheader")
   }
})
togglebar.addEventListener("click", () => {
  navbar.classList.add("activenavbar");
});
closeicon.addEventListener("click",()=>{
  navbar.classList.remove("activenavbar")
})




