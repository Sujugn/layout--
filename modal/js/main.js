function show() {
  // 팝업 HTML 파일을 가져와서 popupContent 요소에 추가
  fetch("popup.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("popupContent").innerHTML = html;
      document.querySelector(".background").className = "background show";

      // 팝업 닫기 버튼에 이벤트 리스너 추가
      document
        .querySelector("#popupContent #close")
        .addEventListener("click", close);
    });
}

function close() {
  document.querySelector(".background").className = "background";
}

document.querySelector("#show").addEventListener("click", show);
