const fs = require("fs");

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
  const duplicate = contacts.find((item) => item === newContact);
  duplicate
    ? console.log("contact already exists")
    : (contacts.push({ fullname, phone, email }),
      console.log("contact saved!"));
};
module.exports = {
  addContact,
};
