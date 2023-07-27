var inputValue = document.getElementById("inputBox");
var list = document.getElementById("list");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (inputValue.value.trim() === "") {
    alert("List cannot be empty");
  } else {
    var newElement = document.createElement("li");
    var text = document.createTextNode(inputValue.value); 
    newElement.appendChild(text);
    list.appendChild(newElement);
  }
});
