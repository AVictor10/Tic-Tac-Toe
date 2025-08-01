import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/Circle.png'
import cross_icon from '../Assets/Cross.png'
let data=["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  let[count,setCount]=useState(0);

  let[lock,setLock]=useState(false);
  let[xwins,setXwins]=useState(0);
  let[owins,setOwins]=useState(0);

  let titleRef=useRef(null);
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  let box9=useRef(null);

  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const toggle =(w,num) =>{
    if(lock || data[num] !== "")
    {
      return ;
    }
    if(count%2===0)
    {
      w.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num]="X";
      setCount(++count);
    }
    else
    {
       w.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num]="O";
      setCount(++count);
    }
    checkWin();
  }

  const checkWin = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== "")
    {
      won(data[2]);
    }
    else if(data[3] === data[4] && data[4] === data[5] && data[5] !== "")
    {
      won(data[5]);
    }
    else if(data[6] === data[7] && data[7] === data[8] && data[8] !== "")
    {
      won(data[8]);
    }
    else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "")
    {
      won(data[6]);
    }
    else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "")
    {
      won(data[7]);
    }
    else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "")
    {
      won(data[8]);
    }
    else if(data[0] === data[4] && data[4] === data[8] && data[8] !== "")
    {
      won(data[8]);
    }
    else if(data[2] === data[4] && data[4] === data[6] && data[6] !== "")
    {
      won(data[6]);
    }
  }
  const won =(winner) => {
    setLock(true);
   titleRef.current.innerHTML=`Congratulations:<img src= ${winner === "X"} ? cross_icon: circle_icon`;
   if(winner === "X")
   {
    setXwins(prev=>prev+1);
   }
   else if(winner==="O"){
    setOwins(prev=>prev+1);
   }
  }

  const reset =() => {
    setLock(false);
     data=["", "", "", "", "", "", "", "", ""];
     titleRef.current.innerHTML='Tic Tac Toe in <span>React</span>'
     box_array.map((w) =>{
      w.current.innerHTML=""; 
     }
    )
  }


  return (
    <div className='container'>
        <h1 className="title" ref={titleRef}>Tic-Tac-Toe game in <span>React</span></h1>

        <div className="score-board">
         <p>X Wins: {xwins}</p>
         <p>O Wins: {owins}</p>
       </div>
        <div className="board">
          <div className="row1">
            <div className="boxes" ref={box1} onClick={(w)=> {toggle(w,0)}}></div>
            <div className="boxes" ref={box2} onClick={(w)=> {toggle(w,1)}}></div>
            <div className="boxes" ref={box3} onClick={(w)=> {toggle(w,2)}}></div>
          </div>
          <div className="row2">
            <div className="boxes" ref={box4} onClick={(w)=> {toggle(w,3)}}></div>
            <div className="boxes" ref={box5}onClick={(w)=> {toggle(w,4)}}></div>
            <div className="boxes" ref={box6} onClick={(w)=> {toggle(w,5)}}></div>
          </div>
          <div className="row3">
            <div className="boxes" ref={box7}onClick={(w)=> {toggle(w,6)}}></div>
            <div className="boxes" ref={box8}onClick={(w)=> {toggle(w,7)}}></div>
            <div className="boxes" ref={box9}onClick={(w)=> {toggle(w,8)}}></div>
          </div>
        </div>
        <button className="reset" onClick= {() => {reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe
