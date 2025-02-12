import { Outlet } from "react-router-dom";
export default function App() {
    return(
        <>

        <div className="topBar">
        <h1>🤖 Coolcodeman's Website</h1>

                <a href="#/Infopage" className="topBarLink">❓Info</a>&nbsp;&nbsp;

                <a href="#/Projects" className="topBarLink">👷Projects</a>&nbsp;&nbsp;

                 <a href="#/Texts" className="topBarLink">📖Articles</a>&nbsp;&nbsp;

                <a href="#/Updates" className="topBarLink">🛠️Updates </a>&nbsp;&nbsp;

                <br/>
                
        </div>



        <div className="outletContent">
            <Outlet />
        </div>

        </>
    );
};