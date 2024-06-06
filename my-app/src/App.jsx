import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>

        <div id="navBar">
        <h2 >💻🦍 My Github Page ☀️</h2>

            <br/><br/>
                <a href="#/Infopage">Info</a>
                <br/><br/>
                <a href="#/Projects">Projects</a>
            <br/><br/>
                <a href="#/Texts">Texts</a>

            <br/><br/>
                <a href="#/Updates">Updates</a>
           
            <br/><br/><br/><br/>
                <a href="#/MonkeyPage">Mystery???</a>



        </div>


        <div id="contentBox">
            <Outlet />
        </div>

        </>
    );
};