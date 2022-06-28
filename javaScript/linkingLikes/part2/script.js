function addLike(count) {
  var element = document.querySelector(count);
  var likeCount = element.innerText;
  likeCount++;
  element.innerText = likeCount;
}
