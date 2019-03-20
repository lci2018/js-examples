function changeClass() {
  this.classList.toggle('active');
}

document.querySelectorAll('.element').forEach(function(e) {
  e.addEventListener('click', changeClass);
});
