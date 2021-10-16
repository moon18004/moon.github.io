let date = new Date();

let daysInWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

document.querySelector('.date').textContent =
  daysInWeek[date.getDay()] +
  ', ' +
  String(date.getDate()) +
  ' ' +
  months[date.getMonth()] +
  ' ' +
  String(date.getFullYear());

  function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () =>{
    navbarMenu.classList.toggle('open');
})

if (date.getDay() == 5){
  document.querySelector('#banner').style.display = 'block';
}
