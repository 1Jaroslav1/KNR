function addActiveNav(navItemsSelector){
    const nav = document.querySelectorAll(navItemsSelector);
    nav.forEach(nav_item => {
        nav_item.addEventListener('click', (e)=>{
            e.preventDefault()
            if(!e.target.querySelector("i") && !e.target.classList.contains("fas")){
                nav.forEach(i => {
                    if(i.classList.contains('active')){
                        i.classList.remove('active');
                    }
                });
                e.target.classList.add('active');
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
        hamburger.classList.toggle('fa-bars');
        hamburger.classList.toggle('fa-times');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', (e) => {
            nav.classList.remove('navbar-mobile');
            hamburger.classList.toggle('fa-bars');
            hamburger.classList.toggle('fa-times');
        });
    });
}

window.addEventListener('DOMContentLoaded', function() {
    addActiveNav('.navbar-link');
    clickBars('.navbar', '.navbar-link', '.mobile-nav-bars');
});