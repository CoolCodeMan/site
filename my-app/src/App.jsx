import { useState } from "react";
import { Outlet } from "react-router-dom";
import Infopage from './pages/Infopage';

export default function App() {

    const [clicked, setClicked] = useState(0);

    const ButtonPress = () => {
        setClicked(1);
        window.scroll(0, 0)

    }

    if(clicked === 0) {
        return(

            <>
            <div className="topBar">
            <h1>🤖 CoolCodeMan's Website</h1>

                    <button className="topBarButton"><a href="#/Infopage" className="topBarLink" onClick={ButtonPress} >❓Info</a></button>&nbsp;&nbsp;

                    <button><a href="#/Projects" className="topBarLink" onClick={ButtonPress}>👷Projects</a></button>&nbsp;&nbsp;

                    <button><a href="#/Texts" className="topBarLink" onClick={ButtonPress}>📖Articles</a></button>&nbsp;&nbsp;

                    <button><a href="#/Updates" className="topBarLink" onClick={ButtonPress}>🛠️Updates</a></button>&nbsp;&nbsp;
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

                    <button className="topBarButton"><a href="#/Infopage" className="topBarLink" onClick={ButtonPress} >❓Info</a></button>&nbsp;&nbsp;

                    <button><a href="#/Projects" className="topBarLink" onClick={ButtonPress}>👷Projects</a></button>&nbsp;&nbsp;

                    <button><a href="#/Texts" className="topBarLink" onClick={ButtonPress}>📖Articles</a></button>&nbsp;&nbsp;

                    <button><a href="#/Updates" className="topBarLink" onClick={ButtonPress}>🛠️Updates</a></button>&nbsp;&nbsp;
                    <br/>
                    
            </div>
            

            <div className="outletContent">
                <Outlet />
            </div>

            </>
            ); 
        }
};