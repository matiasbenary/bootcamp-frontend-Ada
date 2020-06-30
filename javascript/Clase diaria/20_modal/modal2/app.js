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
<div
  class="fade modal show"
  id="staticBackdropLive"
  data-backdrop="static"
  data-keyboard="false"
  tabindex="-1"
  role="dialog"
  aria-labelledby="staticBackdropLiveLabel"
  style="display: block; padding-right: 15px;"
  aria-modal="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLiveLabel">
          Modal title
        </h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <p>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Understood
        </button>
      </div>
    </div>
  </div>
</div>;