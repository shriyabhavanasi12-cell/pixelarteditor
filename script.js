
let penColour="black";



function setPixelColour(pixel){
    if (penColour==="eraser"){
        pixel.style.backgroundColor="";

    } else{
        pixel.style.backgroundColor=penColour;  
    }

}
document.addEventListener("DOMContentLoaded", ()=>{

const pixels=document.querySelectorAll(".pixel");
pixels.forEach((pixel)=>{

pixel.addEventListener("click",()=>setPixelColour(pixel));

});

const pens=document.querySelectorAll(".pen");

pens.forEach((pen)=>{
    pen.addEventListener("click",()=>{
      penColour=pen.dataset.colour;

    })
})


});


