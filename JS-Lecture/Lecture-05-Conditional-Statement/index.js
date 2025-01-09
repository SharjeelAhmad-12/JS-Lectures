// If Statement
document.getElementById('if-button').addEventListener('click', function() {
    let age = 18;
    if (age >= 18) {
        document.getElementById('if-output').textContent = "You are an adult.";
    } else {
        document.getElementById('if-output').textContent = "You are a minor.";
    }
});
// If...Else Statement
document.getElementById('if-else-button').addEventListener('click', function() {
    let age = 16;
    if (age >= 18) {
        document.getElementById('if-else-output').textContent = "You are an adult.";
    } else {
        document.getElementById('if-else-output').textContent = "You are a minor.";
    }
});
// If...Else If...Else Statement
document.getElementById('if-else-if-button').addEventListener('click', function() {
    let age = 25;
    if (age < 18) {
        document.getElementById('if-else-if-output').textContent = "You are a minor.";
    } else if (age >= 18 && age < 60) {
        document.getElementById('if-else-if-output').textContent = "You are an adult.";
    } else {
        document.getElementById('if-else-if-output').textContent = "You are a senior.";
    }
});
// Switch Statement
document.getElementById('switch-button').addEventListener('click', function() {
    let day = 2;
    let output;
    switch (day) {
        case 1:
            output = "Monday";
            break;
        case 2:
            output = "Tuesday";
            break;
        case 3:
            output = "Wednesday";
            break;
        default:
            output = "Invalid day";
    }
    document.getElementById('switch-output').textContent = output;
});
// Switch Default Case
document.getElementById('default-button').addEventListener('click', function() {
    let fruit = "banana";
    let output;
    switch (fruit) {
        case "apple":
            output = "Apple is red.";
            break;
        case "banana":
            output = "Banana is yellow.";
            break;
        default:
            output = "Unknown fruit.";
    }
    document.getElementById('default-output').textContent = output;
});