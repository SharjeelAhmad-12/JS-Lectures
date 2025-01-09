# JavaScript Conditional Statements

JavaScript conditional statements allow you to perform different actions based on specific conditions. These statements are essential for decision-making in your code, enabling you to control the flow of execution.

## 1. If Statements (Basic Conditional)

### 1.1 `if()`

**Purpose:** Executes a block of code if a specified condition evaluates to `true`.

**Syntax:**

```javascript
if (condition) {
    // Code to execute if the condition is true
}
```

**Example:**

```javascript
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
```

**Output:**
```
You are an adult.
```

The code inside the `if` block executes because the condition `age >= 18` evaluates to `true`.

---

### 1.2 `if...else`

**Purpose:** Executes one block of code if the condition is `true` and another block if the condition is `false`.

**Syntax:**

```javascript
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

**Example:**

```javascript
let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

**Output:**
```
You are a minor.
```

The condition `age >= 18` is `false`, so the code inside the `else` block is executed.

---

### 1.3 `if...else if...else`

**Purpose:** Tests multiple conditions sequentially. If one condition is `true`, the corresponding block of code is executed. If none of the conditions are `true`, the `else` block is executed.

**Syntax:**

```javascript
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if neither condition is true
}
```

**Example:**

```javascript
let age = 25;
if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}
```

**Output:**
```
You are an adult.
```

---

## 2. Switch Statements (Multiple Conditions)

The `switch` statement is used to perform different actions based on multiple conditions. It is often used when you need to check many conditions against the same value.

### 2.1 `switch`

**Purpose:** Evaluates an expression and matches the result to the case clauses. Executes the corresponding code block when a match is found.

**Syntax:**

```javascript
switch (expression) {
    case value1:
        // Code to execute if expression matches value1
        break;
    case value2:
        // Code to execute if expression matches value2
        break;
    default:
        // Code to execute if no cases match
}
```

**Example:**

```javascript
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```

**Output:**
```
Tuesday
```

---

### 3. Default in Switch Statements

The `default` keyword is used in a `switch` statement to execute a block of code if no matching `case` is found.

#### 3.1 `default`

**Purpose:** Provides a default block of code to execute if no case matches the expression.

**Syntax:**

```javascript
switch (expression) {
    case value1:
        // Code to execute if expression matches value1
        break;
    case value2:
        // Code to execute if expression matches value2
        break;
    default:
        // Code to execute if no cases match
}
```

**Example:**

```javascript
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Apple is red.");
        break;
    case "banana":
        console.log("Banana is yellow.");
        break;
    default:
        console.log("Unknown fruit.");
}
```

**Output:**
```
Banana is yellow.
```

---

## Summary

- **If Statements:** Use `if`, `if...else`, or `if...else if...else` to execute code based on conditions.
- **Switch Statements:** Use `switch` for evaluating multiple conditions against the same value.
- **Default in Switch:** Use the `default` case to handle unmatched conditions.
