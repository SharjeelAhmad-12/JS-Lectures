// Check if there is a favorite color stored in localStorage
document.addEventListener('DOMContentLoaded', function() {
    let storedColor = localStorage.getItem("favoriteColor"); // Retrieve the saved color from localStorage

    if (storedColor) {
        // If a color is stored, change the background color and show a message
        document.body.style.backgroundColor = storedColor;
        document.getElementById("message").innerText = `Your favorite color is saved as: ${storedColor}`;
    }
});

// Function to save the selected color to localStorage
function saveColor() {
    let color = document.getElementById("colorPicker").value; // Get the value of the color input
    localStorage.setItem("favoriteColor", color); // Save the color to localStorage

    // Change the background color to the selected color and show a confirmation message
    document.body.style.backgroundColor = color;
    document.getElementById("message").innerText = `Your favorite color has been saved: ${color}`;
}
