import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewsCard from './components/Home/NewsCard.jsx';
import NewsLayOut from './components/Home/NewsLayOut.jsx';
import NewsFinalDetails from './components/Home/NewsFinalDetails.jsx';
import LogIn from './components/Authontication/LogIn.jsx'
import Register from './components/Authontication/Register.jsx';
import AuthProvider from './components/Authontication/AuthProvider.jsx';
import PrivateRoute from './components/Authontication/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children : [

      {
        path : 'category/:id',
        element : <NewsCard></NewsCard>,
        loader : (({params}) => fetch (`https://dragon-news-server-rayhanuddinfarhad.vercel.app/category/${params.id}`))



      }
    ]
  },


  {

    path : 'news',
    element : <PrivateRoute><NewsLayOut></NewsLayOut></PrivateRoute>,
    


    children : [

      {

        path : ':id',
        element : <NewsFinalDetails></NewsFinalDetails>,
        loader : (({params}) => fetch (`https://dragon-news-server-rayhanuddinfarhad.vercel.app/news/${params.id}`))
      }
    ]


  },

  {

    path : '/logIn',
    element  : <LogIn></LogIn>
  },


  {

    path : '/register',
    element : <Register></Register>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
