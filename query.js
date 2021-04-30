
// Create a query file with the following queries:
// find all employees
// create one employee
// create three employees
// update one employee
// delete an employee
// return a list of all employees' full names (first_name + last_name)

const db = require('./db');
const Employee = require("./model/employee");
const EmployeesData = require("./model/employeesData");


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const deleteAll = async () => {
  const employees = await Employee.deleteMany();

}

const findAll = async () => {
  const employees = await Employee.find();
  console.log("All employees found", employees);
}

const createAnEmployee = async () => {
  const addEmployee = {
    first_name: "Berry",
    last_name: "Jackson",
    email: "jackson@gmail.com",
    job_title: "actress",
    address: {
      street: "2345 Third Avenue",
      city: "Santa Monica",
      state: "California",
      zip: "10019",
    }
  }

    await Employee.insertMany(addEmployee)
    console.log("added an employee")

}

const createThreeEmployee = async () => {
  const addThreeEmployee = [
    {
      first_name: "Dana",
      last_name: "Michele",
      email: "dmichele@gmail.com",
      job_title: "TV personality",
      address: {
        street: "1234 Broadway Avenue",
        city: "New York",
        state: "NY",
        zip: "10029",
      }
    },
    {
      first_name: "Trey",
      last_name: "Songz",
      email: "tSongz4Lyfe@gmail.com",
      job_title: "singer",
      address: {
        street: "222 Long Beach Avenue",
        city: "Gatlinburg",
        state: "Tennesse",
        zip: "1001",
      }
    },
    {
      first_name: "Iyana",
      last_name: "Curry",
      email: "icurry@gmail.com",
      job_title: "Chef",
      address: {
        street: "2222 Buena Vista Avenue",
        city: "LAX",
        state: "California",
        zip: "15548",
      }
    }
      ]

    await Employee.insertMany(addThreeEmployee)
    console.log("added an employee")

}

const updateEmployee = async () => {
  const employees = await Employee.updateOne({ first_name: "Berry" }, { $set: { address: "3333 PeachTree" } });
  console.log("update Berry:", employees)
}

const deleteAnEmployee = async () => {
  const employees = await Employee.deleteOne({ first_name: "Trey" });
  console.log("Deleted an employee by name")
}

const run = async () => {

  // await deleteAll();
  await findAll();
  // await createAnEmployee();
  // await createThreeEmployee();
  // await updateEmployee();
  // await deleteAnEmployee();
  process.exit()  
}

run()