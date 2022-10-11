// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import QuizCards from "./QuizCards"; 
import Topics from "./Topics"; 
import Statistis from "./Statistis"; 

import Blog from "./Blog"; 

const Routers = createBrowserRouter([{
    path: '/',
    element: <Main/>,
    errorElement:<ErrorPage/>,

    children:[
        {path:'/', element:<QuizCards/>},
        {path:'/home', element:<QuizCards/>},
        {path:'/topics', element:<Topics/>},
        {path:'/statistis', element:<Statistis/>},
        {path:'/blog', element:<Blog/>}

    ]
}]);

export default Routers;