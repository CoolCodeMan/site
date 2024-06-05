import { useEffect, useState} from "react";

export default function BlackJackGame() {


    const [fullDeck,setFullDeck] = useState([["♠ ace" ,1 ,14],["♠ 2" ,2],["♠ 3" ,3],["♠ 4" ,4],["♠ 5" ,5],["♠ 6" ,6],["♠ 7" ,7],
    ["♠ 8" ,8],["♠ 9" ,9],["♠ 10" ,10],["♠ 11" ,11],["♠ 12" ,12],["♠ 13" ,13],["♥ ace" ,1 ,14],["♥ 2" ,2],
    ["♥ 3" ,3],["♥ 4" ,4],["♥ 5" ,5],["♥ 6" ,6],["♥ 7" ,7],["♥ 8" ,8],["♥ 9" ,9],["♥ 10", 10],
    ["♥ 11" ,11],["♥ 12" ,12],["♥ 13" ,13],["♦ ace", 1 ,14],["♦ 2" ,2],["♦ 3" ,3],["♦ 4" ,4],
    ["♦ 5" ,5],["♦ 6" ,6],["♦ 7" ,7],["♦ 8" ,8],["♦ 9" ,9],["♦ 10" ,10],["♦ 11" ,11],["♦ 12" ,12],
    ["♦ 13" ,13],["♣ ace" ,1 ,14],["♣ 2" ,2],["♣ 3" ,3],["♣ 4" ,4],["♣ 5" ,5],["♣ 6" ,6],["♣ 7" ,7],
    ["♣ 8" ,8],["♣ 9" ,9],["♣ 10" ,10],["♣ 11" ,11],["♣ 12" ,12],["♣ 13" ,13]])

    const [deckInPlay, setDeckInPlay] = useState(fullDeck)

    const [playerScore, setPlayerScore] = useState(0);
    const [dealerScore, setDealerScore] = useState(0);
    const [playerAction, setPlayerAction] = useState("");
    const [gameAction, setGameAction] = useState("");
    const [playerStanding, setPlayerStanding] = useState(false);

    const[playerCards, setPlayerCards] = useState([]);


    //Logic for checking if either one went over 21 = LOSE
    function checkIfScoreOverTwentyOne() {
        if((playerScore > 21) && (dealerScore <22)) {
            setGameAction("Dealer wins!");
        }
        else if((playerScore < 22) && (dealerScore > 21)) {
            setGameAction("Player wins!");
        }
        else if((playerScore > 21) && (dealerScore > 21)) {
            setGameAction("BOTH LOSE!");
        }
        else if((21 === playerScore) && ((playerStanding===true)&&(playerScore === dealerScore))) {
            setGameAction("DRAW!");
        }
        else if((21 >= playerScore) && ((playerStanding===true)&&(playerScore < dealerScore))) {
            setGameAction("Dealer wins!");
        }
        else if((playerStanding === true) && (dealerScore > playerScore)) {
            setGameAction("Dealer wins!");
        }

    };


    function dealerLogic() {
        if((playerScore > dealerScore) && (playerScore < 22))
            {dealerHit();}

        else if((playerScore === dealerScore) && (playerScore < 22)) 
            {dealerHit();}

        else if((playerScore < dealerScore) && (dealerScore < 22)) {
            checkIfScoreOverTwentyOne();
        }
        else if((playerStanding === true) && (playerScore >= dealerScore)) {

            while((playerScore >= dealerScore) && (dealerScore < 22)) {
                dealerHit();

            }
        };
    };

    //PLAYER HIT
    function playerHit() {
        if(playerStanding !== true) {
        setPlayerAction("Player hits")
        dealerLogic();
        let card_value = Math.floor(Math.random() * deckInPlay.length) +1;
        setPlayerScore(playerScore + deckInPlay[card_value][1]);
        

        console.log(deckInPlay[card_value][0])
    }

        else{
            dealerLogic();
        }
    };
    useEffect(() => {checkIfScoreOverTwentyOne()}, [playerScore, dealerScore, playerCards]);

    //DEALER HIT
    function dealerHit() {
        let card_value = Math.floor(Math.random() * deckInPlay.length) +1;
        setDealerScore(dealerScore +deckInPlay[card_value][1]);
        checkIfScoreOverTwentyOne();
    };
    useEffect(() => {checkIfScoreOverTwentyOne()}, [playerScore, dealerScore]);

    //STAND
    function playerStand() {
        setPlayerAction("Player stands");
        setPlayerStanding(true);
        dealerLogic();
        checkIfScoreOverTwentyOne();
    };
    useEffect(() => {}, [playerAction, playerScore, dealerScore]);

    //RESTART
    function playerRestart() {
        setPlayerAction("---");
        setGameAction(" ")
        setDealerScore(0);
        setPlayerScore(0);
        setPlayerStanding(false);
        setPlayerCards([])
    };
    useEffect(() => {}, [playerAction])



    return(
        <>
        <h1>BLACKJACK #under construction</h1><h1>🤵</h1>
        <p>🂠🂠</p>
        
        <p>Dealer:</p><p>{dealerScore}</p>
        <p>-{gameAction}</p>
        <h1>&#128116;</h1>
        <p>{playerCards}</p>
        {/*buttons*/}
        <button onClick={playerHit}>HIT</button>&ensp;&ensp;&ensp;
        <button onClick={playerStand}>STAND</button>
        <p>total: {playerScore}</p><p>{playerAction}</p>
        <button onClick={playerRestart}>Reset</button>

        </>
    );


};