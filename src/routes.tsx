import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import MainLayout from './pages/MainLayout'

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'products',
                Component: ProductsPage
            }
        ]
    },
    {
        path: '*',
        element: <div>404!!!!!!!!!!!</div>
    }
])
