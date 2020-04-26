function printTime() {
  var day = new Date();
  var hours = day.getHours();
  var mins = day.getMinutes();
  var secs = day.getSeconds();
  var clockSystem = "";
  var date = day.getDate();
  var month = day.getMonth();
  var year = day.getFullYear();

// Am and PM condition

if (hours < 12) {
  clockSystem = "AM"
} else {
  clockSystem = "PM"
}

if (hours == 0) {
  hours = 12;
}

if (hours > 12 ) {
  hours = hours - 12;
}

// Double digit condition

if (hours<10){
  hours = '0' + hours;
}

if (mins<10) {
  mins = '0' + mins;
}

if (secs<10) {
  secs = '0' + secs;
}



}
