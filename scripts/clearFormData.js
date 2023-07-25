function clearFormData(inputArr) {
  inputArr.forEach((element) => {
    $(".error-notification").addClass("hidden");
    element.css("border", "2px solid rgba(18, 38, 58, 0.25)");
    element.val("");
  });
}
