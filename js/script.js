let saturate   = document.getElementById("saturate")
let Contrast   = document.getElementById("Contrast")
let Brightness = document.getElementById("Brightness")
let Sepia      = document.getElementById("Sepia")
let Grayscale  = document.getElementById("Grayscale")
let Blur       = document.getElementById("Blur")
let Huerotate  = document.getElementById("Hue_Rotate")
let Upload     = document.getElementById("uploadlabel")
let Download   = document.getElementById("Download")
let Img        = document.getElementById("img")
let Reset      = document.getElementById("reset")
let input      = document.getElementById("uploadinput")
const canvas   = document.getElementById("canvas")
const  ctx     = canvas.getContext("2d")

window.onload = function(){

    Download.classList.add("hidden");
    Reset.classList.add("hidden");


}

function resetValue (){
    ctx.filter ="none"  
    saturate.value="100%"
    Contrast.value="100%"
    Brightness.value="100%"
    Sepia.value="0"
    Grayscale.value="0"
    Blur.value="0"
    Huerotate.value="0"
    ctx.drawImage(Img,0,0,canvas.width,canvas.height)


}

input.onchange = (e)=>{
    resetValue()
    Download.classList.remove("hidden");
    Reset.classList.remove("hidden");
    Img.src =`${e.target.value}`;
    let file = new FileReader();
    file.readAsDataURL(input.files[0])
    file.onload= ()=>{
     console.log(file.result);
     Img.src=file.result   
    }
    Img.onload = ()=>{
        canvas.width=Img.width
        canvas.height=Img.height
        ctx.drawImage(Img,0,0,canvas.width,canvas.height)
        Img.style.display="none"
    }

}


Reset.onclick = ()=>{resetValue()};



let filters = document.querySelectorAll(" .options input ");
filters.forEach( filter =>{
    filter.addEventListener('input',()=>{
      ctx.filter = `saturate(${saturate.value}%)
                           contrast(${Contrast.value}%)
                           brightness(${Brightness.value}%)
                           sepia(${Sepia.value}%)
                           grayscale(${Grayscale.value})
                           blur(${Blur.value}px)
                           hue-rotate(${Huerotate.value}deg)
          
                           `
                           ctx.drawImage(Img,0,0,canvas.width,canvas.height)

    })
   
})

Download.onclick = ()=>{
    console.log(Download);
    Download.href= canvas.toDataURL();
}