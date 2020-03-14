// DISPLAY current day at the top of the calendar
var currentDate = moment().format("MMMM Do YYYY, h:mm a");
// console.log(currentDate);
$("#currentDay").text(currentDate);
// TIMEBLOCKS should know current hour to indicate past, present, and future blocks
// USED capital H to change hours from am/pm to 24 hour clock
var currentHour = moment().format("H");
// console.log (currentHour);
// FOR TESTING PURPOSES:
// var currentHour = 15;

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

var todoItem = [];
// WHEN I click into a timeblock THEN I can enter an event
// WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
$("button").click(function() {
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("data-hour"));
    var todoObject = {
      hour: blockHour,
      text: ""
    };
    todoItem.push(todoObject);
  });
  var updateHour = $(this)
    .parent()
    .attr("data-hour");
  var updateItem = $(this)
    .parent()
    .children("textarea")
    .val();
  for (var i = 0; i < todoItem.length; i++) {
    if (todoItem[i].hour == updateHour) {
      todoItem[i].text = updateItem;
    }
  }
  // Stringify and set "todos" key in localStorage
  localStorage.setItem("todo", JSON.stringify(todoItem));
});

// WHEN I refresh the page THEN the saved events persist
// COULD NOT GET THE RESTORE LOCALSTORAGE FUNCTION TO WORK
// ITEMS SAVE TO LOCAL STORAGE BUT DO NOT LOAD BACK UP ON PAGE 
// LAST MINUTE GOT ITEMS TO LOAD ONTO CONSOLE LOG - NO MORE TIME LEFT
init();
function init() {
  var todoItem = JSON.parse(localStorage.getItem("todo"));
  if (todoItem !== null) {
    console.log(todoItem);
  }
}


// function renderTodos() {
//   for (var n = 0; n < todoItem.length; n++) {
//     var storedHour = todoItem[n].hour;
//     var storedText = todoItem[n].text;
//     storedHour.setAttribute("data-hour", n);
//     storedText.setAttribute("textarea", n);
//   }
//   localStorage.getItem("todo", JSON.parse(todoItem));
// };
