import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>
        <div><h1><a href="/">My Github Page</a></h1></div>


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