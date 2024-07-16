let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let sbox = document.querySelector('.search-box');


// menu.onclick = () => {
//     menu.classList.toggle('bx-x')
//     navlist.classList.toggle('open')
// }

function toggleMenu() {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    sbox.classList.toggle('open');
}

menu.onclick = toggleMenu;
