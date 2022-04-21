let write = "And I'm a Full Stack Developer",i=0;
let pWrite = document.querySelector('.write');

let typeWrite = setInterval(function(){
    pWrite.innerHTML+=write[i];
    i= i+1;
    if(i>write.length - 1){
        clearInterval(typeWrite);
    }
},100 )

/////////////////up to top


const up = document.querySelector(".up-top");

window.addEventListener("scroll",()=>{
    if(window.scrollY >200){
        up.classList.add("show-up-top");
        document.querySelector(".navbar").classList.add("navbar-bg");
    }
    else{
        up.classList.remove("show-up-top"); 
        document.querySelector(".navbar").classList.remove("navbar-bg");
    }
})

up.addEventListener("click",()=>{
    document.documentElement.scrollTop=0;
})

/////////////////////hover pour des carde services
const cardServices = document.querySelectorAll(".card");

cardServices.forEach(card => {
    card.addEventListener("mouseover",()=>{
        card.children[0].style.color = "white";
    })
    card.addEventListener("mouseout",()=>{
        card.children[0].style.color = "crimson";
    })

});
