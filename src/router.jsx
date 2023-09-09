import { createBrowserRouter } from 'react-router-dom'

import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'

const router = createBrowserRouter([
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/',
        element: <Home/>
    },
])

export default router;