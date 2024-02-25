const uuid = require("uuid").v4;
class Todo {
  constructor({ text, when }) {
    this.text = text;
    this.when = when;

    this.status = "";
    this.id = uuid();
  }
  
  isValid() {
    return !!this.text && !isNaN(this.when.valueOf())
  }
};

module.exports = Todo
