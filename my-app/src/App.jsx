import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>

        <div id="navBar">
        <h1>🦍 My Github Page ☀️</h1>

        <ul>

            <li>
                <a href="#/Infopage">Info</a>
            </li>
            <br/>

            <li>
                <a href="#/Blackjackgame">Blackjack Game</a>
            </li>
            <br/>

            <li>
                <a href="#/Projects">Projects</a>
            </li>
            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>








            <li>
                <a href="#/MonkeyPage">An AI made picture of a literal monkey on a computer</a>
            </li>



        </ul>
        </div>


        <div id="contentBox">
            <Outlet />
        </div>

        </>
    );
};