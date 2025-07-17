// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize  = document.querySelector('.randomize');
const story      = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 2. RAW TEXT STRINGS
// Note the three placeholders and the default Bob / US units
const storyText =
  'It was 94 fahrenheit outside, so :insertx: went for a walk. ' +
  'When they got to :inserty:, they stared in horror for a few moments, ' +
  'then :insertz:. Bob saw the whole thing, but was not surprised — ' +
  ':insertx: weighs 300 pounds, and it was a hot day.';

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
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away'
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  // fresh copy each click
  let newStory = storyText;

  // pick random phrases
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // substitute placeholders (x appears twice)
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // custom name?
  if (customName.value.trim() !== '') {
    const name = customName.value.trim();
    newStory = newStory.replaceAll('Bob', name);
  }

  // UK units?
  if (document.getElementById('uk').checked) {
    // 300 lb → stone (1 stone = 14 lb)
    const weight = Math.round(300 / 14) + ' stone';
    // 94 °F → °C
    const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible'; // MDN starter hides p until first run
}
