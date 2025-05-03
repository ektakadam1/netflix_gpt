import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import {RouterProvider} from 'react-router-dom';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
{ 
    path: '/browse',
    element: <Browse />,

}])
function Body() {
  return (
      <RouterProvider router={appRouter}/>
  )
}

export default Body