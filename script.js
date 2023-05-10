let imgSize=document.querySelector(".imgSize");
let textImg=document.querySelector(".textImg");
let imgClr=document.querySelector(".clrImg");
let clrText=document.querySelector(".clrText");
let creater=document.querySelector(".new-Box");

let div=document.createElement("div");
console.log(imgSize.value.split("-"));
imgSize.addEventListener("change",() =>{
    
    let arr=imgSize.value.split("x");
    console.log(arr);
    div.style.width=arr[0]+"px";
    div.style.height=arr[1]+"px";
    div.style.background=`${imgClr.value}`;
    creater.appendChild(div);
    
})


textImg.addEventListener("change",()=>{
    let value=textImg.value;
    div.textContent=`${value}`;

})

clrText.addEventListener("change",()=>{
    let clr=clrText.value;
   
    div.style.color=`${clr}`;
    
    
})

imgClr.addEventListener("change",()=>{
    let clr=imgClr.value;
    div.style.backgroundColor=`${clr}`;
})
