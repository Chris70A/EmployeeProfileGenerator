
//parameters are used to set the properties of the class with the same names.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

// Returns the name property of the Employee
    getName() {
        return this.name;
    }
// Returns the id property of the Employee
    getId() {
        return this.id;

    }
//Returns the email property of the Employee
    getEmail() {
        return this.email;
    }
//Returns the string "Employee"
    getRole() {
        return "Employee";
    }
}


//class is being exported 
module.exports = Employee;