const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

const hamMenu = docimen.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-mmenu');

hamMenu.addEventListener('click', () --> { hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})