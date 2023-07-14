const button1 = document.querySelector(".pop01");
const button2 = document.querySelector(".pop02");

button1.addEventListener("click", function () {
  window.open("pop01.html", "팝업1", "width=300, height=400, left=0, top=0");
});
button2.addEventListener("click", function () {
  window.open("pop02.html", "팝업2", "width=300, height=400, left=0, top=0");
});
