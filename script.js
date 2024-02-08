let first=document.querySelector('#first');
let second=document.querySelector('#second');
let third=document.querySelector('#third');
let fourth=document.querySelector('#fourth');
let fifth=document.querySelector('#fifth');
let sixth=document.querySelector('#sixth');
let seventh=document.querySelector('#seventh');
let eighth=document.querySelector('#eighth');
let nineth=document.querySelector('#nineth');
let buttplays=document.querySelectorAll('button')
let i=1;
let arr1,arr2,arr3;
buttplays.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(i%2===0) button.textContent='X';
        else button.textContent='O';
        console.log(button.textContent,[first.textContent])
        i++;
        arr1=[first.textContent,second.textContent,third.textContent];
        arr2=[fourth.textContent,fifth.textContent,sixth.textContent];
        arr3=[seventh.textContent,eighth.textContent,nineth.textContent];
        return arr1,arr2,arr3;
    })
    return arr1,arr2,arr3;
})
if(arr1[0]==='O' && arr1[1]==='O' && arr1[2]==='O') console.log('Player 1 won')
else if(arr1[0]==='X' && arr1[1]==='X' && arr1[2]==='X') console.log('Player 2 won')
else if(arr1[0]==='X' && arr2[0]==='X' && arr3[0]==='X') console.log('Player 2 won')
else if(arr1[0]==='O' && arr2[0]==='O' && arr3[0]==='O') console.log('Player 1 won')
else if(arr1[0]==='X' && arr2[0]==='X' && arr3[0]==='X') console.log('Player 2 won')
else if(arr1[0]==='X' && arr2[1]==='X' && arr3[2]==='X') console.log('Player 2 won')
else if(arr1[0]==='O' && arr2[1]==='O' && arr3[2]==='O') console.log('Player 1 won')
else if(arr1[2]==='X' && arr2[1]==='X' && arr3[0]==='X') console.log('Player 2 won')
else if(arr2[2]==='X' && arr2[1]==='X' && arr2[0]==='X') console.log('Player 2 won')
else if(arr2[2]==='O' && arr2[1]==='O' && arr2[0]==='O') console.log('Player 1 won')
else if(arr3[2]==='X' && arr3[1]==='X' && arr3[0]==='X') console.log('Player 2 won')
else if(arr3[2]==='O' && arr3[1]==='O' && arr3[0]==='O') console.log('Player 1 won')
else if(arr1[2]==='O' && arr2[2]==='O' && arr3[3]==='O') console.log('Player 1 won')
else if(arr1[2]==='X' && arr2[2]==='X' && arr3[3]==='X') console.log('Player 2 won')
else if(arr1[1]==='O'&& arr2[1]==='O' && arr3[1]==='O') console.log('Player 1 won')
else if(arr1[1]==='X'&& arr2[1]==='X' && arr3[1]==='X') console.log('Player 2 won')
else console.log('It\'s a draw')
