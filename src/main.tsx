import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Login } from './pages/Login/index.js';
import { Chat } from './pages/Chat';

import { startMirage } from './mocks/miragejs/index.js';

import './index.css'

if(import.meta.env.DEV) {
  startMirage();
} else {
  console.log('Enviroment: ', import.meta.env);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <Chat />,
  }
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
