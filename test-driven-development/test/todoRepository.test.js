const { describe, it, before, afterEach } = require("mocha");
const { expect } = require("chai");
const TodoRepository = require("../src/todoRepositories");
const { createSandbox } = require("sinon");

describe("todoRepository", () => {
  let todoRepository;
  before(() => {
    todoRepository = new TodoRepository();
    sandbox = createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });
  describe("methods signature", () => {
    it("should call find from lokijs", () => {
      const mockDatabase = [
        {
          name: "xuxadasilva",
          age: 20,
          meta: { revision: 0, created: 13423423, version: 0 },
          $loki: 1,
        },
      ];

      const functionName = "find";
      const expectedReturn = mockDatabase;
      // stub substitui o comportamento de uma funcao ou propriedade
      sandbox
        .stub(todoRepository.schedule, functionName)
        .returns(expectedReturn);

      const result = todoRepository.list();
      expect(result).to.be.deep.equal(expectedReturn);
      expect(todoRepository.schedule[functionName].calledOnce).to.be.ok
    });
    it("should call insertOne from lokijs", () => {});
  });
});
