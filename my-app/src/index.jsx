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
import './index.css';

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


    ]
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);