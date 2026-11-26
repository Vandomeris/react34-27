import { Link, NavLink } from "react-router";
import { useAuthStore } from "../../stores/authStore";
export default function UserInfo() {

    const user = useAuthStore(state => state.user)
    const logout = useAuthStore(state => state.logout)

    if (user) {
        return (
            <div className="flex gap-x-4 items-center">

                <Link to="/profile">{user.username}</Link>

                <button onClick={() => logout()}>🚪</button>

            </div>
        )

    }else{

        return (
            <NavLink to="/login">Войти</NavLink>
        )
    }


}