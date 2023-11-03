"use strict";
let note_title_el = document.querySelector(".note-title");
let note_description_el = document.querySelector(".note-description");
let add_note_btn = document.querySelector(".add-note-btn");
let notes_form_el = document.querySelector(".notes-form");
notes_form_el.addEventListener('submit', (e) => {
    e.preventDefault();
    let noteTitle = note_title_el.value;
    let noteDescription = note_description_el.value;
    if (noteTitle !== " " && noteDescription !== " ") {
        const promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3000/notes/new', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "noteTitle": noteTitle,
                    "noteDescription": noteDescription
                })
            }).then((res => res.json())).then(noteData => {
                console.log(noteData);
                resolve(noteData);
            }).catch(error => {
                console.log(error);
            });
        });
    }
    else {
        console.log("Form field are empty");
    }
});
