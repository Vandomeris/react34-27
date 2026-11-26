import React, { useState } from "react"
import { useAuthStore } from "../stores/authStore"
import { useNavigate } from "react-router"
export default function LoginPage(){
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const [error, setError] = useState('')
    const login = useAuthStore(state => state.login)
    const navigate = useNavigate()
    async function handleSubmit(e: React.SubmitEvent){
        e.preventDefault()

        try {
            await login(username, password)
            navigate('/')
        }catch{
            setError('Неверный логин или пароль')
        }

    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input value={username} onInput={(e) => setUsername(e.currentTarget.value)} type="text" />
                <input value={password} onInput={(e) => setPassword(e.currentTarget.value)} type="password" />
                <button>Login</button>
            </form>
        </div>
    )
}