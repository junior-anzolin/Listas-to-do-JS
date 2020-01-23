const content = document.getElementById('content');

function main() {
    clearScreen();

    insertTitle('Bem vindo, vamos começar?');
    insertOption({ text: 'Iniciar', click: start });
}
main();

function clearScreen() {
    content.innerHTML = '';
}

function submitFormNewItem(id) {
    const inputValue = document.getElementById('inputNewItem').value;

    addItemIntoList(id, { text: inputValue, status: false });
    openList(id);
}

function changeStatusItemList(idList, idItem) {
    changeStatusItem(idList, idItem);
    openList(idList);
}

function submitFormNewList() {
    const inputValue = document.getElementById('inputNewList').value;

    const id = newList(inputValue);

    openList(id);
}

function checkListAllChecked(list) {
    let result = true;

    list.itens.map(item => {
        if (!item.status) {
            result = false;
        }
    });

    return result;
}