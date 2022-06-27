// 1. 로그인 버튼 클릭하면 로그아웃으로 바꾸기
function loginButton(element) {
  if (element.innerText === "Login") {
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
}

// 2. Add Definition버튼 클릭하면 숨기기
function addDefinition(element) {
  element.remove();
}

// 3. like버튼 누르면 알림창 뜨게 하기 "This page says Ninja was liked"
function likes() {
  alert("Ninja was liked");
}
