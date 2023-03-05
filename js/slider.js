var intervalo =  setInterval(moverAleatorio, 2500)
const imagen = document.querySelector('#imagen')
const behind = document.querySelector('#behind');
const next = document.querySelector('#next')
const carrousel = document.querySelector('.carrousel')
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const footer = document.querySelector('.carrousel-footer')
var img = [];

//const imagenCarrousel = document.querySelectorAll('.imagen-carrousel')


document.addEventListener('DOMContentLoaded', function(){
    const i = Math.floor(Math.random() * 5)
    imagen.src = `img/pokemon/${i}.png`;
    crearGaleriaCarrousel()
    setInterval(carrouselFooter, 2500)

    toggle.addEventListener('click', () => nav.classList.toggle('active'))
    
    
})
function cont(max){
    return Math.floor(Math.random() * max);

}


function moverAleatorio(){
    
    if(cont(5) > 0 ){
        
        let imgG = cont(5)
        img = [...img, imgG]
       // console.log(img);
        imagen.src = `img/pokemon/${imgG}.png`;
   
    }
}
function crearGaleriaCarrousel(){

    for(let i = 1; i <= 5; i++){
        const imagen = document.createElement('img');
    
        imagen.classList.add('imagen-carousel');
        imagen.src = `img/pokemon/${i}.png`
        imagen.onclick  = extenderImagen
        imagen.id = i;
        carrousel.appendChild(imagen);
    }   
}
function carrouselFooter(){
        
            limpiarHTML()
            const i = cont(5)
            const imagenFoot = document.createElement('img');
            
            imagenFoot.classList.add('logo-carrousel');
            imagenFoot.src = `img/logo/logo-${i}.png`
            footer.appendChild(imagenFoot);
        
        

}
function limpiarHTML(){
    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
        console.log('se limpio');
    }
}
function extenderImagen(e){
    console.log(e.target.id);
    clearInterval(intervalo);
    const idImagen = e.target.id
    imagen.src = `img/pokemon/${idImagen}.png`
    intervalo = setInterval(moverAleatorio, 2500)

}

next.addEventListener('click', ()=>{
    clearInterval(intervalo);
    moverAleatorio();

    
    intervalo = setInterval(moverAleatorio, 2500)
})

behind.addEventListener('click', () =>{
    if (img > 0){
        
        clearInterval(intervalo);
        moverAleatorio();
        intervalo = setInterval(moverAleatorio, 2500)
        console.log('es 0');
    
    }else{
        clearInterval(intervalo);
        img.pop()
        const anterior = img[img.length-1]
        imagen.src = `img/pokemon${anterior}.png`
        //console.log(img[img.length-1]);
        intervalo = setInterval(moverAleatorio, 2500)
    }
    
})