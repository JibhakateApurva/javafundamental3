function checkProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

const student = {
    name: "Apurva",
    age: 21,
    grade: "A"
};

console.log(checkProperty(student, "age"));
console.log(checkProperty(student, "grade"));