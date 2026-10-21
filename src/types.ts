export interface Post {
    id: number
    userId: number
    title: string
    body: string
}


export interface Laptop {
    "id": string
    "brand": string
    "model": string
    "price": number
    "specs": {
        "ram": string,
        "storage": string
    }
}