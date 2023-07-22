let modalCreate = $("#modal-create");
let modalBackdrop = $(".backdrop-modal");

isModalActive = false;
function toggleModal() {
  if (isModalActive) {
    modalCreate.addClass("hidden");
    modalBackdrop.addClass("hidden");
    clearFormData(inputField);
    isModalActive = false;
  } else {
    modalCreate.removeClass("hidden");
    modalBackdrop.removeClass("hidden");
    clearFormData(inputField);
    isModalActive = true;
  }
}

let formTitle = $("#form-title");
let formStatus = $("#form-status");
let formBudget = $("#form-budget");
let formDescription = $("#form-description");
let formColor = $("#form-color");
let formDate = $("#form-date");

let inputField = [
  formTitle,
  formStatus,
  formBudget,
  formDescription,
  formColor,
  formDate,
];

function init() {
  $("#btn-create").click(toggleModal);
  $(".backdrop-modal").click(toggleModal);

  $("#btn-cancel").click(() => {
    clearFormData(inputField);
    toggleModal();
  });
}

window.onload = init;
