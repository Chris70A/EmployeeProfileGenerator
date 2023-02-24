const Employee = require('../lib/Employee');
//function that is used to group related test cases together.
describe("Employee", () => {
    describe("constructor", () => {
      it("should set the name, id, and email properties", () => {
        const employee = new Employee("John Doe", 123, "john.doe@example.com");
        expect(employee.name).toEqual("John Doe");
        expect(employee.id).toEqual(123);
        expect(employee.email).toEqual("john.doe@example.com");
      });
    });
  //testing getName
    describe("getName", () => {
      it("should return the name property", () => {
        const employee = new Employee("John Doe", 123, "john.doe@example.com");
        expect(employee.getName()).toEqual("John Doe");
      });
    });
  //Testing getId
    describe("getId", () => {
      it("should return the id property", () => {
        const employee = new Employee("John Doe", 123, "john.doe@example.com");
        expect(employee.getId()).toEqual(123);
      });
    });
  // Testing getEmail
    describe("getEmail", () => {
      it("should return the email property", () => {
        const employee = new Employee("John Doe", 123, "john.doe@example.com");
        expect(employee.getEmail()).toEqual("john.doe@example.com");
      });
    });
  // Testing getRole
    describe("getRole", () => {
      it("should return the string 'Employee'", () => {
        const employee = new Employee("John Doe", 123, "john.doe@example.com");
        expect(employee.getRole()).toEqual("Employee");
      });
    });
  });