function showTab(myClickEvent) {
  //get the click event and use it to stop the default action
  myClickEvent.preventDefault();

  //Get the href attribute with the id of the desired content
  var tabTarget = this.getAttribute('href');

  //Hides every block
  document.querySelectorAll('.tab-content .block').forEach(function(myElement) {
    myElement.classList.remove('active');
  });

  //Displays the current block
  document.querySelector(tabTarget).classList.add('active');
}

//showTab function gets linked to click event
document.querySelectorAll('.tabs a').forEach(function(myElement) {
  myElement.addEventListener('click', showTab);
});
