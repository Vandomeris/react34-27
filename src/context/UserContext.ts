import { createContext, useContext } from "react";

interface UserContextType {
    id: number
    email: string,
    balance: number
    role: 'admin' | 'user',
    logout: () => void
}

export const UserContext = createContext<UserContextType | null>(null)


export function useUser(){
    
    const context = useContext(UserContext)

    return context
}