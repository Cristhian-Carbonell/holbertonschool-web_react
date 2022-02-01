interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Cristhian",
    lastName: "Carbonell",
    age: 33,
    location: "Pitalito",
};

const student2: Student = {
    firstName: "Claudia",
    lastName: "Parra",
    age: 43,
    location: "Neiva",
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

for (let i = 0; i < studentsList.length; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);

    const tdElement1 = document.createElement('td');
    const tdElement2 = document.createElement('td');
    for(const element in studentsList[i]) {
        if (element === 'firstName') {
            tdElement1.innerHTML = studentsList[i][element];            continue;
        }
        else if (element === 'location') {
            tdElement2.innerHTML = studentsList[i][element];
        }
        else {
            continue;
        }
    }
    tr.appendChild(tdElement1);
    tr.appendChild(tdElement2);
    
}
