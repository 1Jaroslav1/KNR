function addActiveNav(navItemsSelector, activeSelector){
    const nav = document.querySelectorAll(navItemsSelector);
    nav.forEach(nav_item => {
        nav_item.addEventListener('click', (e)=>{
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


function findActualSection(elements, offset){
    for(let i = 1; i < elements.length; i++){
        if(elements[i].getBoundingClientRect().y - offset > 0 && elements[i - 1].getBoundingClientRect().y - offset < 0){
            return elements[i-1].getAttribute('data-section');
        }
    }
    return elements[elements.length-1].getAttribute('data-section');
}

// Show active menu when scrolling
const highlightMenu = () => {
    const elems = document.querySelectorAll('[data-section]');
    const menu = document.querySelectorAll('.navbar-link');
    let elemsHeight = [];
    let elemActiveRanges = [];
    let diffValues = [];

    elems.forEach((elem) => {
        elemsHeight.push(elem.offsetHeight);
    })

    let index = 0;
    let actualHeightSum = 0;
    elems.forEach((elem) => {
        if (elem.offsetTop !== 0) {
            if (actualHeightSum < document.body.scrollHeight - $(window).height()) {
                elemActiveRanges.push(elem.offsetTop - 200)

            } else {
                let heightVal = 0;

                for (let i = index; i < elemsHeight.length - 1; i++) {
                    heightVal += elemsHeight[i];
                }

                elemActiveRanges.push(document.body.scrollHeight - $(window).height() - heightVal)
            }
        } else {
            elemActiveRanges.push(elem.offsetTop);
        }

        actualHeightSum += elem.offsetHeight;
        index++;
    });

    elemActiveRanges.forEach((range) => {diffValues.push(window.scrollY - range);})

    let positiveValues = diffValues.filter((value) => {return value >= 0; })

    let activeRange = diffValues.indexOf(Math.min.apply(Math, positiveValues));

    index = 0;
    menu.forEach((menuItem) => {
        index === activeRange
        ? menuItem.classList.add('active')
        : menuItem.classList.remove('active');
        index++;
    });

};

window.addEventListener('scroll', highlightMenu);
