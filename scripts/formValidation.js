function formValidation(inputArr) {
  let isValid = true;

  inputArr.forEach((element) => {
    if (!element.val()) {
      isValid = false;
    }
  });

  return isValid;
}
