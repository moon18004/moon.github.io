
    var d = new Date();

    //get the days
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    //get the month
    var month = new Array(12);
    month[0] = "January";
    month[1] = "Feburary";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "Semptember";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    //get from array
    var day = weekday[d.getDay()];
    var m = month[d.getMonth()];

    document.getElementById("currentDate").innerHTML = day + " ," + m + " " + d.getDate() + " " + d.getFullYear();
