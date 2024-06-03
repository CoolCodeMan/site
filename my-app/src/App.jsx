import { Outlet, Link } from "react-router-dom"
export default function App() {
    return(
        <>        
        
        <p>Under work</p>

        <Link to={'Test/'}>Test</Link>

        <div><Outlet/></div>
    </>
    )
};