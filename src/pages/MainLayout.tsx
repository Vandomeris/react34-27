import { Outlet } from "react-router";
import Header from "../components/UI/Header";
import { useAuthStore } from "../stores/authStore";
import { useEffect } from "react";


export default function MainLayout() {

    const checkAuth = useAuthStore(state => state.checkAuth)

    useEffect(() => {
        checkAuth()
    }, [checkAuth])

    return (
        <div>

                <Header />

                <main><Outlet /></main>

                <footer></footer>
            
        </div>
    )

}