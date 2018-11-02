const perfundo = require('perfundo');

document.addEventListener("DOMContentLoaded", function () {

  const hamburgerBtn = document.getElementById('hamburgerBtn')
  const navList = document.getElementById('navList')

  hamburgerBtn.addEventListener('click', function () {
    navList.classList.toggle('nav__ul--active');

    perfundo('.perfundo', {
      disableHistory: true,
      swipe: true
    });
  })
})