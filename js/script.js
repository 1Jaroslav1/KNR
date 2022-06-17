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

window.addEventListener('DOMContentLoaded', function() {
    addActiveNav('.navbar-link', 'active');
    clickBars('.navbar', '.navbar-link', '.mobile-nav-bars');
});