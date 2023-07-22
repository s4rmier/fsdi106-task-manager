const isImportantIcon = "fa-solid";
const isNotImportantIcon = "fa-regular";

function setImporant() {
  importantIcon.removeClass(isNotImportantIcon).addClass(isImportantIcon);
}

function removeImportant() {
  importantIcon.removeClass(isImportantIcon).addClass(isNotImportantIcon);
}
