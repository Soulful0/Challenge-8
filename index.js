const inquirer = require(`inquirer`);
const { Circle, Square, Triangle } = require(`./lib/shapes`);

inquirer
  .prompt([
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
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
    }

    if (shape) {
      shape.setColor(answers.shapeColor);
      let svg = shape.render();
      // Add text to the SVG
      svg += `<text x="150" y="125" fill="${answers.textColor}" font-size="20" text-anchor="middle">${answers.characters}</text>`;
      svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">${svg}</svg>`;
      console.log(svg);
    }
  });
