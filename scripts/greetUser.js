const currentDate = new Date();
const getHours = currentDate.getHours();
const userGreeting = $("#user-greeting");

if (getHours >= 0 && getHours <= 11) {
  userGreeting.text("Good Morning,");
} else if (getHours >= 12 && getHours <= 5) {
  userGreeting.text("Good Afternoon,");
} else {
  userGreeting.text("Good Evening");
}
