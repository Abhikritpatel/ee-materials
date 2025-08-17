// Example data structure for your materials
const materials = {
    "Semester 1": {
        "Mathematics I": [
            { name: "Lecture Notes", link: "notes/math1.pdf" },
            { name: "Previous Year Papers", link: "papers/math1.pdf" }
        ],
        "Basic Electrical": [
            { name: "Reference Book", link: "books/basic_electrical.pdf" }
        ]
    },
    "Semester 2": {
        "Physics": [
            { name: "Lab Manual", link: "manuals/physics_lab.pdf" }
        ]
    }
};

function loadContent() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // clear welcome text

    Object.keys(materials).forEach(sem => {
        const semDiv = document.createElement("div");
        semDiv.className = "semester";
        
        const semTitle = document.createElement("h2");
        semTitle.textContent = sem;
        semDiv.appendChild(semTitle);

        const subjList = document.createElement("ul");
        Object.keys(materials[sem]).forEach(subject => {
            const subjItem = document.createElement("li");
            subjItem.textContent = subject;
            subjItem.addEventListener("click", () => showMaterials(sem, subject));
            subjList.appendChild(subjItem);
        });

        semDiv.appendChild(subjList);
        content.appendChild(semDiv);
    });
}

function showMaterials(sem, subject) {
    const content = document.getElementById("content");
    content.innerHTML = `<h2>${subject} - ${sem}</h2><ul>`;
    materials[sem][subject].forEach(item => {
        content.innerHTML += `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`;
    });
    content.innerHTML += "</ul><button onclick='loadContent()'>⬅ Back</button>";
}

document.addEventListener("DOMContentLoaded", loadContent);
