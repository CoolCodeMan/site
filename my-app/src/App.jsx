import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>

        <div id="navBar">
        <h2>💻🦍 My Github Page ☀️</h2>

        <br/><br/><br/>

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
                <a href="#/Texts">Texts</a>
            </li>
            <br/><br/><br/><br/>

            <li>
                <a href="#/Projects">Projects</a>
            </li>

            <br/>

            <li>
                <a href="#/Updates">Site Updates</a>
            </li>
            <br/>
            



            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>







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