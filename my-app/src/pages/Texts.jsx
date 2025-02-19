import { Outlet } from "react-router-dom"
export default function Texts() {
    return(
        <>
        <h3>Development journal/notebook</h3>


        {/* <li><a href="#/articles/ArticleTemplate">Article Name - Template</a><br/><br/></li> */}

             
            <b><a href="#/articles/MLTools">Useful Machine Learning Tools - 2024/06/06</a></b><br/><br/>
            <b><a href="#/articles/BashCommands">Useful BASH Commands - 2024/06/06</a></b><br/><br/>
            <b><a href="#/articles/SQLCommands">Useful SQL Commands - 2024/06/06</a></b><br/><br/>



            <div>
                <Outlet/>
            </div>
            
            </>
    )
}