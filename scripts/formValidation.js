function formValidation(inputArr) {
  let isValid = true;

  inputArr.forEach((element) => {
    if (!element.val()) {
      element.css("border", "2px solid #af3800");
      $(".error-notification").removeClass("hidden");
      isValid = false;
    } else {
      element.css("border", "2px solid rgba(18, 38, 58, 0.25)");
    }
  });

  return isValid;
}
