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
    mineCraft.createCloud();
    mineCraft.createRock();
    mineCraft.creategrass();
    mineCraft.createWood();
    mineCraft.createTools();
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
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block ground");
        }
    }
}
mineCraft.creategrass = () => {
    document.querySelector('#c5_2').style.backgroundImage = 'url("./images/trees.jpg")';
    document.querySelector('#c5_2').setAttribute("class", "block grass");
    for (let i = 1; i < 4; i++) {
        document.querySelector(`#c6_${i}`).style.backgroundImage = 'url("./images/trees.jpg")';
        document.querySelector(`#c6_${i}`).setAttribute("class", "block grass");
    }
    for (let j = 2; j < 4; j++) {
        for (let w = 6; w < 9; w++) {
            document.querySelector(`#c${j}_${w}`).style.backgroundImage = 'url("./images/trees.jpg")';
            document.querySelector(`#c${j}_${w}`).setAttribute("class", "block grass");


        }
    }
}
mineCraft.createWood = () => {
    for (let i = 4; i < 7; i++) {
        document.querySelector(`#c${i}_7`).style.backgroundImage = 'url("./images/log.jpg")';
        document.querySelector(`#c${i}_7`).setAttribute("class", "block wood");

    }
}
mineCraft.createCloud = () => {
    document.querySelector('#c1_2').style.backgroundColor = 'white';
    document.querySelector('#c1_2').setAttribute("class", "block cloud");
    for (let i = 2; i < 3; i++) {
        for (let j = 1; j < 4; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundColor = 'white';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block cloud");
        }
    }
}
mineCraft.createRock = () => {
    for (let i = 6; i < 7; i++) {
        for (let j = 5; j < 7; j++) {
            document.querySelector(`#c${i}_${j}`).style.backgroundImage = 'url("./images/rocks.jpg")';
            document.querySelector(`#c${i}_${j}`).setAttribute("class", "block rock");
        }
    }
};
mineCraft.createTools = () => {
    for (let i = 0; i < 3; i++) {
        var divTool = document.createElement('div');
        document.querySelector('.tools').appendChild(divTool);
        divTool.setAttribute('class', 'tool');
        divTool.style.backgroundPosition = 'center';
        divTool.style.backgroundSize = 'cover';
        divTool.style.backgroundImage = `url("./images/${i}.png")`;
    }


}


mineCraft.start();