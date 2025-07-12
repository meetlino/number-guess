import { useNavigate } from 'react-router-dom';
import './Home.css';
import { GiAbstract027 } from "react-icons/gi";
import { TiTickOutline } from "react-icons/ti";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Home(){

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/gamepage'); 
    };

    return(
        <>
        <div className='container' style={{backgroundColor: "orange"}}>
        <div className='head'>
        <h1>GUESS THE NUMBER GAME</h1>
        <p>Hi Player!</p>
            <p>Can you guess the exact matching number?</p>
        <ul>
        <p>RULES TO FOLLOW</p>

            <li>  Single-player game with 3 Chances</li>
            <li>  No Time limit</li>
            <li>  Correct Guess = 1 point (Chance remains same)</li>
            <li>  Wrong Guess = 0 point (Chance decreases by 1)</li>
        </ul>
        </div>
        </div>
        <h1 style={{textAlign: "center"}} className='aim'><b>Aim: </b> Score the highest points by guessing the randomly generated number within 3 Chances</h1>
        <button onClick={handleRedirect} className='homeButton'>Start Game</button>

        <div className='copyright'>copyright @Lino</div>
        </>
    )
}

export default Home;