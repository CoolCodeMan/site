import { Link, Outlet } from "react-router-dom"
export default function App(){
    return(
        <>
        <p>My Github Page</p>

        <Link to={"infoPage"}>Infopage</Link>

        <div>
            <Outlet></Outlet>
        </div>

        </>
    )
}