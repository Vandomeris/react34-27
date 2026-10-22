import { createBrowserRouter, redirect } from 'react-router'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import MainLayout from './pages/MainLayout'
import PostsPage from './pages/PostsPage'
import TodosPage from './pages/TodosPage'
import EStore from './components/EStore'
import ExchangePage from './pages/ExchangePage'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'

export const router = createBrowserRouter([
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
                Component: ProductsPage,
            },
            {
                path: 'posts',
                Component: PostsPage,
            },
            {
                path: 'todos',
                Component: TodosPage,
            },
            {
                path: 'estore',
                Component: EStore,
            },
            {
                path: 'exchange',
                Component: ExchangePage,
            },
            {
                path: 'product/:id',
                Component: ProductPage
            },
            {
                path: 'profile',
                Component: ProfilePage,
                middleware: [authMiddleware]
            }
        ]
    },
    {
        path: '*',
        element: <div>404!!!!!!!!!!!</div>
    }
])



function authMiddleware() {
    const token = localStorage.getItem('token')

    if (!token) {
        throw redirect('/')
    }
}