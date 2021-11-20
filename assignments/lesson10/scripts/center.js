function adjustRating(rating) {
    document.querySelector("#rating_value").innerHTML = rating;
  }

  const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () =>{
    navbarMenu.classList.toggle('open');
})