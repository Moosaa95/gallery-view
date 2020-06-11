
//getting the variable from the html
const [current, imgs, opacity, btn] = [document.querySelector('#current'), document.querySelectorAll('.imgs img'), 0.6, document.querySelector('.btn')];

imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click', imgClicked));


function imgClicked(e){

    //resetting the opacity
    imgs.forEach(img => img.style.opacity = 1);
    current.src = e.target.src;


    //adding class fades
    current.classList.add('fade-in');

    //remving class fades
    setTimeout(() => current.classList.remove('fade-in'), 500);
    e.target.style.opacity = opacity;

    
    
}
btn.addEventListener('click', function(){
    const bg = ['#fff', 'red', 'pink', 'black', '#545', '#767'];
    const marh = Math.floor(Math.random() * bg.length) ;


    document.querySelector('body').style.backgroundColor = bg[marh];
    
    
});
