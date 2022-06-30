function login(element) {
  if (element.innerText === "Login") {
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
}

function uploadPup(element) {
  element.innerText = "Uploaded! Thank you.";
}

function playVideo(vid) {
  vid.play();
}

function pauseVideo(vid) {
  vid.pause();
}

function changeImg(element) {
  element.src = "./resources/anothaPuppy.jpeg";
}

function removeCookie(element) {
  var cookie = document.querySelector("#cookie-box");
  cookie.remove();
}

var count = 0;
function incrementLike(pupCount) {
  var element = document.querySelector(pupCount);
  var likeCount = Number(element.innerText);
  likeCount += 1;
  element.innerText = likeCount;
}

function alertMessageFormInput() {
  console.log("connected!!!");
  let searchInput = document.querySelector("#search");
  alert("You search for " + searchInput.value);
}
