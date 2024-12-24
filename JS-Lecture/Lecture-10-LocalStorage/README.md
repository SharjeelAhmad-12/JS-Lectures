# How This Works:
## HTML:

- A simple input field (`<input type="color">`) allows the user to pick a color.
- A button is provided to save the chosen color.
- A paragraph element (`<p>`) is used to display a message confirming the saved color.

## JavaScript (index.js):

- On page load (`DOMContentLoaded`), the script checks if there's a saved favorite color in `localStorage`. If found, it sets the background color of the page to that color and displays a message.
- When the user picks a color and clicks the "Save Color" button, the `saveColor()` function is triggered. It stores the selected color in `localStorage`, updates the page's background, and displays a confirmation message.

## How to Test:
1. Open the HTML file in your browser.
2. Choose a color using the color picker and click the "Save Color" button.
3. Refresh the page, and you'll see the background color reset to the one you previously selected because it was saved in local storage.

This simple example shows how to use `localStorage` to persist user preferences (like their favorite color) across page reloads.