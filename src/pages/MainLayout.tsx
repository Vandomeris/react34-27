import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import type { User } from "../types";
import Header from "../components/UI/Header";

export default function MainLayout() {

    const [user, setUser] = useState<User | null>({
        id: 1,
        email: 'someuser@gmail.com',
        balance: 2740,
        role: 'user'
    })


    return (
        <div>
            
            <Header user={user} setUser={setUser} />

            <main><Outlet /></main>

            <footer></footer>
        </div>
    )

}