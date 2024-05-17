let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#re');
// console.log(boxes, reset);
let turn = true //playerO-true or playerX-false
let winPat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];//win patterns

//for boxex to react when players click alternatively
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('clicked');
        if(turn){ //playerO
            box.innerText = 'O';
            turn = false;
        }else{ //playerX
            box.innerText = 'X';
            turn = true;
        }
        box.style.backgroundColor = 'darkgrey';
        box.style.color = 'black';
        box.disabled = true;
        winner();
    });
});

let p = document.querySelector('p'); //accessing p tag
let h1 = document.querySelector('h1'); //accessing h1 tag

//winner function
const winner = ()=>{
    let pat1, pat2, pat3;
    for(let i of winPat){
        pat1 = (boxes[i[0]]).innerText;
        pat2 = (boxes[i[1]]).innerText;
        pat3 = (boxes[i[2]]).innerText;
        console.log(i[0],i[1],i[2]);
        console.log(pat1,pat2,pat3);

        if(pat1!=='' && pat2!=='' && pat3!==''){
            if(pat1===pat2 && pat2===pat3){
                boxes.forEach((box)=>{
                    box.disabled = true;
                });
                p.innerText = `Winner ${pat1}`;
                p.style.visibility = 'visible';
                h1.innerText = '';
            }
        }
    }
};

//reset the game
reset.addEventListener('click', ()=>{
    boxes.forEach((box)=>{
        box.innerText = '';
        box.style.backgroundColor = '	#F0F0F0';
        box.style.borderWidth = '0.5px';
        turn = true;
        box.disabled = false;
        p.innerText = '';
        h1.innerText = 'Tic Tac Toe';
    });
});