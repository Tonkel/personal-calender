// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//data
row1El = $("#9");
row2El = $("#10");
row3El = $("#11");
row4El = $("#12");
row5El = $("#13");
row6El = $("#14");
row7El = $("#15");
row8El = $("#16");
row9El = $("#17");
todayEl = $("#currentDay");
buttonEl = $("button");

elementsList = [
  { element: row1El, id: 9 },
  { element: row2El, id: 10 },
  { element: row3El, id: 11 },
  { element: row4El, id: 12 },
  { element: row5El, id: 13 },
  { element: row6El, id: 14 },
  { element: row7El, id: 15 },
  { element: row8El, id: 16 },
  { element: row9El, id: 17 },
];

var date = dayjs().format("dddd MMMM DD, YYYY");
var date2 = Number(dayjs().format("H"));

//functions
$(function () {
  todayEl.text(date);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //user interactions
  buttonEl.on("click", function (event) {
    var textcontent = event.target.parentNode.children[1].value;
    var rowID = event.target.parentNode.id;
    var rowIdNumber = Number(rowID);
    // console.log(event.target.parentNode.children[1]);
    console.log(rowID);
    console.log(date2);

    localStorage.setItem(rowID, textcontent);
  });

  for (obj in elementsList) {
    // console.log(elementsList[obj].id);
    if (elementsList[obj].id < date2) {
      elementsList[obj].element.attr("class", "row time-block past");
    } else if (elementsList[obj].id > date2) {
      elementsList[obj].element.attr("class", "row time-block future");
    } else {
      elementsList[obj].element.attr("class", "row time-block present");
    }
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
