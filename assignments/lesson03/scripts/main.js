var currentDate = new Date();

var currentYear = currentDate.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

document.getElementById("lastupdated").textContent =
  "Last Updated: " + document.lastModified;