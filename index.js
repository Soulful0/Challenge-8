const inquirer = require(`inquirer`);
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "output", "logo.svg");
const { Circle, Square, Triangle } = require(`./lib/shapes`);

inquirer
  .prompt([
    {
      type: `input`,
      name: `characters`,
      message: `What text should go inside of the svg? You can only use 3 characters.`,
      validate: function (answer) {
        if (answer.length > 3) {
          return "Please enter no more than 3 characters.";
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
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "circle":
        shape = new Circle();
        break;
      case "triangle":
        shape = new Triangle();
        break;
      case "square":
        shape = new Square();
        break;
    }

    if (shape) {
      shape.setColor(answers.shapeColor);
      let svg = shape.render();
      svg += `<text x="150" y="125" fill="${answers.textColor}" font-size="20" text-anchor="middle">${answers.characters}</text>`;
      svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">${svg}</svg>`;

      fs.writeFile(filePath, svg, (err) => {
        if (err) {
          console.error("Error writing to file", err);
        } else {
          console.log("Successfully wrote to ./output/logo.svg");
        }
      });
    }
  });
