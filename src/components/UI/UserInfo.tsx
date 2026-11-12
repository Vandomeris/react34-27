import { Link, NavLink } from "react-router";
import type { User } from "../../types";

export default function UserInfo({ user, setUser }: { user: User | null, setUser: any }) {

    if (user) {
        return (
            <div className="flex gap-x-4 items-center">

                <div>
                    <button>🔃</button>
                    <span>Баланс: {user.balance}$</span>
                </div>

                <Link to="/profile">{user.email}</Link>

                <button onClick={() => setUser(null)}>🚪</button>

            </div>
        )

    }else{

        return (
            <NavLink to="/login">Войти</NavLink>
        )
    }


}