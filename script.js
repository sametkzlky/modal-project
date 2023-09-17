var modalopen = document.querySelector("#open");
var modal = document.querySelector(".modal");
var modalform = document.querySelector("#form");
var modalclose = document.querySelector("#close");

modalopen.addEventListener("click", () => {
  modal.style.display = "flex";
  setTimeout(() => {
    modalform.style.left="50%";
  }, 200);
});

modalclose.addEventListener("click", () => {
    modal.style.display = "none";
});
