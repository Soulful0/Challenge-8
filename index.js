const inquirer = require(`inquirer`);
const Shape = require(`./lib/shapes`);

inquirer.prompt([
  {
    type: `input`,
    name: `characters`,
    message: `What text should go instide of the svg? You can only use 3 characters.`,
    validate: function (answer) {
      if (answer.length > 3) {
        return false;
      }
      return true;
    },
  },
  {
    type: `input`,
    name: `textColor`,
    message: `What color should the text be? Must be a valid color`,
  },
  {
    type: `rawlist`,
    name: `shape`,
    message: `What shape would you like?`,
    choices: [`circle`, `triangle`, `square`],
  },
  {
    type: `input`,
    name: `shapeColor`,
    message: `What color should the svg be?`,
  },
]);
