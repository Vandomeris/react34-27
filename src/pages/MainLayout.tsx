import { NavLink, Outlet } from "react-router";

export default function MainLayout() {

    return (
        <div>
            <header>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/products">Товары</NavLink>
            </header>

            <main><Outlet /></main>

            <footer></footer>
        </div>
    )

}