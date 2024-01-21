class Card {
    constructor(text, id) {
        this.text = text;
        this.id = id;
    }
}

class CardGroup {
    constructor() {
        this.list = [];
    }

    remove(card) {
        // Credit: 
        // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
        let index = this.list.indexOf(card);
        if (index > -1) {
            this.list.splice(index, 1);
        }

        localStorage.setItem('cards', JSON.stringify(this.list));
        draw();
    }

    add(card) {
        this.list.push(card);
        draw();
    }

    update(card) {
        let textarea = document.getElementById(`textarea-${card.id}`);
        card.text = textarea.value;

        if (card.text != messages.EMPTY) {
            textarea.addEventListener("input", () => {
                localStorage.setItem(`${components.NOTES}`, JSON.stringify(this.list));
                last_saved();
            });
        }
    }
}

// Credit: Mark Walters
// https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
function last_saved() {
    let time = document.getElementById(components.TIME);
    let currentdate = new Date();
    let datetime = `${messages.LAST_SAVED}`
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    time.innerHTML = datetime;
}

function init() {
    cardgroup = new CardGroup();
    let storedCards = JSON.parse(localStorage.getItem(`${components.NOTES}`)) || [];
    cardgroup.list = storedCards;

    last_saved();
    
    draw();
}