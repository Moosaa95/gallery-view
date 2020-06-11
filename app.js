//connecting javascript to the html DOM
const [current, imgs, opacity] = [document.querySelector('#current'), document.querySelectorAll('.imgs img'), 0.6];


imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click', imgClick));

//getting the first image to be blur

//function for img clicked 

function imgClick(e){
    //resetting opacity 
    imgs.forEach(img => img.style.opacity = 1)
    current.src = e.target.src;

    //adding fading class
    current.classList.add('fade-in');

    //removing the fadeins
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //making the img blur by adding opacity

    e.target.style.opacity = opacity;
}
