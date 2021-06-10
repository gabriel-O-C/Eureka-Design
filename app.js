// DOM ELEMENTS
let totalSlides = document.querySelectorAll('.slide').length;
let slideLenght = document.querySelector('.sliders').style.width = `calc(100vw * ${totalSlides})`;
let controls = document.querySelectorAll('.pointers');
// END OF DOM ELEMENTS

// VARIABLES
let currentSlide = 0;
// END OF VARIABLES

// EVENT HANDLERS

function prevSlide(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();


}

function nextSlide() {
    currentSlide++;
    if(currentSlide > (totalSlides -1)){
        currentSlide = 0;
    }
    updateMargin();

}

// END OF EVENT HANDLERS

// FUNCTIONS 
let updateMargin = () =>{
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slide').style.marginLeft = `-${newMargin}px`
}
// END OF FUNCTIONS