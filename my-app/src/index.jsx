import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import ErrorPage from './errorPage';
import Infopage from './pages/Infopage';
import BlackJackGame from './pages/projects/Blackjackgame';
import Projects from './pages/Projects';
import './index.css';
import Updates from './pages/Updates';
import Texts from './pages/Texts';
import ArticleTemplate from './pages/articles/ArticleTemplate';
import BashCommands from './pages/articles/BashCommands';
import SQLCommands from './pages/articles/SQLCommands';
import MLTools from './pages/articles/MLTools'


const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
    errorElement: <ErrorPage />,
    

    children: [
        {path: "/*Infopage", element: <Infopage />,},
        {path: "/*Projects", element: <Projects />,},
        {path: "/*Updates",element: <Updates />,},
        {path:"/*Texts", element: <Texts />,},


        //Articles
        {path:"/*articles/ArticleTemplate", element: <ArticleTemplate />,}, //copy this template
        {path:"/*articles/BashCommands", element: <BashCommands />,},
        {path:"/*articles/SQLCommands", element: <SQLCommands/>,},
        {path:"/*articles/MLTools", element: <MLTools/>,},


        //Projects
        {path:"/*projects/Blackjackgame", element: <BlackJackGame/>,},




    ]
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);