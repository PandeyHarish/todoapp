// var inputValue = document.getElementById("inputBox");
// var list = document.getElementById("list");
// var btn = document.getElementById("btn");

// btn.addEventListener("click", function (e) {

//   if (inputValue.value.trim() === "") {
//     alert("List cannot be empty");
//   } else {
//     var newElement = document.createElement("li");
//     var text = document.createTextNode(inputValue.value);
//     newElement.appendChild(text);
//     list.appendChild(newElement);
//   }
// });

$(document).ready(function () {
  let list = $("#list");
  let btn = $("#btn");
  function createNewListItem() {
    let inputValue = $("#inputBox").val().trim();
    if (inputValue === "") {
      alert("List cannot be empty");
    } else {
      let newElement = $("<li>");
      let text = inputValue;
      newElement.append(text);
      list.append(newElement);
    }
  }

  btn.click(function (event) {
    event.preventDefault();
    createNewListItem();
    $("#inputBox").val("");
  });
  $("#todoForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission
    createNewListItem();
    $("#inputBox").val("");
  });
});
