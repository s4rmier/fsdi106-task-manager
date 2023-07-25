class Task {
  constructor(title, status, budget, description, date, color, important) {
    this.owner = "rom";
    this.title = title;
    this.status = status;
    this.budget = budget;
    this.description = description;
    this.date = date;
    this.color = color;
    this.important = important;
    this.id = generateID();
  }
}
