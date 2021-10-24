var mainMenu=document.querySelector('.main-menu');
var rightMenu=document.querySelector('.right-menu');
var menuBtn=document.querySelector('.menu-btn');
var showcaseContent=document.querySelector('.showcase-content');
var heading=document.querySelector('.nav-bar a');

menuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show')
    rightMenu.classList.toggle('showRightmenu')
    showcaseContent.classList.toggle('hide')
    heading.classList.toggle('hide2')
});

