const form = document.getElementById("marksForm");
const nameInput = document.getElementById("nameInput");
const marksInput = document.getElementById("marksInput");
const studentList = document.getElementById("studentList");
const resultBtn = document.getElementById("resultBtn");
const resultsDiv = document.getElementById("results");

const students_data = [];

form.addEventListener("submit", addStudent);
resultBtn.addEventListener("click", showResults);

function addStudent(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const marks = Number(marksInput.value);

    students_data.push({ name: name, marks: marks });

    const item = document.createElement("div");
    item.className = "student-item";

    const nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = name;

    const marksSpan = document.createElement("span");
    marksSpan.className = "marks";
    marksSpan.textContent = `${marks} marks`;

    item.appendChild(nameSpan);
    item.appendChild(marksSpan);
    studentList.appendChild(item);

    nameInput.value = "";
    marksInput.value = "";
    nameInput.focus();

    resultBtn.disabled = false;
    resultsDiv.classList.add("hidden");
}

function showResults() {
    if (students_data.length === 0) return;

    const sort = students_data.slice().sort((a, b) => {
        return b.marks - a.marks;
    });

    const highest = sort[0].marks;
    const lowest = sort[sort.length - 1].marks;
    const avg = sort.reduce((acc, curr) => acc + curr.marks, 0) / sort.length;
    const topper = sort[0].name;

    resultsDiv.classList.remove("hidden");
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <div class="result-item"><span>Total Students</span><strong>${sort.length}</strong></div>
        <div class="result-item"><span>Highest Marks</span><strong>${highest}</strong></div>
        <div class="result-item"><span>Lowest Marks</span><strong>${lowest}</strong></div>
        <div class="result-item"><span>Average Marks</span><strong>${avg.toFixed(2)}</strong></div>
        <div class="result-item highlight"><span>Topper</span><strong>${topper}</strong></div>
    `;
}