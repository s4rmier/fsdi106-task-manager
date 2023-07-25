function markComplete(taskId) {
  taskArr.forEach((element) => {
    if (element.id == taskId) {
      element.status = "Complete";
    }
  });
  taskPanel.html("");
  renderElement(taskArr);
  renderTaskCount(taskArr);
}
