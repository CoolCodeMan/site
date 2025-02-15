import { Outlet } from "react-router-dom";
export default function App() {

    return(
        <>
        <div className="topBar">
        <h1>🤖 CoolCodeMan's Website</h1>

                <button><a href="#/Infopage" className="topBarLink" >❓Info</a></button>&nbsp;&nbsp;

                <button><a href="#/Projects" className="topBarLink">👷Projects</a></button>&nbsp;&nbsp;

                <button><a href="#/Texts" className="topBarLink">📖Articles</a></button>&nbsp;&nbsp;

                <button><a href="#/Updates" className="topBarLink">🛠️Updates</a></button>&nbsp;&nbsp;
                <br/>
                
        </div>

        <div className="outletContent">
            <Outlet />
        </div>

        </>
    );
};