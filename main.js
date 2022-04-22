const yargs = require("yargs");

yargs.command({
  command: "create",
  aliases: ["cr", "crt", "c"],
  describe: "[creating a new contact]",
  builder: {
    fullname: {
      alias: "f",
      describe: "person's fuulname",
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
    console.log(fullname, phone, email);
  },
});
// console.log(yargs.argv);
yargs.parse();
