import { Outlet, Link } from "react-router-dom"
export default function Texts() {
    return(
        <>
        <h3>Articles</h3>
            
            <a href="#/articles/ArticleTemplate">Article Name - Template</a><br/><br/>


            <a href="#/articles/BashCommands">Useful BASH Commands - 2024/06/06</a><br/><br/>
            <a href="#/articles/SQLCommands">Useful SQL Commands - 2024/06/06</a>


            <div>
                <Outlet/>
            </div>
            
            </>
    )
}