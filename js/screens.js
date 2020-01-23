function start() {
    clearScreen();

    insertTitle('Escolha uma das opções');

    insertOption({ text: 'Listas de tarefas', click: listToDos });
    insertOption({ text: 'Criar uma lista de tarefas', click: createListToDos });
    insertOption({ text: 'Encerrar', click: main });
}

function listToDos() {
    clearScreen();

    insertTitle('Listas existentes:');

    const listOutput = document.createElement('ul');

    restoreAllLists().map((list, i) => {
        const item = document.createElement('li');

        item.setAttribute('class', 'item-list');
        item.innerText = list.name;
        if (checkListAllChecked(list)) {
            item.innerText += ' OK';
        }
        item.addEventListener('click', () => openList(i));

        listOutput.appendChild(item);
    });

    insertElementIntoContent(listOutput);
    insertOption({ text: 'Voltar', click: start });
}

function openList(id) {
    clearScreen();

    const dataList = restoreList(id);
    insertTitle(dataList.name);

    const listOutput = document.createElement('ul');

    dataList.itens.map((item, i) => {
        const newItem = document.createElement('li');
        let text = item.text;

        newItem.setAttribute('class', 'item-to-do');
        if (item.status) {
            text += ' OK';
            newItem.setAttribute('class', 'item-to-do ok');
        }
        newItem.innerText = text;

        newItem.addEventListener('click', () => changeStatusItemList(id, i));

        listOutput.appendChild(newItem);
    });

    const formNewItem = document.createElement('form');
    formNewItem.setAttribute('action', 'javascript:submitFormNewItem(' + id + ')');
    const input = document.createElement('input');
    input.setAttribute('id', 'inputNewItem');
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Inserir';

    formNewItem.appendChild(input);
    formNewItem.appendChild(submitButton);

    insertElementIntoContent(listOutput);
    insertElementIntoContent(formNewItem);
    insertOption({ text: 'Voltar', click: listToDos });
}

function createListToDos() {
    clearScreen();

    insertTitle('Nova lista');

    const formNewList = document.createElement('form');
    formNewList.setAttribute('action', 'javascript:submitFormNewList()');
    const input = document.createElement('input');
    input.setAttribute('id', 'inputNewList');
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Criar';

    formNewList.appendChild(input);
    formNewList.appendChild(submitButton);

    insertElementIntoContent(formNewList);

    insertOption({ text: 'Voltar', click: start });
}