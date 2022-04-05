let write = "And I'm a Full Stack Developer",i=0;
let pWrite = document.querySelector('.write');

let typeWrite = setInterval(function(){
    pWrite.innerHTML+=write[i];
    i= i+1;
    if(i>write.length - 1){
        clearInterval(typeWrite);
    }
},100 )

/////////////////show navbar

let menuToggle = document.querySelector('.menutoggle');
menuToggle.addEventListener("click",function(){
    document.querySelector('.t-line').classList.toggle('t-line-r');
    document.querySelector('.b-line').classList.toggle('b-line-r');
    document.querySelector('.m-line').classList.toggle('cach-m-line');
    document.querySelector('.navbar-mobile').classList.toggle('show-navbar-mobile');
})

/////////////////up to top


const up = document.querySelector(".up-top");

window.addEventListener("scroll",()=>{
    if(window.scrollY >200){
        up.classList.add("show-up-top");
        document.querySelector(".bg-nav").classList.add("show-bg-nav");
    }
    else{
        up.classList.remove("show-up-top"); 
        document.querySelector(".bg-nav").classList.remove("show-bg-nav");
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
