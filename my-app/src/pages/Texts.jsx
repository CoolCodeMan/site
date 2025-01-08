import { Outlet } from "react-router-dom"
export default function Texts() {
    return(
        <>
        <h3>Texts/Notes</h3>

        <ul>
            {/* <li><a href="#/articles/ArticleTemplate">Article Name - Template</a><br/><br/></li> */}

             
            <li><b><a href="#/articles/MLTools">Useful Machine Learning Tools - 2024/06/06</a></b><br/><br/></li>
            <li><b><a href="#/articles/BashCommands">Useful BASH Commands - 2024/06/06</a></b><br/><br/></li>
            <li><b><a href="#/articles/SQLCommands">Useful SQL Commands - 2024/06/06</a></b></li>

            </ul>

            <div>
                <Outlet/>
            </div>
            
            </>
    )
}