import animations from './functions.js';

const animateObject = animations.animations

let menuToggler = document.getElementById("menu-toggler")
let header = document.querySelector("header")
document.body.onscroll = () => {
    animateObject.scrollHeader(header)
}

console.log(animations.animations);

menuToggler.onclick = () => {
    animateObject.menuToggle(header)
}