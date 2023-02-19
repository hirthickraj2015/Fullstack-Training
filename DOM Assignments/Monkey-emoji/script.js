// Select the monkey emoji from the DOM
const monkeyEmoji = document.querySelector('.monkey-emoji');

// Function to change the monkey emoji when clicked
function changeMonkeyEmoji() {
  const currentEmoji = monkeyEmoji.innerHTML;
  switch (currentEmoji) {
    case '🐵':
      monkeyEmoji.innerHTML = '🙈';
      break;
    case '🙈':
      monkeyEmoji.innerHTML = '🙉';
      break;
    case '🙉':
      monkeyEmoji.innerHTML = '🙊';
      break;
    case '🙊':
      monkeyEmoji.innerHTML = '🐵';
      break;
  }
}

// Add an event listener to the monkey emoji to change it when clicked
monkeyEmoji.addEventListener('click', changeMonkeyEmoji);
