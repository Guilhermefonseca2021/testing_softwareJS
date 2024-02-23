const uuid = require("uuid").v4;

exports = class Todo {
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
