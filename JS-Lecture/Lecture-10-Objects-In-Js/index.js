// index.js

// Example 1: Real-life object representing a product
const product = {
    name: "Smartphone",
    brand: "TechCorp",
    price: 499.99,
    inStock: true,
    displayDetails: function () {
        return `${this.brand} ${this.name} costs $${this.price}.`;
    }
};

// Mapping product details to the webpage
const productDetailsDiv = document.getElementById("product-details");
productDetailsDiv.textContent = product.displayDetails();

// Example 2: Nested object representing a student
const student = {
    name: "Emily",
    age: 22,
    address: {
        street: "456 University Lane",
        city: "Knowledge City",
        zip: "67890"
    },
    courses: {
        major: "Engineering",
        minor: "Physics"
    },
    getDetails: function () {
        return `${this.name}, aged ${this.age}, lives in ${this.address.city} and majors in ${this.courses.major}.`;
    }
};

// Mapping nested object details to the webpage
const studentInfoDiv = document.getElementById("student-info");
studentInfoDiv.textContent = student.getDetails();
