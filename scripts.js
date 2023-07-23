// Constants for query selectors
const studentInfoElement = document.getElementById("studentInfo");
const jokeElement = document.getElementById("joke");
const getJokeButton = document.getElementById("getJokeButton");

// Replace YOUR_STUDENT_ID and YOUR_NAME with your actual student ID and name
const studentID = "200499973";
const studentName = "Mansi Patel";
studentInfoElement.textContent = `Student ID: ${studentID} | Name: ${studentName}`;

// Function to fetch a random Chuck Norris joke from the API
async function getChuckNorrisJoke() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        const joke = data.value;
        jokeElement.textContent = joke;
    } catch (error) {
        jokeElement.textContent = "Error fetching joke. Please try again.";
        console.error(error);
    }
}

// Event listener for the "Get Joke" button click
getJokeButton.addEventListener("click", getChuckNorrisJoke);
