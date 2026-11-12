import { Link, NavLink } from "react-router";
import UserInfo from "./UserInfo";

export default function Header() {


    return (
        <header className="flex justify-between items-center p-4">

            <Link className="text-3xl font-bold" to="/">
                LOGO
            </Link>

            <div className="flex gap-x-3">
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/products">Товары</NavLink>
                <NavLink to="/posts">Посты</NavLink>
                <NavLink to="/exchange">Обмен валют</NavLink>
                <NavLink to="/estore">Е-магазин</NavLink>
                <NavLink to="/todos">Список дел</NavLink>
            </div>

            <UserInfo />



        </header>
    )
}