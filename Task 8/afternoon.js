// Parent Class
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    work() {
        console.log(`${this.name} is doing general company work.`);
    }

    showDetails() {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
    }
}


// Developer inherits Employee
class Developer extends Employee {
    constructor(id, name, language) {
        super(id, name);
        this.language = language;
    }

    // Overriding Employee work() method
    work() {
        console.log(`${this.name} is working as a developer.`);
    }

    writeCode() {
        console.log(`${this.name} is writing code in ${this.language}.`);
    }
}


// FrontendDeveloper inherits Developer
class FrontendDeveloper extends Developer {
    constructor(id, name, language, framework) {
        super(id, name, language);
        this.framework = framework;
    }

    // Overriding Developer work() method
    work() {
        console.log(`${this.name} is developing the frontend of the website.`);
    }

    buildUI() {
        console.log(`${this.name} is building the UI using ${this.framework}.`);
    }
}


// Manager inherits Employee
class Manager extends Employee {
    constructor(id, name, teamSize) {
        super(id, name);
        this.teamSize = teamSize;
    } 

    // Overriding Employee work() method
    work() {
        console.log(`${this.name} is managing a team of ${this.teamSize} employees.`);
    }

    conductMeeting() {
        console.log(`${this.name} is conducting a team meeting.`);
    }
}


// Creating Objects

const employee = new Employee(101, "Nikhil");

const frontendDev = new FrontendDeveloper(
    102,
    "Nikhil",
    "JavaScript",
    "React"
);

const manager = new Manager(103, "Akash", 10);


// Calling Employee Methods

employee.work();
employee.showDetails();

console.log("--------------------");


// Calling Frontend Developer Methods

frontendDev.work();
frontendDev.writeCode();
frontendDev.buildUI();

console.log("--------------------");


// Calling Manager Methods

manager.work();
manager.conductMeeting();