# How to Link JavaScript with HTML

In this lesson, we'll learn how to link JavaScript to an HTML file. There are three main ways to include JavaScript in an HTML document:

1. **Inline JavaScript**
2. **Internal JavaScript**
3. **External JavaScript**

Let's walk through each method:

## 1. Inline JavaScript

Inline JavaScript is when you add JavaScript directly inside an HTML element's attributes. Here's an example using the `onclick` event:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline JavaScript</title>
</head>
<body>
    <h1>Click the Button to See an Alert</h1>
    <button onclick="alert('Hello from Inline JavaScript!')">Click Me</button>
</body>
</html>

## 2. Internal JavaScript
Internal JavaScript is when the JavaScript code is written directly inside the HTML document using the <script> tag. It's a good choice for smaller projects or when you're just starting to work with JavaScript.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal JavaScript</title>
</head>
<body>
    <h1>Alert Show In The Browser</h1>
    <script>
       alert("Hello from Inline JavaScript!")
    </script>
</body>
</html>

## 3. External JavaScript involves writing JavaScript code in a separate .js file and linking it to the HTML file using the <script src="filename.js"></script> tag. This method is preferred for larger projects and for keeping code well-organized.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External JavaScript</title>
</head>
<body>
    <h1>Alert Show In The Browser</h1>
    <!-- Link to External JavaScript -->
    <script src="filename.js"></script>
</body>
</html>


## Make a Seperate filename.js 

  alert("Hello from External JavaScript!")