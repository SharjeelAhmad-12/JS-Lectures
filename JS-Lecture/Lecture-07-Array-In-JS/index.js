// Initial array
let fruits = ["Apple", "Banana", "Cherry"];
// Function to update the DOM
function updateDOM() {
    const manipulatedArray = document.getElementById('manipulated-array');
    manipulatedArray.innerHTML = fruits.map(fruit => `<li>${fruit}</li>`).join('');
}
// Add item
document.getElementById('add-item').addEventListener('click', function() {
    fruits.push("Mango");
    updateDOM();
});
// Remove last item
document.getElementById('remove-item').addEventListener('click', function() {
    fruits.pop();
    updateDOM();
});
// Update specific item
document.getElementById('update-item').addEventListener('click', function() {
    const index = fruits.indexOf("Banana");
    if (index !== -1) {
        fruits[index] = "Grapes";
    }
    updateDOM();
});