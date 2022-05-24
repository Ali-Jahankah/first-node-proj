const yargs = require("yargs");
const { addContact, listHandler, removeHandler } = require("./contacts");
yargs.command({
  command: "create",
  aliases: ["cr", "crt", "c"],
  describe: "[creating a new contact]",
  builder: {
    fullname: {
      alias: "f",
      describe: "person's fullname",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "ph",
      describe: "[person's phone number]",
      demandOption: true,
      type: "number",
    },
    email: {
      alias: "e",
      describe: "[person's email address]",
      type: "string",
      demandOption: true,
    },
  },
  handler({ fullname, phone, email }) {
    addContact(fullname, phone, email);
  },
});
yargs.command({
  describe: "Listing all the contacts",
  aliases: ["l", "li"],
  command: "list",
  handler() {
    listHandler();
  },
});
yargs.command({
  command: "remove",
  aliases: ["rm", "r"],
  describe: "Remove a contact",
  builder: {
    fullname: {
      describe: "[fullname]",
      alias: "f",
      type: "string",
      demandOption: true,
    },
  },
  handler({ fullname }) {
    removeHandler(fullname);
  },
});
// console.log(yargs.argv);
yargs.parse();
