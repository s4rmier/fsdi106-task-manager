function renderElement(elementArray) {
  elementArray.forEach((element, index) => {
    let domElement = `
    <div class="task-card flex-col" style="border-left: 10px solid ${
      element.color
    }">

    <h4 class="urgent-badge" style="${
      element.important ? "display: flex" : "display: none"
    }">
      <i class="fa-solid fa-triangle-exclamation"> &nbsp;</i> URGENT
    </h4>

    <h2 class="task-title">${element.title}</h2>
    <p class="task-status">Status: <span style="color: ${
      element.status == "Complete"
        ? "#2b5823"
        : element.status == "Incomplete"
        ? "#af3800"
        : "#e8aa14"
    }">${element.status}</span></p>

    <p class="task-description">
      ${element.description}
    </p>

    <div class="task-group flex-row space-between">
      <p class="task-budget">Budget: $${element.budget}</p>
      <p class="task-date">${element.date}</p>
    </div>

    <div class="button-set flex-row">
      <div class="btn-container btn-delete" id="btn-delete" data-index="${index}">
        <button class="button">Delete</button>
        <i class="fa-regular fa-trash-can"></i>
      </div>

      <div class="btn-container btn-complete" id="btn-complete" data-index="${index}">
        <button class="button">Complete</button>
        <i class="fa-solid fa-check"></i>
      </div>
    </div>
  </div>`;

    if (element.important && element.status != "Complete") {
      $(".task-panel").prepend(domElement);
    } else {
      $(".task-panel").append(domElement);
    }
  });
}

function renderTaskCount(taskArr) {
  let completedTaskCount = 0;
  let inProgressTaskCount = 0;
  let incompleteTaskCount = 0;

  taskArr.forEach((element) => {
    if (element.status == "Complete") {
      completedTaskCount++;
    } else if (element.status == "Incomplete") {
      incompleteTaskCount++;
    } else {
      inProgressTaskCount++;
    }
  });

  $("#complete-task-count").text(completedTaskCount);
  $("#inprogress-task-count").text(inProgressTaskCount);
  $("#incomplete-task-count").text(incompleteTaskCount);
}

// HTML only template for styling
// <div class="task-card flex-col" style="border-left: 10px solid #2b5823">
// <h4 class="urgent-badge">
//   <i class="fa-solid fa-triangle-exclamation"></i> URGENT
// </h4>
// <h2 class="task-title">Task 1</h2>
// <p class="task-status">Status: Incomplete</p>
// <p class="task-description">
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit. accusamus
//   soluta inventore!
// </p>
// <div class="task-group flex-row space-between">
//   <p class="task-budget">Budget: $2300</p>
//   <p class="task-date">04-23-2023 T 16:59</p>
// </div>

// <div class="button-set flex-row">
//   <div class="btn-container btn-delete" id="btn-delete">
//     <button class="button">Delete</button>
//     <i class="fa-regular fa-trash-can"></i>
//   </div>

//   <div class="btn-container btn-complete" id="btn-complete">
//     <button class="button">Complete</button>
//     <i class="fa-solid fa-check"></i>
//   </div>
// </div>
// </div>
