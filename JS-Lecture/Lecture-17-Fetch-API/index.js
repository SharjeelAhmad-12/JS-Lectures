// Select the card container element from the DOM
let cardContainer = document.getElementById("cardContainer");
// Asynchronous function to fetch data from the API and display it
async function fetchAndDisplay() {
    // Fetch data from the fake store API
    const response = await fetch('https://fakestoreapi.com/products');
    // Check if the response is not okay (e.g., network issues, server error)
    if (!response.ok) {
        console.log(response.statusText); // Log the error message
    }
    // Convert the API response to JSON format
    const post = await response.json();
    // Dynamically create card elements for the first 10 products
    cardContainer.innerHTML = post.slice(0, 10) // Limit to 10 products
        .map(post => `
            <div class="card">
                <div>
                    <!-- Display product image -->
                    <img src="${post.image}">
                    <!-- Display product title -->
                    <h4>Title: ${post.title}</h4>
                </div>
                <div>
                    <!-- Display product category -->
                    <p>Category: ${post.category}</p>
                    <!-- Display product description -->
                    <p class="description">Description: ${post.description}</p>
                    <!-- Display product rating -->
                    <p>Rate: ${post.rating.rate}</p>
                    <!-- Display product price -->
                    <p>Price: ${post.rating.count}</p>
                </div>
            </div>`).join(""); // Join all cards into a single HTML string
}
// Call the function to fetch and display data when the page loads
fetchAndDisplay();