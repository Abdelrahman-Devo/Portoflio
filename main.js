// active hamburger menu 
let openMenu = document.querySelector(".open-menu");
let closMenu = document.querySelector(".close-menu")
let hunMenu = document.querySelector(".humborger-mune")

openMenu.addEventListener("click",()=>{
    openMenu.classList.toggle("active");
    hunMenu.classList.toggle("active");
    openMenu.classList.toggle("d-non");
    closMenu.classList.remove("d-non")
});

// remove humMenu
closMenu.addEventListener("click",()=>{
    hunMenu.classList.remove("active");
    openMenu.classList.remove("active", "d-non");
    closMenu.classList.toggle("d-non");
})
// end ..

const hairBton = document.getElementById("hair");

hairBton.addEventListener("click", ()=>{
    if(hairBton.click){
        hairBton.setAttribute("href", "#contact")
    }
    else{
        console.log("error")
    }
})
