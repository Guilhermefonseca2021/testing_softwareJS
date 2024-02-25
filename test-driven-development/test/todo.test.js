const { describe, it, before } = require("mocha");
const Todo = require("../src/todo");
const { expect } = require("chai");

describe("todo", () => {
  it("#isValid", () => {
    it("should return invalid when create an object without text", () => {
      const data = { text: "", when: new Date("2020-02-01") };
      const todo = new Todo(data);
      const result = todo.isValid();
      expect(result).to.be.not.ok;
    });
    it('should return invalid when creating an object using the "when" is invalid', () => {
      const data = { text: "", when: new Date("20-02-01") };
      const todo = new Todo(data);
      const result = todo.isValid();
      expect(result).to.be.not.ok;
    });
    it("should return invalid when create an object without text", () => {
      
    });
    it('should have "id", "text", "when" ans "status" properties after creating object', () => {
      const data = { text: "", when: new Date("20-02-01") };
      const todo = new Todo(data);
      const result = todo.isValid();
      expect(result).to.be.ok;
    });
  });
});

// npm t
// npm run test:dev
// npm run test:cov
