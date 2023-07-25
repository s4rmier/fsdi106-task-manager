function filterTask(taskArr) {
  //   console.log("FilterTask function called.");

  let filteredArray = [];
  let filterType = $("#task-filter").val();
  //   console.log("FilterType:", filterType);

  taskArr.forEach((element) => {
    if (element.status == filterType) {
      filteredArray.push(element);
      //   console.log("Filtered Array:", filteredArray);
      //   console.log("FilterType inside loop:", filterType);
    }
  });

  $(".task-panel").html("");
  renderElement(filteredArray);
}
