// ================================
// Image Gallery (Assignment 4 – Part 2)
// ================================

// DOM references
const displayedImg = document.querySelector('.displayed-img');
const thumbBar     = document.querySelector('.thumb-bar');
const overlay      = document.querySelector('.overlay');
const btn          = document.querySelector('.full-img button'); // Darken/Lighten

// Image data ------------------------------------------------------------
// Filenames live in images/ folder.
const imageFiles = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

// Alt text for each image
const imageAlts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
  'pic5.jpg': 'Large butterfly on a green leaf'
};

// ----------------------------------------------------------------------
// Build the thumbnail bar
imageFiles.forEach(fileName => {
  const newImage = document.createElement('img');
  const src = `images/${fileName}`;
  const alt = imageAlts[fileName] || '';
  newImage.setAttribute('src', src);
  newImage.setAttribute('alt', alt);
  thumbBar.appendChild(newImage);

  // When a thumb is clicked, update the main image & alt text
  newImage.addEventListener('click', () => {
    displayedImg.setAttribute('src', src);
    displayedImg.setAttribute('alt', alt);
  });
});