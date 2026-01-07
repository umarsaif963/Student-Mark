

function students_marks_manager() {
    let students_data = [];

    for (let i = 0; i < 5; i++) {
        let name = prompt("Enter the name of Student: ")
        let mark = Number(prompt("Enter the marks of the student: "))
        let student_object = { name: name, marks: mark }
        students_data.push(student_object)

    }

    let sort = students_data.sort((a, b) => {
        return b.marks - a.marks;
    })
    console.log(`Higest Marks is: ${students_data[0].marks}`)
    console.log(`Lowest Marks is: ${students_data[students_data.length - 1].marks}`)
    let avg = students_data.reduce((acc, curr) => acc + curr.marks, 0) / students_data.length;
    console.log(`Averge marks are: ${avg}`)
    console.log(`Topper student is: ${students_data[0].name}`)
}
students_marks_manager()
// console.log(students_data)