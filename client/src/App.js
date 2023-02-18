import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageNotFound , Username , Profile , Password , Recovery , Register , Reset } from './components'

/* root routes */
const router = createBrowserRouter([
    {
        path : "/",
        element : <Username />
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/password",
        element : <Password />
    },
    {
        path : "/profile",
        element : <Profile />
    },
    {
        path : "/recovery",
        element : <Recovery />
    },
    {
        path : "/reset",
        element : <Reset />
    },
    {
        // This path will specify that there is any invalid request then show the page not found component
        path : "*",
        element : <PageNotFound />
    },
])

const App = () => {
    return (
        <main>
            <RouterProvider router={router}>

            </RouterProvider>
        </main>
    )
}

export default App