import ky from "ky";

const TOKEN_KEY = 'token'

export function getToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY)
}



export const api = ky.create({
    baseUrl: 'http://127.0.0.1:8000',
    hooks: {
        beforeRequest: [
            ( {request} ) => {
                const token = getToken()

                if(token){
                    request.headers.set('Authorization', `Bearer ${token}`)
                }
            }
        ]
    }
})