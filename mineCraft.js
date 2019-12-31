

var mapArray=[[],[],[],[],[],[],[],[],[],[]];

for (let i = 0; i < mapArray.length; i++) {
    let row = document.createElement('div');
    row.setAttribute('class','row');
    document.querySelector('.map').appendChild(row);
    for (let j = 0; j < 10; j++) {
        let block=document.createElement('div');
        block.setAttribute('class','block');
        block.setAttribute('id',`"${mapArray[i][j]}"`);
        row.appendChild(block);

        
    }
    


    
}

// for (let i = 10; i >8; i--){
//     for (let j = 0; j < 10; j++) {
//         let block=document.createElement('div');
//         block.setAttribute('class','block2');
//         row.appendChild(block);
        
//     }
    
// }   