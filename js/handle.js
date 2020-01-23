const LOCAL_STORAGE_VARIABLE = 'data-lists';

function newList(nameList) {
    const existData = restoreData();
    console.log(existData);

    let newData = {
        name: nameList,
        itens: []
    };
    existData.push(newData);

    saveData(existData);

    return existData.length - 1;
}

function insertItemIntoList(id, item) {
    const existData = restoreData();

    existData[id].itens.push(item);
}

function restoreList(id) {
    const existData = restoreData();

    return existData[id];
}

function restoreAllLists() {
    return restoreData();
}

function changeStatusItem(idList, idItem) {
    const existData = restoreData();

    existData[idList].itens[idItem].status = !existData[idList].itens[idItem].status;

    saveData(existData);
}

function addItemIntoList(idList, item) {
    const existData = restoreData();

    existData[idList].itens.push(item);

    saveData(existData);
}

function saveData(data) {
    if (typeof data !== 'string') {
        data = JSON.stringify(data);
    }
    localStorage.setItem(LOCAL_STORAGE_VARIABLE, data);
}

function restoreData() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_VARIABLE) || '[]');
}