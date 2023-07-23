let modalCreate;
let modalBackdrop;
let importantIcon;
let cancelButton;
let createButton;
let submitButton;

// form data
let formTitle;
let formStatus;
let formBudget;
let formDescription;
let formColor;
let formDate;

let inputField;

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
function toggleImportant() {
  if (isImportant) {
    removeImportant();
    isImportant = false;
  } else {
    setImporant();
    isImportant = true;
  }
}

let taskArr = [];

function createTask() {
  taskArr.push(
    new Task(
      formTitle.val(),
      formStatus.val(),
      formBudget.val(),
      formDescription.val(),
      formDate.val(),
      formColor.val(),
      isImportant
    )
  );

  $(".task-panel").html("");
  renderElement(taskArr);

  clearFormData(inputField);
  toggleModal();
}

function init() {
  modalCreate = $("#modal-create");
  modalBackdrop = $(".backdrop-modal");
  importantIcon = $(".icon-important");
  cancelButton = $("#btn-cancel");
  createButton = $("#btn-create");
  submitButton = $("#btn-submit");

  // form data
  formTitle = $("#form-title");
  formStatus = $("#form-status");
  formBudget = $("#form-budget");
  formDescription = $("#form-description");
  formColor = $("#form-color");
  formDate = $("#form-date");

  inputField = [formTitle, formStatus, formBudget, formDescription];

  createButton.click(toggleModal);
  modalBackdrop.click(toggleModal);
  cancelButton.click(() => {
    clearFormData(inputField);
    toggleModal();
  });
  importantIcon.click(toggleImportant);
  submitButton.click(createTask);
}

window.onload = init;
