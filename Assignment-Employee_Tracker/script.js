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
    this.annualSalary = annualPay;
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

  static displayMenu() {
    console.log("Main Menu:");
    console.log("1. Add Employee");
    console.log("2. Remove Employee");
    console.log("3. Edit Employee");
    console.log("4. Display Employees");
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
    this.employees.splice(choice - 1, 1);
    this.displayEmployees();
  }

  editEmployee() {
    const choice = parseInt(prompt("Enter the employee number to edit:"));
    const newPayRate = parseFloat(prompt("Enter the new pay rate:"));
    this.employees[choice - 1].payRate = newPayRate;
    this.displayEmployees();
  }

  displayEmployees() {
    console.log("ID\tName\tSalary\thrs\tpay\tFT/PT");
    this.employees.forEach((employee, index) => {
      console.log(
        `${index + 1}\t${employee.name}\t${employee.annualSalary}\t${
          employee.hours
        }\t${employee.payRate}\t${employee.employeeType}`
      );
    });
  }
}

(function () {
  const main = new Main();
  Main.displayMenu();
  main.addEmployee();
  main.removeEmployee();
  main.editEmployee();
  main.displayEmployees();
})();
