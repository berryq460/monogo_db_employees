
//Create a seed file with 5 employees

const db = require("../db");
//child
const Employee = require("../model/employee");

db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
  
  const employees = [
    {
      first_name: "James",
      last_name: "Nico",
      email: "james_nico@gmail.com",
      job_title: "swimmer",
      address: {
        street: "2112 Chelsea Avenue",
        city: "NY",
        state: "Saratoga",
        zip: "10117",
      }
    },
    {
      first_name: "Mary",
      last_name: "Zapata",
      email: "m_zapata@gmail.com",
      job_title: "acrobat",
      address: {
        street: "Fulton Avenue",
        city: "NYC",
        state: "NY",
        zip: "90874",
      }
    },
    {
      first_name: "Fulani",
      last_name: "Docari",
      email: "fulanid@gmail.com",
      job_title: "singer",
      address: {
        street: "First Waverly Place",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    },
    {
      first_name: "Tyra",
      last_name: "Banks",
      email: "tyra_banks@gmail.com",
      job_title: "acrobat",
      address: {
        street: "96 Riley Avenue",
        city: "NYC",
        state: "California",
        zip: "23495",
      }
    },
    {
      first_name: "Damian",
      last_name: "Picardo",
      email: "damian@gmail.com",
      job_title: "teacher",
      address: {
        street: "Silver Avenue",
        city: "Los Angeles",
        state: "California",
        zip: "12346",
      }
    }
  ];


  await Employee.insertMany(employees);
  
  console.log("created books with publishers")

};


const run = async () => {
  await main();
  db.close();
};

run();