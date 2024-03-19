import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Authentication from '../Authentication/Authentication'
import App from '../../App'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../Utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../../Utils/userSlice'
import ErrorPage from '../ErrorPage/ErrorPage'

const Body = () => {

    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
          path: '/',
          element: <Authentication />,
        },
    
        {
          path: '/app',
          element: <App />
        },
        {
          path: '/error',
          element: <ErrorPage/>
        }
      ]); 

      useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
             
            // fetching data from the onAuthStateChanged API and updating the store
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
           
            
          } else {
            // User is signed out

            dispatch(removeUser());   
           
          }
        });

      }, [])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
