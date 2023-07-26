function markComplete(taskId) {
  taskArr.forEach((element) => {
    if (element.id == taskId) {
      objectToUpdate = element._id;
      const url = `https://fsdiapi.azurewebsites.net/api/tasks/${objectToUpdate}/`;
      $.ajax({
        type: "PATCH",
        url: `https://fsdiapi.azurewebsites.net/api/tasks/${taskId}/`,
        data: JSON.stringify({ status: "Complete" }),
        contentType: "application/json",
        success: function (response) {
          console.log(`Successfully updated task with ID ${taskId}`);
          getData();
        },
        error: function (error) {
          console.error("Error updating task:", error);
        },
      });
      element.status = "Complete";
    }
  });
  taskPanel.html("");
  renderElement(taskArr);
  renderTaskCount(taskArr);
}
