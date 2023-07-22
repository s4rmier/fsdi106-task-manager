function renderElement(elementArray) {
  elementArray.forEach((element) => {
    let domElement = `<div class="task-card flex-col" style="border-left: 10px solid ${
      element.color
    }">
        <i class="${
          element.important ? "fa-solid" : "fa-regular"
        } fa-star"></i> 
        <h2 class="task-title">${element.title}</h2>
        <h3 class="task-status">Status: <span>${element.status}</span></h3>
        <p class="task-budget">Budget: <span>$${element.budget}</span></p>
        <p class="task-description">
          ${element.description}
        </p>
        <div class="flex-row space-between">
         
          <p class="task-date">${element.date}</p>
        </div>
      </div>`;

    $(".task-panel").append(domElement);
  });
}
