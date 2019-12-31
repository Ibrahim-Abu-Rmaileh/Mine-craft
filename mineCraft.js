const mineCraft = {};
mineCraft.mapArray = [
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
mineCraft.start = () =>{
    mineCraft.createDiv();
}
mineCraft.createDiv = () =>{
    for (let i = 0; i < mineCraft.mapArray.length; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        document.querySelector('.map').appendChild(row);
        for (let j = 0; j < 10; j++) {
            // console.log(mapArray);
    
            let block = document.createElement('div');
            block.setAttribute('class', 'block');
            mineCraft.mapArray[i].push(j);
            block.setAttribute('id', "c" + i + "_" + j);
            row.appendChild(block);
        }
    }

}

mineCraft.start();
