import { create } from "zustand";
import type { LoginResponse, User } from "../types";
import { api, getToken, removeToken, setToken } from "../api";

interface AuthStoreType {
    user: User | null,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void,
    checkAuth: () => Promise<void>
}

export const useAuthStore = create<AuthStoreType>((set, get) => ({
     user: null,

     checkAuth: async () => {
        
        if(!getToken()){
            set({user: null})
            return
        }

        try{
            const resp = await api.get<User>('/auth/me').json()
            set({user: resp})
        }catch{
            set({user: null})
            removeToken()
        }
     },

     login: async (username, password) => {
        const resp = await api.post<LoginResponse>('/auth/login', {
            json: {
                username: username,
                password: password
            }
        }).json()
        setToken(resp.access_token)
        await get().checkAuth()
     },

     logout: () => {
        set({user: null})
        removeToken()
     }
}))