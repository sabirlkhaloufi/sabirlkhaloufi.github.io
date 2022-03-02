let write = "And I'm a Full Stack Developer",i=0;
let pWrite = document.querySelector('.write');

let typeWrite = setInterval(function(){
    pWrite.innerHTML+=write[i];
    i= i+1;
    if(i>write.length - 1){
        clearInterval(typeWrite);
    }
},200)