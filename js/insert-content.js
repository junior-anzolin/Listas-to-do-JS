function insertOption(option) {
    const newOption = document.createElement('button');

    newOption.innerText = option.text;
    newOption.onclick = option.click;

    insertElementIntoContent(newOption);
}

function insertTitle(text) {
    const newTitle = document.createElement('h1');

    newTitle.innerText = text;

    insertElementIntoContent(newTitle);
}

function insertElementIntoContent(element) {
    content.appendChild(element);
}