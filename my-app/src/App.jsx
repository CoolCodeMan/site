import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>

        <div className="navBar">
        <h2>💻Cool code, man ☀️</h2>

                <ul className="navBarList">

                <li><a href="#/Infopage">❓ Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li><br/>

                <li><a href="#/Projects">👷 Projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li><br/>

                <li> <a href="#/Texts">📖 Texts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li><br/>

                <li><a href="#/Updates">🛠️ Updates &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li><br/>

                </ul>
        </div>


        <div className="contentBox">
            <Outlet />
        </div>

        </>
    );
};