var menubutton = document.querySelector('.pratik')
var leftNav = document.querySelector('.leftnav')


menubutton.addEventListener("click",function(){
    leftNav.classList.toggle('dropdown');
})