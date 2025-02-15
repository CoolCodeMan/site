import { useState } from "react";
import { Outlet } from "react-router-dom";
import Infopage from './pages/Infopage';

export default function App() {

    const [clicked, setClicked] = useState(0);

    if(clicked === 0) {
        return(

            <>
            <div className="topBar">
            <h1>🤖 CoolCodeMan's Website</h1>

                    <button><a href="#/Infopage" className="topBarLink" onClick={() => {setClicked(1)}} >❓Info</a></button>&nbsp;&nbsp;

                    <button><a href="#/Projects" className="topBarLink" onClick={() => {setClicked(1)}}>👷Projects</a></button>&nbsp;&nbsp;

                    <button><a href="#/Texts" className="topBarLink" onClick={() => {setClicked(1)}}>📖Articles</a></button>&nbsp;&nbsp;

                    <button><a href="#/Updates" className="topBarLink" onClick={() => {setClicked(1)}}>🛠️Updates</a></button>&nbsp;&nbsp;
                    <br/>
                    
            </div>
            

            <div className="outletContent">
                <Infopage/>                
            </div>

            </>
        )
            

        
    } 


    else {
        return(
            <>
            <div className="topBar">
            <h1>🤖 CoolCodeMan's Website</h1>

                    <button><a href="#/Infopage" className="topBarLink" onClick={() => {setClicked(1)}} >❓Info</a></button>&nbsp;&nbsp;

                    <button><a href="#/Projects" className="topBarLink" onClick={() => {setClicked(1)}}>👷Projects</a></button>&nbsp;&nbsp;

                    <button><a href="#/Texts" className="topBarLink" onClick={() => {setClicked(1)}}>📖Articles</a></button>&nbsp;&nbsp;

                    <button><a href="#/Updates" className="topBarLink" onClick={() => {setClicked(1)}}>🛠️Updates</a></button>&nbsp;&nbsp;
                    <br/>
                    
            </div>
            

            <div className="outletContent">
                <Outlet />
            </div>

            </>
            ); 
        }
};