const inputs=document.querySelectorAll("input");
const button=document.querySelector("button");
const mobile=document.querySelector("#mobile");
const expire=document.querySelector("#expire");

function generateOTP(){
   console.log( Math.floor(Math.random()*10)+
    ""+ Math.floor(Math.random()*10)+
    ""+ Math.floor(Math.random()*10)+
    ""+ Math.floor(Math.random()*10))
    expire.innerText=10;
    const expireInterval=setInterval(function(){
        expire.innerText--;
        if(expire.innerText == 0){
            clearInterval(expireInterval);
        }
       
    },1000)
}
generateOTP();
function clearOTP(){

}
inputs[0].focus();
inputs.forEach((input,index)=>{
input.addEventListener("keyup" ,function(e){
    const currentIndex=input,
    nextInput=input.nextElementSibling,
    prevInput=input.previousElementSibling;
    console.log(index)

    if(nextInput && nextInput.hasAttribute("disabled")&&currentIndex.value !==""){
        nextInput.removeAttribute("disabled",true)
        nextInput.focus();
    }
    if(e.key === "Backspace"){
        inputs.forEach((input,index1)=>{
           if(index <=index1 && prevInput){
            input.setAttribute("disabled",true)
            prevInput.focus();
            prevInput.value="";
           }

        })
    }
    if(!inputs[3].disabled && inputs[3].value !== ""){
        inputs[3].blur();
        button.classList.add("active")
        return
    }
    button.classList.remove("active")
})
})