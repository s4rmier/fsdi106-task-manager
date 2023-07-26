function checkScreensize() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 1280) {
    userPanel.addClass("hidden");
  }
}
