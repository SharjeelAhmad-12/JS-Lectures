// Select the buttons and output divs
const asyncButton = document.querySelector("#asynchronous-javascript button");
const asyncOutput = document.querySelector("#asynchronous-javascript .output");
const callbackButton = document.querySelector("#callbacks button");
const callbackOutput = document.querySelector("#callbacks .output");
const fetchMovieButton = document.querySelector("#real-life-example button");
const fetchMovieOutput = document.querySelector("#real-life-example .output");
// Function to demonstrate asynchronous behavior
function asyncExample() {
    asyncOutput.textContent = "Simulating an asynchronous task...";
    setTimeout(() => {
        asyncOutput.textContent = "Asynchronous task complete!";
    }, 2000); // Simulate a 2-second delay
}
// Function to demonstrate a callback
function doTask(callback) {
    callbackOutput.textContent = "Task is being done...";
    setTimeout(() => {
        callback();
    }, 2000); // Simulate a task delay
}
function completeTask() {
    callbackOutput.textContent = "Task is complete!";
}
// Function to simulate fetching movie data
function fetchMovieData(callback) {
    fetchMovieOutput.textContent = "Fetching movie data...";
    setTimeout(() => {
        const movie = "Inception";
        callback(movie);
    }, 3000); // Simulate a 3-second delay
}
function displayMovie(movie) {
    fetchMovieOutput.textContent = `The movie is: ${movie}`;
}
// Add event listeners to buttons
asyncButton.addEventListener("click", asyncExample);
callbackButton.addEventListener("click", () => doTask(completeTask));
fetchMovieButton.addEventListener("click", () => fetchMovieData(displayMovie));