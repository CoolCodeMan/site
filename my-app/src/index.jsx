import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import ErrorPage from './errorPage';
import Infopage from './pages/Infopage';
import BlackJackGame from './pages/Blackjackgame';
import Projects from './pages/Projects';
import './index.css';
import MonkeyPage from './pages/MonkeyPage';
import Updates from './pages/Updates';
import Texts from './pages/Texts';

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
        {
            path: "/*Infopage",
            element: <Infopage />,
            
        },
        {
            path: "/*Blackjackgame",
            element: <BlackJackGame />,
            
        },

        {
            path: "/*Projects",
            element: <Projects />,
            
        },

        {
            path: "/*MonkeyPage",
            element: <MonkeyPage />,
            
        },

        {
            path: "/*Updates",
            element: <Updates />,
            
        },

        {
            path: "/*Texts",
            element: <Texts />,
            
        },




    ]
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);