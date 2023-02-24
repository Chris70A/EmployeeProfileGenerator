const Engineer = require('../lib/Engineer');


describe("Engineer", () => {
    describe("constructor", () => {
      it("should set the name, id, email, and Github properties", () => {
        const engineer = new Engineer("John Doe", 123, "johndoe@example.com", "johndoe");
        expect(engineer.name).toEqual("John Doe");
        expect(engineer.id).toEqual(123);
        expect(engineer.email).toEqual("johndoe@example.com");
        expect(engineer.Github).toEqual("johndoe");
      });
    });
  



    describe("getRole", () => {
      it("should return the string 'Engineer'", () => {
        const engineer = new Engineer("John Doe", 123, "johndoe@example.com", "johndoe");
        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
  


    describe("getGithub", () => {
      it("should return the Github property", () => {
        const engineer = new Engineer("John Doe", 123, "johndoe@example.com", "johndoe");
        expect(engineer.getGithub()).toEqual("johndoe");
      });
    });
  });