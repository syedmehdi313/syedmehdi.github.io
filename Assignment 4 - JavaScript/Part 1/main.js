// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story     = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 2. RAW TEXT STRINGS

const storyText = 'It was 94 fahrenheit outside, so Bob the Goblin went for a walk. ' +
  'When they got to the soup kitchen, they stared in horror for a few moments, ' +
  'then turned into a slug and crawled away. Bob saw the whole thing, but was not ' +
  'surprised — Bob the Goblin weighs 300 pounds, and it was a hot day.';

const insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas'
];

const insertY = [
  'the soup kitchen',
  'Disneyland',
  'the White House'
];

const insertZ = [
  'turned into a slug',
  'spontaneously combusted',
  'melted into a puddle on the sidewalk'
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  // Create newStory from the template
  let newStory = storyText;

  // Pick random items
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders
  newStory = newStory.replaceAll('Bob the Goblin', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Custom name replacement
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  // UK unit conversion
  if (document.getElementById('uk').checked) {
    // pounds → stones (1 stone = 14 lbs)
    const weightInStones = Math.round(300 / 14) + ' stone';
    // fahrenheit → centigrade
    const tempInC = Math.round((94 - 32) * (5/9)) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit', tempInC);
    newStory = newStory.replace('300 pounds', weightInStones);
  }

  // Output to page
  story.textContent = newStory;
}
