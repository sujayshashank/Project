const btn=document.getElementById("btnn");
const block=document.getElementById("box");


function randomColor()
{
    let str1="#";
    let str2="0123456789ABCDEF";
    

    for(let i=0;i<6;i++)
    {
        str1=str1+str2[Math.floor(Math.random()*16)]
    }

    return str1;
}

function changeColor()
{

    block.style.backgroundColor=randomColor();
}

