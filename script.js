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
  var list = $("#list");
  var btn = $("#btn");

  $("#btn").click(function (e) {
    let inputValue = $("#inputBox").val().trim();

    if (inputValue === "") {
      alert("List cannot be empty");
    } else {
      let newElement = list.append("<li>");
      let text = inputValue;
      newElement.append(text);
    }
  });
});
