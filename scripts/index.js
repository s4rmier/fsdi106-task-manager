const modalCreate = $("#modal-create");
const modalBackdrop = $(".backdrop-modal");
const importantIcon = $(".icon-important");
const cancelButton = $("#btn-cancel");
const createButton = $("#btn-create");

const formTitle = $("#form-title");
const formStatus = $("#form-status");
const formBudget = $("#form-budget");
const formDescription = $("#form-description");
const formColor = $("#form-color");
const formDate = $("#form-date");

let inputField = [
  formTitle,
  formStatus,
  formBudget,
  formDescription,
  formColor,
  formDate,
];

isModalActive = false;
function toggleModal() {
  removeImportant();
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

let isImportant = false;
const isImportantIcon = "fa-solid";
const isNotImportantIcon = "fa-regular";

function setImporant() {
  importantIcon.removeClass(isNotImportantIcon).addClass(isImportantIcon);
  isImportant = true;
}

function removeImportant() {
  importantIcon.removeClass(isImportantIcon).addClass(isNotImportantIcon);
  isImportant = false;
}

function toggleImportant() {
  if (isImportant) {
    removeImportant();
  } else {
    setImporant();
  }
}

function init() {
  createButton.click(toggleModal);
  modalBackdrop.click(toggleModal);

  cancelButton.click(() => {
    clearFormData(inputField);
    toggleModal();
  });

  importantIcon.click(toggleImportant);
}

window.onload = init;
