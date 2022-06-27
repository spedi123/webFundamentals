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
