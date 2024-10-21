export default function createEmployeesObject(departmentName, employees) {
  let x = {
    [departmentName] : [...employees]
    }
  return x;
}

