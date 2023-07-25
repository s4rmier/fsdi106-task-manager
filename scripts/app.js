let modalCreate;
let modalBackdrop;
let importantIcon;
let cancelButton;
let createButton;
let submitButton;
let filterButton;
let taskPanel;
let clearFilterButton;

// form data
let formTitle;
let formStatus;
let formBudget;
let formDescription;
let formColor;
let formDate;

let inputField;
let taskArr = [];

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

function createTask() {
  if (formValidation(inputField)) {
    let task = new Task(
      formTitle.val(),
      formStatus.val(),
      formBudget.val(),
      formDescription.val(),
      formDate.val(),
      formColor.val(),
      isImportant
    );

    // taskArr.push(task);

    const plainTask = {
      owner: task.owner,
      title: task.title,
      status: task.status,
      budget: task.budget,
      description: task.description,
      date: task.date,
      color: task.color,
      important: task.important,
      id: task.id,
    };

    $.ajax({
      type: "POST",
      url: "https://fsdiapi.azurewebsites.net/api/tasks/",
      data: JSON.stringify(plainTask),
      contentType: "application/json",
      success: function (response) {
        taskArr = [];
        getData();
      },
      error: function (error) {
        console.log(error);
      },
    });
  } else {
    alert("Enter Valid Input");
    return;
  }

  taskPanel.html("");
  renderTaskCount(taskArr);
  clearFormData(inputField);
  toggleModal();
} //end of create task

function getData() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    success: function (response) {
      let data = JSON.parse(response);
      filterData(data);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function filterData(fetchedDataArray) {
  fetchedDataArray.forEach((element) => {
    if (element.owner === "rom-test-environment2") {
      taskArr.push(element);
    }
  });
  renderElement(taskArr);
  renderTaskCount(taskArr);
}

function deleteTask(taskId) {
  taskArr.forEach((element, index) => {
    if (taskId == element.id) {
      taskArr.splice(index, 1);
      taskPanel.html("");
      renderElement(taskArr);
      renderTaskCount(taskArr);
    }
  });
}

function clearFilters() {
  taskPanel.html("");
  renderElement(taskArr);
}

function init() {
  modalCreate = $("#modal-create");
  modalBackdrop = $(".backdrop-modal");
  importantIcon = $(".icon-important");
  cancelButton = $("#btn-cancel");
  createButton = $("#btn-create");
  submitButton = $("#btn-submit");
  filterButton = $("#btn-filter");
  taskPanel = $(".task-panel");
  clearFilterButton = $("#btn-clear-filter");

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

  filterButton.click(function () {
    filterTask(taskArr);
  });

  clearFilterButton.click(clearFilters);
  getData();
}

window.onload = init;
