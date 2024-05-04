// Main.js

class Employee {
  constructor(name, age, annualSalary) {
    this.name = name;
    this.age = age;
    this.annualSalary = annualSalary;
  }
}

class PartTime extends Employee {
  constructor(name, age, payRate, hours) {
    super(name, age, 0);
    this.payRate = payRate;
    this.hours = hours;
    this.employeeType = "Part Time";
  }

  calculatePay() {
    const weeks = 52;
    const annualPay = this.payRate * this.hours * weeks;
    this.annualSalary = annualPay - 1000;
  }
}

class Manager extends Employee {
  constructor(name, age, payRate) {
    super(name, age, 0);
    this.payRate = payRate;
    this.employeeType = "Manager";
  }

  calculatePay() {
    const weeks = 52;
    const annualPay = this.payRate * 40 * weeks;
    this.annualSalary = annualPay - 1000;
  }
}

class Main {
  constructor() {
    this.employees = [
      new PartTime("John", 30, 10, 20),
      new Manager("Alice", 35, 15),
      new PartTime("Bob", 25, 8, 12),
    ];
  }

  addEmployee() {
    const input = prompt(
      "Enter name, age, pay rate, and hours per week (separated by commas):"
    ).split(",");
    const name = input[0].trim();
    const age = parseInt(input[1].trim());
    const payRate = parseFloat(input[2].trim());
    const hours = parseFloat(input[3].trim());

    let employee;
    if (hours < 40) {
      employee = new PartTime(name, age, payRate, hours);
    } else {
      employee = new Manager(name, age, payRate);
    }

    employee.calculatePay();
    this.employees.push(employee);
    this.displayEmployees();
  }

  removeEmployee() {
    const choice = parseInt(prompt("Enter the employee number to remove:"));
    const employee = this.employees.find((emp, index) => index + 1 === choice);
  }
}

// Create an instance of the Main class
const main = new Main();
