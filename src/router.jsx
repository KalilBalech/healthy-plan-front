import { createBrowserRouter } from 'react-router-dom'

import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import User from './components/User'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/user',
        element: <User/>
    },
])

export default router;