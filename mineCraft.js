var mapArray = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

for (let i = 0; i < mapArray.length; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    document.querySelector('.map').appendChild(row);
    for (let j = 0; j < 10; j++) {
        

        let block = document.createElement('div');
        block.setAttribute('class', 'block');
        mapArray[i].push(j);
        block.setAttribute('id', "c" + i + "_" + j);
        row.appendChild(block);


    }




}