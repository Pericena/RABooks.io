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
    const i = Math.floor(Math.random() * 50)
    imagen.src = `dist/${i}.glb`;
    crearGaleriaCarrousel()
    setInterval(carrouselFooter, 2500)

    toggle.addEventListener('click', () => nav.classList.toggle('active'))
    
    
})
function cont(max){
    return Math.floor(Math.random() * max);

}


function moverAleatorio(){
    
    if(cont(50) > 0 ){
        
        let imgG = cont(50)
        img = [...img, imgG]
       // console.log(img);
        imagen.src = `dist/${imgG}.glb`;
    }
}
function crearGaleriaCarrousel(){

    for(let i = 1; i <= 50; i++){
        const imagen = document.createElement('img');
    
        imagen.classList.add('imagen-carousel');
        imagen.src = `dist/${i}.glb`
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
            imagenFoot.src = `img/logo/logo-${i}.glb`
            
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
    imagen.src = `dist/${idImagen}.glb`
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
        imagen.src = `dist${anterior}.glb`
        //console.log(img[img.length-1]);
        intervalo = setInterval(moverAleatorio, 2500)
    }
    
})