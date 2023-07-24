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
  isImportant = false;
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
  if (formValidation(inputField)) {
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
  } else {
    alert("Enter Valid Input");
    return;
  }

  $(".task-panel").html("");
  renderElement(taskArr);
  renderTaskCount(taskArr);
  clearFormData(inputField);
  toggleModal();
}

function deleteElement() {
  const indexToDelete = $(this).data("index");
  if (indexToDelete !== undefined) {
    taskArr.splice(indexToDelete, 1);
  }
  $(this).closest(".task-card").remove();
  renderTaskCount(taskArr);
}
$(".task-panel").on("click", ".btn-delete", deleteElement);

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

  inputField = [formTitle, formStatus, formBudget, formDescription, formDate];

  createButton.click(toggleModal);
  modalBackdrop.click(toggleModal);
  cancelButton.click(() => {
    clearFormData(inputField);
    toggleModal();
  });
  importantIcon.click(toggleImportant);
  submitButton.click(createTask);
  renderTaskCount(taskArr);
}

window.onload = init;
