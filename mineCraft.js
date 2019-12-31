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
mineCraft.start = () => {
    mineCraft.createDiv();
    mineCraft.createGround();
}
mineCraft.createDiv = () => {
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
mineCraft.createGround = () => {
    for (let i = 7; i < 10; i++) {
        for (let j = 0; j < mineCraft.mapArray[i].length; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundImage = 'url("./images/dirt.jpg")';
        }
    }
}


mineCraft.start();
