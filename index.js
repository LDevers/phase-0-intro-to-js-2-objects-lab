const employee = {
    name: "sam",
    streetAddress: "603 Walnut St"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployee = { ...obj, [key]: value };
    return updatedEmployee;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", "23");
console.log(updatedEmployee)

function destructivelyUpdateEmployeeWithKeyAndValue( obj, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newEmployee = {...obj};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    delete employee.name;
    return employee;
}
