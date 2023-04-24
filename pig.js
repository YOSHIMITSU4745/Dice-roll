"use strict";

const roll=document.querySelector(".rd");
const newg=document.querySelector(".ng");
const hold=document.querySelector(".hold");
const cs1=document.querySelector(".a1");
const ts1=document.querySelector(".s1");
const cs2=document.querySelector(".a2");
const ts2=document.querySelector(".s2");
const p1=document.querySelector(".p1");
const p2=document.querySelector(".p2");
const p1win=document.querySelector(".p1wins");
const p2win=document.querySelector(".p2wins");
const bl=document.querySelector(".blurr");
const ng2=document.querySelector(".ng2");

var turn=1;
var c1=0,c2=0,t1=0,t2=0;




function change_turn()
{
    if(turn===1)
    {
        turn=2;
        p1.classList.remove("blur");
        p2.classList.add("blur");
    }


    else
    {
        turn=1;
        p2.classList.remove("blur");
        p1.classList.add("blur");
    }
}

p2.classList.remove("blur");
var b=1;






roll.addEventListener("click", function(){

    document.querySelector(".d"+b).classList.add("hide");
    let a=Math.trunc(Math.random()*6)+1;
     b=a;
     
     if(a===1)
     {
        turn===1?cs1.textContent=0:cs2.textContent=0;
        turn===1?c1=0:c2=0;
        
        change_turn();
     }

     else
     {
        if(turn===1)
        {
            c1=c1+a;
            cs1.textContent=c1;
        }
        else
        {
            c2=c2+a; 
            cs2.textContent=c2;
        }
        

     }

    document.querySelector(".d"+a).classList.remove("hide");

})

newg.addEventListener("click", function() {


    c1=0;c2=0;t1=0;t2=0;
    cs1.textContent=0;
    cs2.textContent=0;
    ts1.textContent=0;
    ts2.textContent=0;
   



})


ng2.addEventListener("click", function(){

    c1=0;c2=0;t1=0;t2=0;
    cs1.textContent=0;
    cs2.textContent=0;
    ts1.textContent=0;
    ts2.textContent=0;
    bl.classList.add("hid");   
    p1win.classList.add("hid");
    p2win.classList.add("hid");
    ng2.classList.add("hid");

})


hold.addEventListener("click", function(){

    t1=t1+c1;
    t2=t2+c2;
    ts1.textContent=t1;
    ts2.textContent=t2;
    cs1.textContent=0;
    c1=0;
    cs2.textContent=0;
    c2=0;
    if(t1>=100)
    {
        p1win.classList.remove("hid");
        bl.classList.remove("hid");
        p2win.classList.add("hid");
        ng2.classList.remove("hid");

    }

    else if(t2>=100)
    {
        ng2.classList.remove("hid");
        p2win.classList.remove("hid");
        bl.classList.remove("hid");   
        p1win.classList.add("hid");

    }
    else
    change_turn();

})

