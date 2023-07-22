const modalCreate = $("#modal-create");
const modalBackdrop = $(".backdrop-modal");
const importantIcon = $(".icon-important");
const cancelButton = $("#btn-cancel");
const createButton = $("#btn-create");
const submitButton = $("#btn-submit");

// form data
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
  // formColor, these form fields remain filled out regardless
  // formDate,
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
