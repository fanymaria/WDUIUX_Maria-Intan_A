const greeting = "Hello, this is a string example.";
console.log("String:", greeting);

const student = true;
console.log("Boolean:", student);

const age = 25;
console.log("Number:", age);

const colors = ["Red", "Green", "Blue"];
console.log("Array:", colors);

const user = {
    name: "Alex",
    age: 25,
    student: true
};
console.log("Object:", user);

console.log("This is a console log example message.");

const hasAccess = true;
const isAdmin = false;
const canEdit = hasAccess && isAdmin; 
const canView = hasAccess || isAdmin; 
const cannotView = !hasAccess; 

console.log("Logical Operator AND (hasAccess && isAdmin):", canEdit); 
console.log("Logical Operator OR (hasAccess || isAdmin):", canView); 
console.log("Logical Operator NOT (!hasAccess):", cannotView); 

const num1 = 10;
const num2 = "10";

console.log("Equality Comparison (==):", num1 == num2);  
console.log("Strict Equality Comparison (===):", num1 === num2);