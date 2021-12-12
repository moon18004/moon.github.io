
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Inject to DOM
document.getElementById("currentDate").innerHTML = days[currentDate.getDay()] + ", " + months[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentYear;

// ToggleMenu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
// Create the five-day forecast
var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for (i = 1; i < 6; i++) {
    if ([currentDate.getDay() + (i - 1)] <= 6) {
        document.getElementById("day" + i).innerHTML = day[currentDate.getDay() + (i - 1)]
    } else {
        document.getElementById("day" + i).innerHTML = day[currentDate.getDay() + (i - 1) - 7];
    }
}

let currentDay = weekDayNumber;

for (let i = 1; i<6; i++) {
    //add one day to current day
    currentDay++;

    //if current day is greater than 6 (Saturday), rest it to 0 (Sunday)
    if (currentDay > 6){
        currentDay = 0;
    }
    //assign value to document.getElementById('day'+i);
    element.innerHTML = daysOfWeek[currentDay];

}
//show hide pancake
if (weekDayNumber ===5) {
    document.getElementById("pancake").removeAttribute("class","hidden");
}