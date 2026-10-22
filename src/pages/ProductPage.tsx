import ky from "ky"
import { useState } from "react"
import { useParams } from "react-router"
import type { Laptop } from "../types"

export default function ProductPage() {

    const [product, setProduct] = useState<Laptop | null>(null)

    const params = useParams()

    console.log(params)

    async function getProduct() {
        const resp = await ky.get<Laptop>(`http://localhost:3000/laptops/${params.id}`).json()
        setProduct(resp)
    }

    return (
        <div>
            Карточка товара
        </div>
    )

}