const elements = document.querySelectorAll('[data-animation]');
const animationClass = "animate"
let timer = false


function animationOnScroll(){

    const windowTop = window.pageYOffset + window.innerHeight * 0.75
    elements.forEach(element=>{
       if(windowTop > element.offsetTop){
           element.classList.add(animationClass)
       }else{
        element.classList.remove(animationClass)
       }
    })

}

let anuncioDiv = document.getElementById('anuncio')
let already = false
document.addEventListener("mouseleave",()=>{
    if(!already){

        let contador = 1;

        let interval = setInterval(() => {
            if(contador == 5){
                anuncioDiv.style.display = "flex"
                anuncioDiv.style.opacity = " 1"
                clearInterval(interval)
                already = true
                
            }else{
                contador++
            }
        }, 1000);
    
        document.addEventListener("mouseenter",()=>{
            clearInterval(interval)
        })

    }else{
        return
    }


})

document.getElementById('anuncioExit').addEventListener('click',removerAnuncio)

anuncioDiv.addEventListener('click',removerAnuncio)


function removerAnuncio(){
    anuncioDiv.style.display = "none"
}



if(elements.length){

window.addEventListener('scroll',()=>{
    if(timer == false){
        animationOnScroll()
        timer = true
        setTimeout(()=>{
            timer = false
        },150)
    }
    
})
animationOnScroll()
}