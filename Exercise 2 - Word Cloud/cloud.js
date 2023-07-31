
const paragraph = document.getElementById("myParagraph");

// Split the text into words and remove punctuation and special characters
const words = paragraph.innerText.toLowerCase().split(/\W+/);

// Count the occurrences of each word using an object (wordCount)
const wordCount = {};
for (const word of words) {
  if (word.trim() !== "") {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
}

// Convert the wordCount object into an array of [word, count] pairs
const wordFrequency = Object.entries(wordCount);

// Sort the wordFrequency array in descending order based on word count
wordFrequency.sort((a, b) => b[1] - a[1]);

// Get the #myWordCloud element
const wordCloudContainer = document.getElementById("myWordCloud");

// Generate the word cloud
for (let i = 0; i < Math.min(wordFrequency.length, 12); i++) {
  const [word, count] = wordFrequency[i];
  const fontSize = 64 - i * 4; // Font size decreases with rank (12 most frequent words)
  const span = document.createElement("span");
  span.textContent = word;
  span.style.fontSize = fontSize + "px";
  wordCloudContainer.appendChild(span);
}
