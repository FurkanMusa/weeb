/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    /* Pass your questions in here */
    console.log("Enter text to generate QR code: ")
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    var qr_svg = qr.image('I love QR!', { type: 'svg' });
    qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
    var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
    console.log(svg_string);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Error: Prompt couldn't be rendered in the current environment");
    } else {
        console.error(error);
    }
  });

