function addActiveNav(navItemsSelector, activeSelector){
    const nav = document.querySelectorAll(navItemsSelector);
    nav.forEach(nav_item => {
        nav_item.addEventListener('click', (e)=>{
            e.preventDefault()
            if(!e.target.querySelector("i") && !e.target.classList.contains("fas")){
                nav.forEach(i => {
                    if(i.classList.contains(activeSelector)){
                        i.classList.remove(activeSelector);
                    }
                });
                e.target.classList.add(activeSelector);
            }
        });
    });
}


function clickBars(navSelector, navItemsSelector, barsSelector){
    const nav = document.querySelector(navSelector),
    menuItem = document.querySelectorAll(navItemsSelector),
    hamburger = document.querySelector(barsSelector);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('navbar-mobile');
        hamburger.children[0].classList.toggle('fa-bars');
        hamburger.children[0].classList.toggle('fa-times');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', (e) => {
            nav.classList.remove('navbar-mobile');
            hamburger.children[0].classList.toggle('fa-bars');
            hamburger.children[0].classList.toggle('fa-times');
        });
    });
}


// function slider({container, slide, nextArrow, prevArrow, wrapper, field}) {
//     let offset = 0;
//     let slideIndex = 1;

//     const slides = document.querySelectorAll(slide),
//         slider = document.querySelector(container),
//         prev = document.querySelector(prevArrow),
//         next = document.querySelector(nextArrow),
//         slidesWrapper = document.querySelector(wrapper),
//         width = window.getComputedStyle(slidesWrapper).width,
//         slidesField = document.querySelector(field);


//     slidesField.style.width = 100 * slides.length + '%';
//     slidesField.style.display = 'flex';
//     slidesField.style.transition = '0.5s all';

//     slidesWrapper.style.overflow = 'hidden';

//     slides.forEach(slide => {
//         slide.style.width = width;
//     });

//     slider.style.position = 'relative';

//     const indicators = document.createElement('ol'),
//           dots = [];
//     indicators.classList.add('carousel-indicators');
//     indicators.style.cssText = `
//         position: absolute;
//         right: 0;
//         bottom: 0;
//         left: 0;
//         z-index: 15;
//         display: flex;
//         justify-content: center;
//         margin-right: 15%;
//         margin-left: 15%;
//         list-style: none;
//         margin-bottom: 30px;
//     `;
//     slider.append(indicators);

//     for (let i = 0; i < slides.length; i++) {
//         const dot = document.createElement('li');
//         dot.setAttribute('data-slide-to', i + 1);
//         dot.style.cssText = `
//             box-sizing: content-box;
//             flex: 0 1 auto;
//             width: 40px;
//             height: 6px;
//             margin-right: 5px;
//             margin-left: 5px;
//             cursor: pointer;
//             background-color: #fff;
//             background-clip: padding-box;
//             border-top: 10px solid transparent;
//             border-bottom: 10px solid transparent;
//             opacity: .5;
//             transition: opacity .6s ease;
//         `;
//         if (i == 0) {
//             dot.style.opacity = 1;
//         }
//         indicators.append(dot);
//         dots.push(dot);
//     }

//     next.addEventListener('click', () => {
//         if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
//             offset = 0;
//         } else {
//             offset += deleteNotDigits(width);
//         }
//         console.log(deleteNotDigits(width));
//         console.log(offset);

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == slides.length) {
//             slideIndex = 1;
//         } else {
//             slideIndex++;
//         }

//         dots.forEach(dot => dot.style.opacity = ".5");
//         dots[slideIndex-1].style.opacity = 1;
//     });

//     prev.addEventListener('click', () => {
//         if (offset == 0) {
//             offset = deleteNotDigits(width) * (slides.length - 1);
//         } else {
//             offset -= deleteNotDigits(width);
//         }

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == 1) {
//             slideIndex = slides.length;
//         } else {
//             slideIndex--;
//         }

//         dots.forEach(dot => dot.style.opacity = ".5");
//         dots[slideIndex-1].style.opacity = 1;
//     });

//     dots.forEach(dot => {
//         dot.addEventListener('click', (e) => {
//             const slideTo = e.target.getAttribute('data-slide-to');

//             slideIndex = slideTo;
//             offset = deleteNotDigits(width) * (slideTo - 1);

//             slidesField.style.transform = `translateX(-${offset}px)`;

//             dots.forEach(dot => dot.style.opacity = ".5");
//             dots[slideIndex-1].style.opacity = 1;
//         });
//     });

//     function deleteNotDigits(str) {
//         return parseFloat(str);
//         // return +str.replace(/\D/g, '');
//     }
// }

window.addEventListener('DOMContentLoaded', function() {
    addActiveNav('.navbar-link', 'active');
    clickBars('.navbar', '.navbar-link', '.mobile-nav-bars');
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    // slider({
    //     container: '.project-start__slider',
    //     slide: '.project-start__item',
    //     nextArrow: '.project-start__slider-next',
    //     prevArrow: '.project-start__slider-prev',
    //     wrapper: '.project-start__wrapper',
    //     field: '.project-start__inner'
    // });
});

$(document).ready(function(){
    $('.projects__item-slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    });
    $('.sponsors__slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    });
});


// Show active menu when scrolling
const highlightMenu = () => {
    const startMenu = document.querySelector('#start-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    const sponsorsMenu = document.querySelector('#sponsors-page');
    const footerMenu = document.querySelector('#footer-page');

    let scrollPos = window.scrollY;
    console.log(scrollPos);

    let scrollRanges = [];

    if (window.innerWidth >= 1600) {
        scrollRanges = [700, 2000, 5400, 5550];
    } else if (window.innerWidth >= 992) {
        scrollRanges = [700, 2000, 5000, 5200];
    } else if (window.innerWidth >= 768) {
        scrollRanges = [1050, 2900, 6500, 6650];
    } else {
        scrollRanges = [950, 2850, 6000, 6300];
    }

    if (scrollPos < scrollRanges[0]) {
        startMenu.classList.add('active');
        aboutMenu.classList.remove('active');
        projectsMenu.classList.remove('active');
        sponsorsMenu.classList.remove('active');
        footerMenu.classList.remove('active');

    } else if (scrollPos < scrollRanges[1]) {
        startMenu.classList.remove('active');
        aboutMenu.classList.add('active');
        projectsMenu.classList.remove('active');
        sponsorsMenu.classList.remove('active');
        footerMenu.classList.remove('active');

    } else if (scrollPos < scrollRanges[2]) {
        startMenu.classList.remove('active');
        aboutMenu.classList.remove('active');
        projectsMenu.classList.add('active');
        sponsorsMenu.classList.remove('active');
        footerMenu.classList.remove('active');

    } else if (scrollPos < scrollRanges[3]) {
        startMenu.classList.remove('active');
        aboutMenu.classList.remove('active');
        projectsMenu.classList.remove('active');
        sponsorsMenu.classList.add('active');
        footerMenu.classList.remove('active');
    } else {
        startMenu.classList.remove('active');
        aboutMenu.classList.remove('active');
        projectsMenu.classList.remove('active');
        sponsorsMenu.classList.remove('active');
        footerMenu.classList.add('active');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
