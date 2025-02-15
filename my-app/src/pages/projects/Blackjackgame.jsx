import { useEffect, useState} from "react";

export default function BlackJackGame() {


    const fullDeck = [["♠ ace" , 1], ["♠ 2" , 2], ["♠ 3", 3], ["♠ 4", 4], ["♠ 5", 5], ["♠ 6", 6], ["♠ 7", 7],
    ["♠ 8", 8], ["♠ 9", 9], ["♠ 10", 10], ["♠ 11", 11], ["♠ 12", 12], ["♠ 13", 13], ["♥ ace", 1], ["♥ 2", 2],
    ["♥ 3" ,3],["♥ 4" ,4],["♥ 5" ,5],["♥ 6" ,6],["♥ 7" ,7],["♥ 8" ,8],["♥ 9" ,9],["♥ 10", 10],
    ["♥ 11" ,11],["♥ 12" ,12],["♥ 13" ,13],["♦ ace", 1],["♦ 2" ,2],["♦ 3" ,3],["♦ 4" ,4],
    ["♦ 5" ,5],["♦ 6" ,6],["♦ 7" ,7],["♦ 8" ,8],["♦ 9" ,9],["♦ 10" ,10],["♦ 11" ,11],["♦ 12" ,12],
    ["♦ 13" ,13],["♣ ace" ,1],["♣ 2" ,2],["♣ 3" ,3],["♣ 4" ,4],["♣ 5" ,5],["♣ 6" ,6],["♣ 7" ,7],
    ["♣ 8" ,8],["♣ 9" ,9],["♣ 10" ,10],["♣ 11" ,11],["♣ 12" ,12],["♣ 13" ,13]]

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
            document.getElementById("hitButton").disabled = true;
            document.getElementById("standButton").disabled = true;

        }
        else if((playerScore < 22) && (dealerScore > 21)) {
            setGameAction("Player wins!");
            document.getElementById("hitButton").disabled = true;
            document.getElementById("standButton").disabled = true;
        }
        else if((playerScore > 21) && (dealerScore > 21)) {
            setGameAction("BOTH LOSE!");
            document.getElementById("hitButton").disabled = true;
            document.getElementById("standButton").disabled = true;
        }
        else if((21 === playerScore) && ((playerStanding===true)&&(playerScore === dealerScore))) {
            setGameAction("DRAW!");
            document.getElementById("hitButton").disabled = true;
            document.getElementById("standButton").disabled = true;
        }
        else if((21 >= playerScore) && ((playerStanding===true)&&(playerScore < dealerScore))) {
            setGameAction("Dealer wins!");
            document.getElementById("hitButton").disabled = true;
            document.getElementById("standButton").disabled = true;
        }
        else if((playerStanding === true) && (dealerScore > playerScore)) {
            setGameAction("Dealer wins!");
            document.getElementById("hitButton").disabled = true;
            document.getElementById("standButton").disabled = true;
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
        setPlayerCards([]);
        setDeckInPlay(fullDeck);
        document.getElementById("hitButton").disabled = false;
        document.getElementById("standButton").disabled = false;
    };
    useEffect(() => {}, [playerAction])



    return(
        <>
        <div className="Blackjack">

        <br/>
        <a href="#/Projects"> ← Back</a>

        <h1>BLACKJACK</h1><h1>🤵</h1>
        <p>🂠🂠</p>
        
        <p>Dealer:</p><p>{dealerScore}</p>
        <p>-{gameAction}</p>
        <h1>&#128116;</h1>
        <p>{playerCards}</p>
        {/*buttons*/}
        <button id="hitButton" onClick={playerHit}>HIT</button>&ensp;&ensp;&ensp;
        <button id="standButton" onClick={playerStand}>STAND</button>
        <p>total: {playerScore}</p><p>{playerAction}</p>
        <button onClick={playerRestart}>Reset</button>

        </div>
        </>
    );


};