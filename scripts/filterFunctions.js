function filterData(fetchedDataArray) {
  fetchedDataArray.forEach((element) => {
    if (element.owner === "rom-test-environment2") {
      taskArr.push(element);
    }
  });
  renderElement(taskArr);
  renderTaskCount(taskArr);
}

function clearFilters() {
  taskPanel.html("");
  renderElement(taskArr);
}
