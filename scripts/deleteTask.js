function deleteTask(taskId) {
  taskArr.forEach((element, index) => {
    if (taskId == element.id) {
      objectToDelete = element._id;
      console.log(objectToDelete);

      if (confirm("Are you sure you want to delete this task?")) {
        const url = `https://fsdiapi.azurewebsites.net/api/tasks/${objectToDelete}/`;

        $.ajax({
          type: "DELETE",
          url: url,
          success: function (response) {
            console.log(
              `Deleting task with ID ${taskId} and object ID ${element._id}`
            );
            taskPanel.html("");
            taskArr = [];
            getData();
          },
          error: function (error) {
            console.log(error);
          },
        });
        // taskArr.splice(index, 1);
      }
      taskPanel.html("");
      renderElement(taskArr);
      renderTaskCount(taskArr);
    }
  });
}
