document.getElementById("for-loop-button").addEventListener("click", function() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += i + "<br>";
    }
    document.getElementById("for-loop-output").innerHTML = output;
});
document.getElementById("while-loop-button").addEventListener("click", function() {
    let output = "";
    let i = 1;
    while (i <= 5) {
        output += i + "<br>";
        i++;
    }
    document.getElementById("while-loop-output").innerHTML = output;
});
document.getElementById("do-while-loop-button").addEventListener("click", function() {
    let output = "";
    let i = 1;
    do {
        output += i + "<br>";
        i++;
    } while (i <= 5);
    document.getElementById("do-while-loop-output").innerHTML = output;
});
document.getElementById("for-in-loop-button").addEventListener("click", function() {
    let output = "";
    const obj = {a: 1, b: 2, c: 3};
    for (let key in obj) {
        output += key + ": " + obj[key] + "<br>";
    }
    document.getElementById("for-in-loop-output").innerHTML = output;
});
document.getElementById("for-of-loop-button").addEventListener("click", function() {
    let output = "";
    const arr = [1, 2, 3, 4, 5];
    for (let value of arr) {
        output += value + "<br>";
    }
    document.getElementById("for-of-loop-output").innerHTML = output;
});
document.getElementById("break-continue-button").addEventListener("click", function() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            output += "Breaking at " + i + "<br>";
            break;  // Exits the loop when i is 6
        }
        if (i === 3) {
            output += "Skipping " + i + "<br>";
            continue;  // Skips the rest of the loop when i is 3
        }
        output += i + "<br>";
    }
    document.getElementById("break-continue-output").innerHTML = output;
});