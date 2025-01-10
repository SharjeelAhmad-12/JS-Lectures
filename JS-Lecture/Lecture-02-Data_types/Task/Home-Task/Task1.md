**Question 1: Block Scope with `let`**  
```javascript
{
    let x = 10;
}
console.log(x); // What will be the output?
```

**Question 2: Block Scope with `const`**  
```javascript
{
    const y = 20;
}
console.log(y); // What will be the output?
```

**Question 3: Block Scope with `var`**  
```javascript
{
    var z = 30;
}
console.log(z); // What will be the output?
```

**Question 4: Shadowing with `let`**  
```javascript
let a = 50;
{
    let a = 25;
    console.log(a); // What will be the output?
}
console.log(a); // What will be the output?
```

**Question 5: Shadowing with `const`**  
```javascript
const b = 100;
{
    const b = 50;
    console.log(b); // What will be the output?
}
console.log(b); // What will be the output?
```

**Question 6: Shadowing with `var`**  
```javascript
var c = 200;
{
    var c = 100;
    console.log(c); // What will be the output?
}
console.log(c); // What will be the output?
```

**Question 7: Mixed Scope with `var`, `let`, and `const`**  
```javascript
let d = 15;
const e = 30;
var f = 45;

{
    var f = 10;
    let d = 20;
    const e = 25;
    console.log(d); // What will be the output?
    console.log(e); // What will be the output?
    console.log(f); // What will be the output?
}
console.log(d); // What will be the output?
console.log(e); // What will be the output?
console.log(f); // What will be the output?
```

**Question 8: Temporal Dead Zone**  
```javascript
{
    console.log(g); // What will be the output?
    let g = 5;
}
```

**Question 9: `const` Mutation in a Block**  
```javascript
{
    const obj = { name: "Alice" };
    obj.name = "Bob";
    console.log(obj.name); // What will be the output?

    obj = { name: "Charlie" }; // Will this line work? Why or why not?
}
```

**Question 10: Hoisting in Block Scope with `var`, `let`, and `const`**  
```javascript
{
    console.log(h); // What will be the output?
    var h = 10;
}
{
    console.log(i); // What will be the output?
    let i = 20;
}
{
    console.log(j); // What will be the output?
    const j = 30;
}
```

**Question 11: Variable Redefinition**  
```javascript
{
    var a = 10;
    let a = 20; // Will this line work? Why or why not?
    console.log(a);
}
```

**Question 12: Nested Scopes with `let`**  
```javascript
{
    let b = 5;
    {
        let b = 10;
        {
            b = 20;
            console.log(b); // What will be the output?
        }
        console.log(b); // What will be the output?
    }
    console.log(b); // What will be the output?
}
```

**Question 13: Mixed Scopes and Hoisting**  
```javascript
{
    console.log(c); // What will be the output?
    var c = 50;
    {
        let c = 100;
        console.log(c); // What will be the output?
    }
    console.log(c); // What will be the output?
}
```

**Question 14: `const` Reassignment in Nested Blocks**  
```javascript
{
    const d = 40;
    {
        const d = 80;
        {
            console.log(d); // What will be the output?
        }
        console.log(d); // What will be the output?
    }
    console.log(d); // What will be the output?
}
```

**Question 15: Shadowing and Block Scope**  
```javascript
let e = 10;
{
    const e = 20;
    {
        var e = 30; // Will this line work? Why or why not?
        console.log(e);
    }
}
console.log(e); // What will be the output?
```

**Question 16: Dynamic Scope Update**  
```javascript
{
    let f = 100;
    {
        f += 50;
        console.log(f); // What will be the output?
        {
            let f = 200;
            f -= 30;
            console.log(f); // What will be the output?
        }
        console.log(f); // What will be the output?
    }
}
```

**Question 17: `var` and Nested Scope Leaks**  
```javascript
{
    var g = 60;
    {
        var g = 120;
        console.log(g); // What will be the output?
    }
    console.log(g); // What will be the output?
}
```

**Question 18: Hoisting with Block Scope Variables**  
```javascript
{
    console.log(h); // What will be the output?
    let h = 10;
    console.log(h); // What will be the output?
    {
        console.log(h); // What will be the output?
        var h = 20; // Will this work? Why or why not?
    }
}
```

**Question 19: Combination of `let`, `const`, and `var`**  
```javascript
{
    let i = 25;
    var j = 50;
    {
        const i = 75;
        let j = 100;
        {
            var i = 125; // Will this work? Why or why not?
            console.log(i);
            console.log(j);
        }
        console.log(i); // What will be the output?
        console.log(j); // What will be the output?
    }
    console.log(i); // What will be the output?
    console.log(j); // What will be the output?
}