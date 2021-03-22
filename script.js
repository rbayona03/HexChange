const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBTN = document.querySelector('.HexBTN');
const hex = document.querySelector('.Hex');
const bodyBcg = document.querySelector('body');

hexBTN.addEventListener('click', getHex);

function getHex (){
    let hexCol = '#';

    for(let i = 0; i<6; i++){
        let Random = Math.floor(Math.random()*hexNumber.length);
        hexCol += hexNumber[Random];
        console.log(hexCol);
        bodyBcg.style.backgroundColor = hexCol;
        hex.innerHTML = hexCol;
        hexBTN.style.backgroundColor = hexCol;
    }
}
