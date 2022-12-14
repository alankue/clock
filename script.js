function Time() {
    // Create object of the Date class with current time
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
        
    // Store and assign pm/am
    var period = "";
    if (hour >= 12) {
    period = "pm";
    } else {
    period = "am";
    }

    // Convert to 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }

 hour = update(hour);
 minute = update(minute);
 second = update(second);
 
 // Insert script into html
 document.getElementById("digital-clock").innerText = hour + ": " + minute + ": " + second + " " + period;
 
 // Set timer to 1 sec 
 setTimeout(Time, 1000);
}

 // Add 0 before elements less than 10
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}

Time();