const fs = require("fs");
const chalk = require("chalk");
const loadContacts = () => {
  try {
    const contactsBufer = fs.readFileSync("./contacts.json");
    const contacts = contactsBufer.toString();

    return JSON.parse(contacts);
  } catch (error) {
    console.log(error);
    return [];
  }
};
const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();
  const newContact = { fullname, phone, email };
  const duplicate = contacts.find((item) => item.fullname === fullname);
  duplicate
    ? console.log(chalk.redBright("contact already exists"))
    : (contacts.push(newContact),
      saveHandler(contacts),
      console.log(chalk.green("contact saved!")));
  console.log(contacts);
};
const listHandler = () => {
  const contacts = loadContacts();
  contacts.length !== 0
    ? console.table(contacts)
    : console.log("There is not any contact! :(");
};
const removeHandler = (fullname) => {
  const contacts = loadContacts();
  const filtered = contacts.filter((c) => c.fullname !== fullname);
  contacts.length > filtered.length
    ? console.log(chalk.green(`[${fullname}] has removed!`))
    : console.log(chalk.red("There is no contact with this name! :("));
};
const saveHandler = (contacts) => {
  const data = JSON.stringify(contacts);
  fs.writeFile("./contacts.json", data, () => {
    console.log(chalk.green("contacts has updated"));
  });
};
module.exports = {
  addContact,
  listHandler,
  removeHandler,
};
