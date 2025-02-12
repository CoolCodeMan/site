import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>

        <div className="topBar">
        <h2>💻🦍 My Github Page ☀️</h2>

                <a href="#/Infopage" className="topBarLink">❓ Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

                <a href="#/Projects" className="topBarLink">👷 Projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

                 <a href="#/Texts" className="topBarLink">📖 Articles &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

                <a href="#/Updates" className="topBarLink">🛠️ Updates &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                
        </div>
        <br/><br/>


        <div className="outletContent">
            <Outlet />
        </div>

        </>
    );
};