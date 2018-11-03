document.addEventListener("DOMContentLoaded", function () {

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navList = document.getElementById('navList');
  const nav = document.getElementsByClassName('nav')[0];
  const navLis = document.getElementsByClassName('nav__li');
  const navLogo = document.getElementsByClassName('nav__logo')[0];

  hamburgerBtn.addEventListener('click', function () {
    navList.classList.toggle('nav__ul--active');
  })

  window.addEventListener('scroll', function () {
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY > 150) {
      nav.classList.remove('nav--no-background');
      navLogo.classList.remove('nav__logo--no-color');
      Array.from(navLis).map((elem) => elem.classList.remove('nav__li--no-color'));
    } else if (scrollPosY <= 150) {
      nav.classList.add('nav--no-background');
      navLogo.classList.add('nav__logo--no-color');
      Array.from(navLis).map((elem) => elem.classList.add('nav__li--no-color'));
    }
  })
})