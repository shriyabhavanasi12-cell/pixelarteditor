function setPixelColour(pixel){
    pixel.style.backgroundColor="red";

}
document.addEventListener("DOMContentLoaded", ()=>{

const pixels=document.querySelectorAll(".pixel");
pixels.forEach((pixel)=>{

pixel.addEventListener("click",()=>setPixelColour(pixel));

});


});

