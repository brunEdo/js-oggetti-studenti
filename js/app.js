// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Class student
class Student {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    presentation() {
        return `${this.name} ${this.surname}, ${this.age} years old`;
    }
}

// 1. Make a student object
let student1 = new Student("Edoardo", "Magnani", 27);

// 2. Print all properties
// document.getElementById("list").innerHTML += `<li>${student1.presentation()}</li>`;

// 3. Make an array of student objects
let students = [
    student1,
    new Student("Giovanni", "Rossi", 25),
    new Student("Paolo", "Verdi", 29)
]

// 4. Print all property for each student
const printStudents = () => {
    for (student of students) {
        document.getElementById("list").innerHTML += `<li>${student.presentation()}</li>`;
    }
}
printStudents();

// 5. Insert a student using user data
document.getElementById("new-student").addEventListener("click", () => {
    // ask new data
    let newName = prompt("New student's name");
    let newSurname = prompt("New student's surname");
    let newAge = prompt("New student's age");

    // new student object
    let newStudent = {
        name: newName,
        surname: newSurname,
        age: newAge
    }

    // add new student to the students array
    students.push(newStudent);

    // print all new student
    document.getElementById("list").innerHTML = "";
    printStudents();

})

// 6. Delete a student by his position in the list
document.getElementById("delete-student").addEventListener("click", () => {
    // ask new data
    let deletedStudentIndex = parseInt(prompt("List position of the student to be removed")) - 1;

    if ( !isNaN(deletedStudentIndex) && deletedStudentIndex > 0 && deletedStudentIndex < students.length ) {
        // delete student
        let remainingStudents = [];
        for ( let i = 0; i < students.length; i++) {
            if ( i !== deletedStudentIndex ) {
                remainingStudents.push(students[i]);
            }
        }
        students = remainingStudents;
            
        // print all new student
        document.getElementById("list").innerHTML = "";
        printStudents();
    }
});