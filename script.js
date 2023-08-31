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

  buttonEl.on("click", function (event) {
    var textcontent = event.target.parentNode.children[1].value;
    var rowID = event.target.parentNode.id;

    localStorage.setItem(rowID, textcontent);
  });

  for (obj in elementsList) {
    if (elementsList[obj].id < date2) {
      elementsList[obj].element.attr("class", "row time-block past");
    } else if (elementsList[obj].id > date2) {
      elementsList[obj].element.attr("class", "row time-block future");
    } else {
      elementsList[obj].element.attr("class", "row time-block present");
    }
  }

  for (obj in elementsList) {
    var savedText = localStorage.getItem(elementsList[obj].id);
    elementsList[obj].element[0].children[1].value = savedText;
  }
});
