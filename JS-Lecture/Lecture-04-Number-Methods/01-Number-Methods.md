# JavaScript Number Methods

JavaScript numbers come with various built-in methods that provide functionality to manipulate, format, and analyze numeric data. Below is a comprehensive guide to all the essential number methods, explained in detail.

## 1. Number Properties
These properties provide constants and static values associated with numbers.

### 1.1 Number.EPSILON
- **Purpose**: Represents the smallest difference between two representable numbers.
- **Usage**: Use this to deal with precision errors in floating-point calculations.
- **Example**: `Number.EPSILON` returns approximately `2.220446049250313e-16`.

### 1.2 Number.MAX_SAFE_INTEGER
- **Purpose**: Represents the largest safe integer in JavaScript.
- **Usage**: Helps identify numbers that can be safely represented as integers without rounding errors.
- **Example**: `Number.MAX_SAFE_INTEGER` returns `9007199254740991`.

### 1.3 Number.MIN_SAFE_INTEGER
- **Purpose**: Represents the smallest safe integer in JavaScript.
- **Usage**: Use this to identify the smallest integer that can be safely represented.
- **Example**: `Number.MIN_SAFE_INTEGER` returns `-9007199254740991`.

### 1.4 Number.MAX_VALUE
- **Purpose**: Represents the largest positive number in JavaScript.
- **Usage**: Helps in detecting overflow errors.
- **Example**: `Number.MAX_VALUE` returns approximately `1.7976931348623157e+308`.

### 1.5 Number.MIN_VALUE
- **Purpose**: Represents the smallest positive number in JavaScript.
- **Usage**: Use this for very small numbers close to zero.
- **Example**: `Number.MIN_VALUE` returns approximately `5e-324`.

### 1.6 Number.NaN
- **Purpose**: Represents a special "Not-a-Number" value.
- **Usage**: Use this to check for invalid number computations.
- **Example**: `Number.NaN` is a constant that always returns `NaN`.

### 1.7 Number.POSITIVE_INFINITY
- **Purpose**: Represents positive infinity.
- **Usage**: Used to handle computations that exceed the largest possible number.
- **Example**: `Number.POSITIVE_INFINITY` returns `Infinity`.

### 1.8 Number.NEGATIVE_INFINITY
- **Purpose**: Represents negative infinity.
- **Usage**: Used to handle computations that result in values smaller than the smallest possible number.
- **Example**: `Number.NEGATIVE_INFINITY` returns `-Infinity`.

## 2. Number Methods
These methods perform operations and transformations on numeric data.

### 2.1 toString()
- **Purpose**: Converts a number to a string representation.
- **Usage**: Use this method to display numbers as strings.
- **Syntax**: `number.toString(base)`  
  - `base`: An optional parameter that specifies the base (radix) for the conversion (e.g., 2 for binary, 16 for hexadecimal).
- **Example**:
  ```javascript
  let num = 255;
  let str = num.toString(16);
  // str will be "ff"
  ```

### 2.2 toFixed()
- **Purpose**: Formats a number to a specified number of decimal places.
- **Usage**: Useful for rounding numbers to a fixed number of decimal points.
- **Syntax**: `number.toFixed(digits)`  
  - `digits`: The number of decimal places to round to.
- **Example**:
  ```javascript
  let num = 123.456;
  let fixed = num.toFixed(2);
  // fixed will be "123.46"
  ```

### 2.3 toExponential()
- **Purpose**: Converts a number to an exponential notation string.
- **Usage**: Use this to display numbers in scientific notation.
- **Syntax**: `number.toExponential(fractionDigits)`  
  - `fractionDigits`: Specifies the number of digits after the decimal point (optional).
- **Example**:
  ```javascript
  let num = 123456;
  let exp = num.toExponential(2);
  // exp will be "1.23e+5"
  ```

### 2.4 toPrecision()
- **Purpose**: Formats a number to a specified precision (total number of significant digits).
- **Usage**: Use this for flexible rounding or significant figure representation.
- **Syntax**: `number.toPrecision(precision)`  
  - `precision`: The number of significant digits to include.
- **Example**:
  ```javascript
  let num = 123.456;
  let precise = num.toPrecision(4);
  // precise will be "123.5"
  ```

### 2.5 isFinite()
- **Purpose**: Determines if a value is a finite number.
- **Usage**: Use this to check if a value is not `Infinity`, `-Infinity`, or `NaN`.
- **Syntax**: `Number.isFinite(value)`
- **Example**:
  ```javascript
  let result = Number.isFinite(100);
  // result will be true
  ```

### 2.6 isInteger()
- **Purpose**: Checks if a value is an integer.
- **Usage**: Use this to verify whether a number is whole (no decimal part).
- **Syntax**: `Number.isInteger(value)`
- **Example**:
  ```javascript
  let result = Number.isInteger(100.5);
  // result will be false
  ```

### 2.7 isNaN()
- **Purpose**: Determines if a value is `NaN`.
- **Usage**: Use this to explicitly check for "Not-a-Number" values.
- **Syntax**: `Number.isNaN(value)`
- **Example**:
  ```javascript
  let result = Number.isNaN(NaN);
  // result will be true
  ```

### 2.8 parseFloat()
- **Purpose**: Parses a string and converts it to a floating-point number.
- **Usage**: Use this to extract and convert numeric values from strings.
- **Syntax**: `parseFloat(string)`
- **Example**:
  ```javascript
  let num = parseFloat("123.45px");
  // num will be 123.45
  ```

### 2.9 parseInt()
- **Purpose**: Parses a string and converts it to an integer.
- **Usage**: Use this to extract whole numbers from strings.
- **Syntax**: `parseInt(string, radix)`  
  - `radix`: An optional parameter specifying the base of the numeral system (e.g., 10 for decimal, 2 for binary).
- **Example**:
  ```javascript
  let num = parseInt("123.45", 10);
  // num will be 123
  ```

### 2.10 valueOf()
- **Purpose**: Returns the primitive value of a Number object.
- **Usage**: Used to retrieve the primitive numeric value.
- **Syntax**: `number.valueOf()`
- **Example**:
  ```javascript
  let num = new Number(123);
  let primitive = num.valueOf();
  // primitive will be 123
  ```

## Conclusion
JavaScript provides powerful methods and properties to handle numbers effectively. From formatting and precision to parsing and validation, mastering these number methods will significantly enhance your ability to work with numeric data in JavaScript programming.
