// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


//  Import NPM packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//  Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
// const Employee = require('./lib/Employee');
const Intern =  require('./lib/Intern');

// stores the path to a directory called "dist"
const distDirectory = path.resolve(__dirname, 'dist'); 

// Output file path and name
const outputPath = path.join(distDirectory, 'teamProfile.html');

// Import HTML template
const htmlFile = require('./src/templateHTML.js');
// const { default: Choices } = require('inquirer/lib/objects/choices');

//  Empty array for team members
const employeeId =[];
const teamMembers = [];

//=======================================================================
//
//                             Add Manager
//
//=======================================================================



function addTeam() {
    function addManager() {
        console.log('Lets build your new team');
        inquirer
            .prompt([
                {
                    type:'input',
                    name: 'managerName',
                    message: "What is the name of the team manager?",
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "Employee ID of the team manager?",
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "Email address of the team manager?",
                },
                {
                    type: 'input',
                    name: 'managerPhoneNumber',
                    message: "Phone number of team manager?",
                }

            ])
            .then((data) => {
                // takes the properties, and pushes it onto an array called teamMembers
                const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerPhoneNumber);
                teamMembers.push(manager);
                //pushes the employee ID into an array called employeeId
                employeeId.push(data.managerId); 
                
                additionalTeamMember();
            });
    }

//=======================================================================
//
//                             choice to additional team member
//
//=======================================================================


//prompt the user with a list of choices to add another team member or finish assembling their team.
    function additionalTeamMember () {
        inquirer
            .prompt([
                {//
                    type: 'list',
                    name: 'additionalChoice', // The user's choice will be stored in the 'additionalChoice'
                    message: 'Add another Team member or finish assembling your team?',
                    choices: [
                        'Engineer',
                        'Intern',
                        "I don' t want to add any more team members",
                    ],
                },
            ])
            //returns a Promise object.
            // call differnet functions depending on the usersChoice
            .then((usersChoice) => {
                switch (usersChoice. additionalChoice) { 
                    case 'Engineer':
                        addEngineer(); // add Engineer
                        break;
                    // case 'Employee':
                    //     addEmployee(); // add Employee
                    //     break;
                    case 'Intern':
                        addIntern(); // add Intern
                        break;
                    default:
                        finishTeam(); // finish building team
                }
            });
    }

//=======================================================================
//
//                             Add Engineer 
//
//=======================================================================




    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is your engineer's name?",
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is your engineer's ID?",
                }, 
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "what is your engineer's ID?",
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is your engineer's email?",
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is your engineer's Github username?",
                }
            ])
            .then((data) => {
                const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
                // takes the properties, and pushes it onto an array called teamMembers
                teamMembers.push(engineer);
                //pushes the employee ID into an array called employeeId
                employeeId.push(data.engineerId);
                // calls function to add another team member or finish.
                additionalTeamMember(); 
            })
    }
//=======================================================================
//
//                             Add Intern
//
//=======================================================================


    function addIntern() {
        inquirer
            .prompt([
                {
                    type:'input',
                    name: 'internName',
                    message: "What is the name of your Intern?",
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "Employee ID of your Intern?",
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "Email address of your Intern?",
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: "What school is your Intern attending?",
                }
            ])
            .then((data) => {
                const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
                // takes the properties, and pushes it onto an array called teamMembers
                teamMembers.push(intern);
                //pushes the employee ID into an array called employeeId
                employeeId.push(data.internId);
                // calls function to add another team member or finish.
                additionalTeamMember(); 
            })
    }

//=======================================================================
//
//                             Finish building Team
//
//=======================================================================

    function finishTeam() {
        //It checks if a directory exists, creates one if it doesn't
        if (!fs.existsSync(distDirectory)) {
            fs.mkdirSync(distDirectory);
        }
        //writes the team member information to a file
        //location / data to be written/ characters 
        fs.writeFileSync(outputPath, htmlFile(teamMembers), 'utf-8');
    }

    addManager();
}

addTeam();

