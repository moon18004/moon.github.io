const monthNames = [
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

function getPerson() {

    start_time = new Date().getTime();
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((data) => {
        end_time = new Date().getTime() - start_time;
        drawPerson(data.results[0], end_time);
      });
} 
  
  
function drawPerson(person, timeElapsed) {
  document.querySelector('#img').setAttribute('src', person.picture.large);
  document.querySelector('#name').innerHTML =
    person.name.first + ' ' + person.name.last;
  document.querySelector('#gender').innerHTML = person.gender;
  document.querySelector('#email').innerHTML = person.email;
  document.querySelector('#password').innerHTML = person.login.password;
  document.querySelector('#location').innerHTML =
    person.location.city + ', ' + person.location.country;
  dateOfBirth = new Date(person.dob.date);
  document.querySelector('#date').innerHTML =
  `Date of Birth: ${person.dob.date.slice(0, 10)}`;
    // dateOfBirth.getDate() + ' of ' + monthNames[dateOfBirth.getMonth()];
  document.querySelector('#time').innerHTML = timeElapsed + 'ms';
}
  