function navScroll() {
  var navElement = document.querySelector('.header');
  var navHeight = navElement.clientHeight;
  var referenceElement = document.querySelector('.cover');

  function checkPosition() {
    var posY = referenceElement.getBoundingClientRect().bottom;
    if (posY - navHeight < 0) {
      navElement.classList.add('scroll');
    } else {
      navElement.classList.remove('scroll');
    }
  }

  window.addEventListener('scroll', checkPosition);
}
navScroll();
