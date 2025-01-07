import { Outlet } from "react-router-dom"
export default function Texts() {
    return(
        <>
        <h3>Writings/Notes</h3>

        <ul>
            {/* <li><a href="#/articles/ArticleTemplate">Article Name - Template</a><br/><br/></li> */}

             
            <li><b><a href="#/articles/BashCommands">Useful BASH Commands - 06/06/2024</a></b><br/><br/></li>
            <li><b><a href="#/articles/SQLCommands">Useful SQL Commands - 06/06/2024</a></b></li>
            <li><b><a href="#/articles/MachineLearningTools">Useful ML tools - 01/06/2025</a></b><br/><br/></li>

            </ul>

            <div>
                <Outlet/>
            </div>
            
            </>
    )
}