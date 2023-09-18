"use strict";

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = document.querySelector(".calendar-dates");
var currdate = document.querySelector(".calendar-current-date");
var prenexIcons = document.querySelectorAll(".calendar-navigation span"); // Array of month names

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // Function to generate the calendar

var manipulate = function manipulate() {
  // Get the first day of the month
  var dayone = new Date(year, month, 1).getDay(); // Get the last date of the month

  var lastdate = new Date(year, month + 1, 0).getDate(); // Get the day of the last date of the month

  var dayend = new Date(year, month, lastdate).getDay(); // Get the last date of the previous month

  var monthlastdate = new Date(year, month, 0).getDate(); // Variable to store the generated calendar HTML

  var lit = ""; // Loop to add the last dates of the previous month

  for (var i = dayone; i > 0; i--) {
    lit += "<li class=\"inactive\">".concat(monthlastdate - i + 1, "</li>");
  } // Loop to add the dates of the current month


  for (var _i = 1; _i <= lastdate; _i++) {
    // Check if the current date is today
    var isToday = _i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
    lit += "<li class=\"".concat(isToday, "\">").concat(_i, "</li>");
  } // Loop to add the first dates of the next month


  for (var _i2 = dayend; _i2 < 6; _i2++) {
    lit += "<li class=\"inactive\">".concat(_i2 - dayend + 1, "</li>");
  } // Update the text of the current date element
  // with the formatted current month and year


  currdate.innerText = "".concat(months[month], " ").concat(year); // update the HTML of the dates element
  // with the generated calendar

  day.innerHTML = lit;
};

manipulate(); // Attach a click event listener to each icon

prenexIcons.forEach(function (icon) {
  // When an icon is clicked
  icon.addEventListener("click", function () {
    // Check if the icon is "calendar-prev"
    // or "calendar-next"
    month = icon.id === "calendar-prev" ? month - 1 : month + 1; // Check if the month is out of range

    if (month < 0 || month > 11) {
      // Set the date to the first day of the
      // month with the new year
      date = new Date(year, month, new Date().getDate()); // Set the year to the new year

      year = date.getFullYear(); // Set the month to the new month

      month = date.getMonth();
    } else {
      // Set the date to the current date
      date = new Date();
    } // Call the manipulate function to
    // update the calendar display


    manipulate();
  });
});
//# sourceMappingURL=Calendar.dev.js.map
