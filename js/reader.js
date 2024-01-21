document.addEventListener('DOMContentLoaded', function () {
    let cardContainer = document.createElement(components.DIV);
    cardContainer.id = components.NOTECONTAINER;
    document.body.appendChild(cardContainer);

    let time = document.createElement(components.H6);
    time.id = 'time';
    document.body.appendChild(time);

    let return_button = document.createElement(components.BUTTON);
    return_button.textContent = messages.RETURN;
    return_button.addEventListener('click', () => window.location.href = '/index.html');
    document.body.appendChild(return_button);

    init();
    setInterval(() => init(), 2000);
});

function draw() {
    let cardContainer = document.getElementById(`${components.NOTECONTAINER}`);
    cardContainer.innerHTML = messages.EMPTY;

    // for each was chatgpt's idea
    cardgroup.list.forEach(card => {
        let card_el = document.createElement(components.DIV);
        card_el.classList.add(`${components.NOTE}-read`);

        let textarea = document.createElement('p');
        textarea.innerHTML = card.text;
        textarea.id = `textarea-${card.id}`; // appending card id to each textarea was chatgpts idea
        card_el.appendChild(textarea);

        cardContainer.appendChild(card_el);

        textarea.addEventListener("input", () => cardgroup.update(card));
    });
}