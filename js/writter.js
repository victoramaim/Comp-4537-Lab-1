let notegroup;

function draw() {
    let noteContainer = document.getElementById(`${components.NOTECONTAINER}`);
    noteContainer.innerHTML = messages.EMPTY;

    // for each was chatgpt's idea
    notegroup.list.forEach(note => {
        let noteEl = document.createElement(components.DIV);
        noteEl.classList.add(components.NOTE);

        let textarea = document.createElement('textarea');
        textarea.value = note.text;
        textarea.id = `textarea-${note.id}`; // appending card id to each textarea was chatgpts idea
        noteEl.appendChild(textarea);

        let delete_button = document.createElement(components.BUTTON);
        delete_button.innerText = messages.DELETE;
        delete_button.addEventListener("click", () => notegroup.delete(note));
        noteEl.appendChild(delete_button);

        noteContainer.appendChild(noteEl);

        textarea.addEventListener("input", () => notegroup.update(note));
    });
}

function form() {
    let note = new Note('', notegroup.list.length);
    notegroup.add(note);
}

document.addEventListener('DOMContentLoaded', function () {
    let noteContainer = document.createElement(components.DIV);
    noteContainer.id = components.NOTECONTAINER;
    document.body.appendChild(noteContainer);

    let time = document.createElement(components.H6);
    time.id = 'time';
    document.body.appendChild(time);

    let add_button = document.createElement(components.BUTTON);
    add_button.textContent = messages.ADD;
    add_button.addEventListener('click', () => form());
    document.body.appendChild(add_button);

    // Button to return to home page
    let home_button = document.createElement(components.BUTTON);
    home_button.textContent = messages.HOME;
    home_button.addEventListener('click', () => window.location.href = '/index.html');
    document.body.appendChild(home_button);

    // Initialize
    init();
});