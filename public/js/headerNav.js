let navBar = document.getElementById("buttonNavBar");

let mainContainer = document.getElementById('mainContainer');

let subNavBar = document.getElementById('subNavBar');

navBar.addEventListener('click', function() {
    mainContainer.classList.toggle('mainContainerMax')
})

subNavBar.addEventListener('click', function(){
    mainContainer.classList.toggle('subMainContainerMax')
})

//scroll 
window.addEventListener("scroll", () => {
    if(window.scrollY >= 20){
       document.querySelector(".navBarSticky").classList.add("header-opacity")
   }else {
       document.querySelector(".navBarSticky").classList.remove("header-opacity")
   }
})
