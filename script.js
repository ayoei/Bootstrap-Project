let mainNavbar = document.getElementById('mainNavbar');
window.onscroll = function () {
  if (window.scrollY > 22) {
    mainNavbar.classList.add('scrolled');
  } else {
    mainNavbar.classList.remove('scrolled');
  }
};