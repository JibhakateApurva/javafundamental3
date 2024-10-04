const student = {
    name: "Apurva",
    age: 21,
    grade: "A"
};

function updateProperty(newGrade) {
    student.grade = newGrade;
}

updateProperty("B");
console.log(student);
