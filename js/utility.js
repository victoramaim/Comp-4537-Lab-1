// Class for the notes themselves
class Note {
    constructor(text, id) {
        this.text = text;
        this.id = id;
    }
}

// Chatgpt was used as a reference for this function
// Class for the group of notes (the list)
class NoteGroup {
    constructor() {
        this.list = [];
    }

    // Deletes a note from the list
    delete(note) {
        let index = this.list.indexOf(note);
        if (index > -1) {
            this.list.splice(index, 1);
        }

        localStorage.setItem('notes', JSON.stringify(this.list));
        draw();
    }

    // Adds a note to the list
    add(note) {
        this.list.push(note);
        draw();
    }

    // Updates a note in the list, and adds information to local storage
    update(note) {
        let textarea = document.getElementById(`textarea-${note.id}`);
        note.text = textarea.value;

        if (note.text != messages.EMPTY) {
            textarea.addEventListener("input", () => {
                localStorage.setItem(`${components.NOTES}`, JSON.stringify(this.list));
                Saved();
            });
        }
    }
}

// Chatgpt was used as a reference for this function
// Draw the current state of the card group
function Saved() {
    let time = document.getElementById(components.TIME);
    let currentdate = new Date();
    let datetime = `${messages.SAVED}`
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    time.innerHTML = datetime;
}

// Initialize the notes
function init() {
    notegroup = new NoteGroup();
    let savedNotes = JSON.parse(localStorage.getItem(`${components.NOTES}`)) || [];
    cardgroup.list = savedNotes;

    Saved();
    
    draw();
}
