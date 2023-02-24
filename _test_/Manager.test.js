const Manager = require("../lib/Manager");





describe("Manager", () => {
    describe("constructor", () => {
      it("should set the name, id, email, and officeNumber properties", () => {
        const manager = new Manager("John Doe", 123, "john.doe@example.com", "1234567890");
        expect(manager.name).toEqual("John Doe");
        expect(manager.id).toEqual(123);
        expect(manager.email).toEqual("john.doe@example.com");
        expect(manager.officeNumber).toEqual("1234567890");
      });
    });
  


    describe("getRole", () => {
      it("should return the string 'Manager'", () => {
        const manager = new Manager("John Doe", 123, "john.doe@example.com", "1234567890");
        expect(manager.getRole()).toEqual("Manager");
      });
    });
  


    describe("getOfficeNumber", () => {
      it("should return the officeNumber property", () => {
        const manager = new Manager("John Doe", 123, "john.doe@example.com", "1234567890");
        expect(manager.getOfficeNumber()).toEqual("1234567890");
      });
    });
  });