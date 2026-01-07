const STUDENT_COUNT = 5;
const form = document.getElementById("marksForm");
const studentRows = document.getElementById("studentRows");
const resultsDiv = document.getElementById("results");

for (let i = 0; i < STUDENT_COUNT; i++) {
    const row = document.createElement("div");
    row.className = "student-row";

    const label = document.createElement("span");
    label.textContent = i + 1;

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Student name";
    nameInput.required = true;

    const marksInput = document.createElement("input");
    marksInput.type = "number";
    marksInput.min = "0";
    marksInput.max = "100";
    marksInput.placeholder = "Marks";
    marksInput.required = true;

    row.appendChild(label);
    row.appendChild(nameInput);
    row.appendChild(marksInput);
    studentRows.appendChild(row);
}

function students_marks_manager(event) {
    event.preventDefault();

    let students_data = [];
    const rows = studentRows.querySelectorAll(".student-row");

    rows.forEach((row) => {
        const name = row.querySelector("input[type='text']").value.trim();
        const marks = Number(row.querySelector("input[type='number']").value);
        students_data.push({ name: name, marks: marks });
    });

    let sort = students_data.sort((a, b) => {
        return b.marks - a.marks;
    });

    const highest = students_data[0].marks;
    const lowest = students_data[students_data.length - 1].marks;
    const avg = students_data.reduce((acc, curr) => acc + curr.marks, 0) / students_data.length;
    const topper = students_data[0].name;

    resultsDiv.classList.remove("hidden");
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <div class="result-item"><span>Highest Marks</span><strong>${highest}</strong></div>
        <div class="result-item"><span>Lowest Marks</span><strong>${lowest}</strong></div>
        <div class="result-item"><span>Average Marks</span><strong>${avg.toFixed(2)}</strong></div>
        <div class="result-item highlight"><span>Topper</span><strong>${topper}</strong></div>
    `;
}

form.addEventListener("submit", students_marks_manager);
// console.log(students_data)