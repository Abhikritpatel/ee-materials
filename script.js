// Data: semesters → subjects → notes
const data = [
    {
        semester: "Semester 1",
        subjects: [
            {
                name: "Physics",
                notes: [
                    { title: "Lecture 1", file: "semester1/physics/lecture1.pdf" },
                    { title: "Lecture 2", file: "semester1/physics/lecture2.pdf" }
                ]
            },
            {
                name: "Electrical Engineering",
                notes: [
                    { title: "Circuit Basics", file: "semester1/electrical/circuits.pdf" }
                ]
            }
        ]
    },
    {
        semester: "Semester 2",
        subjects: [
            {
                name: "Mathematics",
                notes: [
                    { title: "Calculus Notes", file: "semester2/maths/calculus.pdf" }
                ]
            }
        ]
    }
];

// Dynamically render
document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");

    data.forEach(sem => {
        const semDiv = document.createElement("div");
        semDiv.innerHTML = `<h2>${sem.semester}</h2>`;

        sem.subjects.forEach(sub => {
            const subDiv = document.createElement("div");
            subDiv.innerHTML = `<h3>${sub.name}</h3>`;

            const ul = document.createElement("ul");
            sub.notes.forEach(note => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${note.file}" target="_blank">${note.title}</a>`;
                ul.appendChild(li);
            });

            subDiv.appendChild(ul);
            semDiv.appendChild(subDiv);
        });

        content.appendChild(semDiv);
    });
});
