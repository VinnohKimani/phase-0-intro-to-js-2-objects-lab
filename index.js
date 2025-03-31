// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}


const employee = { name: "John Doe", age: 30, position: "Developer" };

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Senior Developer");
console.log(updatedEmployee);
console.log(employee); 

destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 31);
console.log(employee);

const employeeWithoutAge = deleteFromEmployeeByKey(employee, "age");
console.log(employeeWithoutAge); 
console.log(employee); 
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(employee);
