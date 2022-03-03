let write = "And I'm a Full Stack Developer",i=0;
let pWrite = document.querySelector('.write');

let typeWrite = setInterval(function(){
    pWrite.innerHTML+=write[i];
    i= i+1;
    if(i>write.length - 1){
        clearInterval(typeWrite);
    }
},100 )

// let typeWrite = setInterval(function(){
//     pWrite.innerHTML+=write[write.len];
//     i= i+1;
//     if(i>write.length - 1){
//         clearInterval(typeWrite);
//     }
// },100 )


// show navbar
let menuToggle = document.querySelector('.menutoggle');
menuToggle.addEventListener("click",function(){
    document.querySelector('.t-line').classList.toggle('t-line-r');
    document.querySelector('.b-line').classList.toggle('b-line-r');
    document.querySelector('.m-line').classList.toggle('cach-m-line');
    document.querySelector('.navbar-mobile').classList.toggle('show-navbar-mobile');
})