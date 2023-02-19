// Select the color box and the generate button from the DOM
const colorBox = document.querySelector('.color-box');
const generateBtn = document.querySelector('#generate-color-btn');

// Function to generate a random hexadecimal color code
function generateHexColor() {
  const hexChars = '0123456789abcdef';
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return hexColor;
}

// Function to update the color box with a new hexadecimal color code
function updateColorBox() {
  const hexColor = generateHexColor();
  colorBox.style.backgroundColor = hexColor;
}

// Add an event listener to the generate button to update the color box when clicked
generateBtn.addEventListener('click', updateColorBox);
