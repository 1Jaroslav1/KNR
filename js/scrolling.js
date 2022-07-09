
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

// function findActualSection(elements, offset){
//     for(let i = 1; i < elements.length; i++){
//         if(elements[i].getBoundingClientRect().y - offset > 0 && elements[i - 1].getBoundingClientRect().y - offset < 0){
//             return elements[i-1].getAttribute('data-section');
//         }
//     }
//     return elements[elements.length-1].getAttribute('data-section');
// }

// // Show active menu when scrolling
// const highlightMenu = () => {
//     const elems = document.querySelectorAll('[data-section]');
//     const menu = document.querySelectorAll('.navbar-link');

//     let actualSection = findActualSection(elems, 200);
//     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
//         actualSection = elems[elems.length-1].getAttribute('data-section')
//     }

//     menu.forEach(menuItem => {
//         menuItem.classList.remove('active');
//     });

//     const actualMenuItem = document.getElementById(`${actualSection}-page`);
//     if(actualMenuItem) actualMenuItem.classList.add('active');
// };

window.addEventListener('scroll', highlightMenu);
