import { Link, NavLink } from "react-router";
import { useUser } from "../../context/UserContext";
export default function UserInfo() {

    const user = useUser()
    if (user) {
        return (
            <div className="flex gap-x-4 items-center">

                <div>
                    <button>🔃</button>
                    <span>Баланс: {user.balance}$</span>
                </div>

                <Link to="/profile">{user.email}</Link>

                <button onClick={() => user.logout()}>🚪</button>

            </div>
        )

    }else{

        return (
            <NavLink to="/login">Войти</NavLink>
        )
    }


}