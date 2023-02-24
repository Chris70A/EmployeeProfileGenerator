const Intern = require('../lib/Intern');


describe("Intern", () => {
    describe("constructor", () => {
      it("should set the name, id, email, and school properties", () => {
        const intern = new Intern("John Doe", 123, "john.doe@example.com", "University of Minnesota");
        expect(intern.name).toEqual("John Doe");
        expect(intern.id).toEqual(123);
        expect(intern.email).toEqual("john.doe@example.com");
        expect(intern.school).toEqual("University of Minnesota");
      });
    });
  

    describe("getRole", () => {
      it("should return the string 'Intern'", () => {
        const intern = new Intern("John Doe", 123, "john.doe@example.com", "University of Minnesota");
        expect(intern.getRole()).toEqual("Intern");
      });
    });
  
    describe("getSchool", () => {
      it("should return the school property", () => {
        const intern = new Intern("John Doe", 123, "john.doe@example.com", "University of Minnesota");
        expect(intern.getSchool()).toEqual("University of Minnesota");
      });
    });
  });