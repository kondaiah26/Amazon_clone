const imgs= document.querySelectorAll('.header-slider ul img');
const next=document.querySelector('.next')
const prev=document.querySelector('.prev')

let n=0;
function imageslider(){
for(let i=0;i<imgs.length;i++){
    imgs[i].style.display='none'
}
imgs[n].style.display='block'
}

imageslider();

prev.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    imageslider();
})
next.addEventListener('click',(e)=>{
    if( n<imgs.length-1){
        n++;   
    }
    else{
        n=0;
    }
    imageslider();
})

const scrollContainer=document.querySelectorAll('.products')

for(let i of scrollContainer){
    i.addEventListener('wheel',(e)=>{
        e.preventDefault();
        i.scrollLeft+=e.deltaY;

    })
}
