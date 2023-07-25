function deleteTask(taskId) {
  taskArr.forEach((element, index) => {
    if (taskId == element.id) {
      if (confirm("Are you sure you want to delete this task?")) {
        taskArr.splice(index, 1);
        taskPanel.html("");
        renderElement(taskArr);
        renderTaskCount(taskArr);
      }
    }
  });
}
