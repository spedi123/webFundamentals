var count = 3;
var countElement = document.querySelector("#count");

function addLike() {
  count++;
  countElement.innerText = count + " likes(s)";
  console.log(count);
}
