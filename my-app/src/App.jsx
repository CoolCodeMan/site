import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>
        <h1>🦍 My Github Page ☀️</h1>

        <div>
        <ul>

            <li>
                <a href="#/Infopage">Info</a>
            </li>

            <li>
                <a href="#/Blackjackgame">Blackjack Game</a>
            </li>

        </ul>
        </div>


        <div id="contentBox">
            <Outlet />
        </div>

        </>
    );
};