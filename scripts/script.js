const elements = document.querySelectorAll('[data-animation]');
const animationClass = "animate"
let timer = false


function animationOnScroll(){

    const windowTop = window.pageYOffset + window.innerHeight * 0.75
    console.log('a')
    elements.forEach(element=>{
       if(windowTop > element.offsetTop){
           element.classList.add(animationClass)
       }else{
        element.classList.remove(animationClass)
       }
    })

}

let anuncioDiv = document.getElementById('anuncio')
document.addEventListener("mouseleave",()=>{
    anuncioDiv.style.display = "flex"
})

document.getElementById('anuncioExit').addEventListener('click',removerAnuncio)

anuncioDiv.addEventListener('click',removerAnuncio)


function removerAnuncio(){
    console.log('funcionando')
    console.log(anuncioDiv)
    anuncioDiv.display = "none"
}



if(elements.length){

window.addEventListener('scroll',()=>{
    if(timer == false){
        animationOnScroll()
        timer = true
        setTimeout(()=>{
            timer = false
        },200)
    }
    
})
animationOnScroll()
}