const buttonModal = document.getElementById("btnModal");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const close = document.getElementById("close");

buttonModal.addEventListener("click", function () {
  modal.classList.replace("fade", "show");
  modalContent.classList.add("active");
});

close.addEventListener("click", function () {
  modal.classList.replace("show", "fade");
  modalContent.classList.remove("active");
});

modal.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.classList.replace("show", "fade");
    modalContent.classList.remove("active");
  }
});
// close.addEventListener("click", () => {
//   modal.classList.remove("show");
//   modal.classList.add("fade");
// });
