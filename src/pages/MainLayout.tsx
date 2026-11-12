import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import type { User } from "../types";
import Header from "../components/UI/Header";
import { UserContext } from "../context/UserContext";


export default function MainLayout() {

    const [user, setUser] = useState<User | null>({
        id: 1,
        email: 'someuser@gmail.com',
        balance: 2740,
        role: 'admin'
    })


    return (
        <div>
            <UserContext.Provider value={user ? {
                ...user,
                logout: () => setUser(null),
            }: null}>

                <Header />

                <main><Outlet /></main>

                <footer></footer>

            </UserContext.Provider>
        </div>
    )

}