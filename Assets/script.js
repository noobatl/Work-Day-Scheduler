// DISPLAY current day at the top of the calendar
var currentDate = moment().format("MMMM Do YYYY, h:mm a");
// console.log(currentDate);
$("#currentDay").text(currentDate);
// TIMEBLOCKS should know current hour to indicate past, present, and future blocks
// USED capital H to change hours from am/pm to 24 hour clock
// var currentHour = moment().format("H");
// console.log (currentHour);
// FOR TESTING PURPOSES:
var currentHour = 15;
var blockHour = parseInt($(this).attr("data-hour"));
// COLORCODE row past (GRAY), present (RED), or future (GREEN) based on current hour
$(".time-block").each(function() {
  var blockHour = parseInt($(this).attr("data-hour"));
  if (blockHour == currentHour) {
    $(this).addClass("present");
  } else if (blockHour < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
});
// WHEN I click into a timeblock THEN I can enter an event
// WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
// $(".time-block").each(function() {
//   var blockHour = parseInt($(this).attr("data-hour"));
//   var toDoObject = {
//     hour: blockHour,
//     text: ""
//   };
//   .push(toDoObject);
// });
var todos = [];

$(".time-block").each(function() {
  var blockHour = parseInt($(this).attr("data-hour"));
  var todoObject = {
    hour: blockHour,
    text: ""
  };
  todos.push(todoObject);
  // Stringify and set "todos" key in localStorage to todos array
});
localStorage.setItem(".time-block", JSON.stringify(todos));

$(".saveBtn").on("click", function (){
    console.log("saved");
})
// WHEN I refresh the page THEN the saved events persist
