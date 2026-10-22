import { NavLink, Outlet } from "react-router";

export default function MainLayout() {

    return (
        <div>
            <header>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/products">Товары</NavLink>
                <NavLink to="/posts">Посты</NavLink>
                <NavLink to="/exchange">Обмен валют</NavLink>
                <NavLink to="/estore">Е-магазин</NavLink>
                <NavLink to="/todos">Список дел</NavLink>
            </header>

            <main><Outlet /></main>

            <footer></footer>
        </div>
    )

}