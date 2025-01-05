// complete the JS code
// Sample high scores data
const sampleScores = [
  { name: "Alice", score: 100 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 90 }
];

// Function to display the high scores
function displayScores() {
  const scoreList = document.getElementById('scoreList');

  // Retrieve scores from localStorage
  const storedScores = JSON.parse(localStorage.getItem('highScores'));

  // If no scores in localStorage, show the "No scores yet" message
  if (!storedScores || storedScores.length === 0) {
    scoreList.innerHTML = '<p>No scores yet</p>';
  } else {
    // Create a table to display the scores
    let table = '<table>';
    table += '<tr><th>Name</th><th>Score</th></tr>';

    // Populate table with stored scores
    storedScores.forEach(score => {
      table += `<tr><td>${score.name}</td><td>${score.score}</td></tr>`;
    });

    table += '</table>';
    scoreList.innerHTML = table;
  }
}

// Function to save scores to localStorage
function saveScores() {
  // Check if there are any scores in localStorage
  let storedScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // If there are no scores, initialize with sample data
  if (storedScores.length === 0) {
    storedScores = sampleScores;
  }

  // Save the scores back to localStorage
  localStorage.setItem('highScores', JSON.stringify(storedScores));
}

// Event listener for the "Show Scores" button
document.getElementById('showScoresButton').addEventListener('click', displayScores);

// Call saveScores once to initialize localStorage with sample data
saveScores();

// Display the scores when the page loads
displayScores();

