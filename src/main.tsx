import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { RouterProvider } from "react-router-dom";
import Router from './router/index.tsx';
import { Provider } from "react-redux";
import Store from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store }>
      <RouterProvider router={Router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
