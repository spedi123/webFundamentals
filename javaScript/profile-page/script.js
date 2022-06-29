console.log("page loaded...");

function editProfile(e) {
  var name = document.querySelector(e);
  name.innerText = "Peter An";
}

var requestCount = document.querySelector("#request-num");
var connectionCount = document.querySelector("#your-connection");

function acceptConnection(card) {
  var element = document.querySelector(card);
  element.remove();
  requestCount.innerText--;
  connectionCount.innerText++;
}

function declineConnection(card) {
  var element = document.querySelector(card);
  element.remove();
  requestCount.innerText--;
}
