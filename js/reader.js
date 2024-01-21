// DOM elements
document.addEventListener('DOMContentLoaded', function () {
    let noteContainer = document.createElement(components.DIV);
    noteContainer.id = components.NOTECONTAINER;
    document.body.appendChild(noteContainer);

    let time = document.createElement(components.H6);
    time.id = 'time';
    document.body.appendChild(time);

    // Button to return to home page
    let home_button = document.createElement(components.BUTTON);
    home_button.textContent = messages.HOME;
    home_button.addEventListener('click', () => window.location.href = '/index.html');
    document.body.appendChild(home_button);

    // Initialize
    init();
    setInterval(init, 2000); // update every 2 seconds
});

// Draw the current state of the card group
function draw() {
    let noteContainer = document.getElementById(`${components.NOTECONTAINER}`);
    noteContainer.innerHTML = messages.EMPTY;

    // for each was chatgpt's idea
    notegroup.list.forEach(note => {
        let noteEl = document.createElement(components.DIV);
        noteEl.classList.add(`${components.NOTE}-read`);

        let textArea = document.createElement('textarea');
        textArea.value = note.text;
        textArea.id = `textarea-${card.id}`; // appending card id to each textarea was chatgpts idea
        noteEl.appendChild(textArea);

        noteContainer.appendChild(noteEl);

        textArea.addEventListener("input", () => notegroup.update(note));
    });
}
