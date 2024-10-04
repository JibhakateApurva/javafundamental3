function count(obj) {
    return Object.keys(obj).length;
}

const student = {
    name: "Apurva",
    age: 21,
    grade: "A"
};

console.log(count(student));