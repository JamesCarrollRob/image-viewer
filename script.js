/***to do list:
 * 1. Add images
 * 2. Add an auto feature
 * 3. change function to cycle through an array
 */

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');


let counter = 0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide() {
    container.animate([{opacity:'0.1'}, {opacity:'1.0'}],{duration:1500,fill:'forwards'});
    if(counter===4){
        counter = -1;
    }
    
    counter++;

    container.style.backgroundImage = `url(images/bcg-${counter}.jpg`
}

function prevSlide() {
    container.animate([{opacity:'0.1'}, {opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if(counter===0){
        counter = 5;
    }
    
    counter--;

    container.style.backgroundImage = `url(images/bcg-${counter}.jpg`
}


console.log("page is linked");