import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Authentication from '../Authentication/Authentication'
import App from '../../App'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
          path: '/',
          element: <Authentication />,
        },
    
        {
          path: '/app',
          element: <App />
        },
      ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
