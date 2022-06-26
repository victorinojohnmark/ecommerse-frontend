const popUpMenu = document.querySelector('#pop-up-menu');
const menuBackDrop = document.querySelector('#menu-backdrop');
const popUpMenuButton = document.querySelector('#menu-popup-button');
const popUpMenuClose = document.querySelector('#pop-up-menu-close');

popUpMenuClose.addEventListener('click', function() {
    popUpMenu.classList.remove('menu-overlay');
});

Array.from([popUpMenuButton, menuBackDrop]).forEach((e) => {
    e.addEventListener('click', function() {
        toggleMenu();
    })
})



function toggleMenu() {
    if(popUpMenu.classList.contains('menu-overlay')) {
        popUpMenu.classList.remove('menu-overlay')
    } else {
        popUpMenu.classList.add('menu-overlay')
    }
}