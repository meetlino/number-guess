import './Gamepage.css';
import { useState } from 'react';
import Result from './Result';
import { useNavigate } from 'react-router-dom';


 {/* const secNum = Math.floor(Math.random() * 10) + 1; */}

 function secNum (min, max) {
  return Math.floor(Math.random()
      * (max - min + 1)) + min;
};

function Gamepage() {

  const [term, setTerm]= useState("")
  const [score,setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [output, setOutput] = useState("");
  const [attempt, setAttempt] = useState(3)
  const [selected, setSelected] = useState(secNum(1,10))

 
  function handleChange (e)
  {
    setTerm(e.target.value)
    e.preventDefault()
  }
  const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/'); 
    };
  const reset =(e)=>{
    setTerm("")
    setScore(0)
    setCount(0)
    setOutput("")
    setAttempt(3)
    setSelected(secNum(1,10))} 

  {/*const reReset = () => {
    setSelected(secNum(1,10));
  };*/}
  const checkNumber =(e)=>{
    if (Number(term) === selected && count < 3){
      setScore(()=>score+1);
      setOutput("You score 1 point")
      e.preventDefault()
      setSelected(secNum(1,10));

    }
    


   if (Number(term) !== selected && count < 3) {
    setOutput("Try again")
    setCount(count + 1);
    setAttempt(attempt-1);
  } if (Number(term) !== selected && attempt === 1){
    setOutput("turn over")
  }
  };

  return (
    <>
    <div className="container">
      <div className='head'>
        <label htmlFor='term'>GUESS THE NUMBER BETWEEN 1 T0 10</label>
        {/*<p>Total 3 chance</p>*/}

        {/*<p>Total 3 chance to guess</p>*/}
      </div>
      <label className='input'>Enter Number <br></br><br></br>
      <input className='display' id='term' type='number' name='num' value={term} onChange={handleChange}></input></label>
      <div className='head'><p>You are left with {attempt} attempts</p>
      </div>
      <button onClick={checkNumber} className='gamebutton'>Guess!</button>
      

      {/*<Result num={selected} inp = {term}/>*/}
      <p className='head'>Your score: {score} &nbsp;&nbsp;&nbsp; {output}</p>
      <button onClick={handleRedirect} className='gamebutton'>Back to Rules</button>

      {/*<p>{selected}</p>*/}
      <p className='head'>Click below to restart new game</p>
      <button onClick={reset} className='gamebutton'>Start New Game</button>
    </div>
    <div className='copyright'>copyright @Lino</div>
    </>
  );
}

export default Gamepage;


{/* Points to fix 
  1.turn over must come when 0 attempt left ie) 1 step before
  2.if win it must refresh the random value - done successfully but initial value must also refresh*/}

  {/* 
    Change color
    Title of game 
    Rules of game
    Responsive design
    */}