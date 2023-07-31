const textContainer = document.getElementById("myParagraph");

// Split the text into words and remove punctuation and special characters
const wordsArray = textContainer.innerText.toLowerCase().split(/\W+/);

// Count the occurrences of each word using an object (wordNumberOfCount)
const wordNumberOfCount = {};
for (const word of wordsArray) {
  if (word.trim() !== "") {
    wordNumberOfCount[word] = (wordNumberOfCount[word] || 0) + 1;
  }
}

// Convert the wordNumberOfCount object into an array of [word, count] pairs
const mostFrequent = Object.entries(wordNumberOfCount);

// Sort the mostFrequent array in descending order based on word count
mostFrequent.sort((a, b) => b[1] - a[1]);

const wordCloudContainer = document.getElementById("myWordCloud");

// Generate the HTML for the word cloud with appropriate font sizes
let cloudHTML = "";
const maxFontSize = 64;
for (let i = 0; i < Math.min(12, mostFrequent.length); i++) {
  const [word, count] = mostFrequent[i];
  const fontSize = maxFontSize - i * 4;
  cloudHTML += `<span style="font-size: ${fontSize}px">${word}</span> `;
}

// Update the word cloud container with the generated HTML
wordCloudContainer.innerHTML = cloudHTML;
