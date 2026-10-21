import ky from "ky"
import { useEffect, useState } from "react"
import type { Laptop } from "../types"

export default function EStore() {


    const [laptops, setLaptops] = useState<Laptop[]>([])

    async function getData() {
        const resp = await ky.get<Laptop[]>('http://localhost:3000/laptops').json()
        setLaptops(resp)
    }


    useEffect(() => {
        getData()
    }, [])


    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState(0)
    const [ram, setRam] = useState("")
    const [storage, setStorage] = useState("")


    async function createLaptop(event: React.SubmitEvent) {

        event.preventDefault()

        const resp = await ky.post<Laptop>('http://localhost:3000/laptops', {
            json: {
                "brand": brand,
                "model": model,
                "price": price,
                "specs": {
                    "ram": ram,
                    "storage": storage
                }
            }
        })


        const result = await resp.json()


        if (resp.status === 201) {
            setLaptops([
                ...laptops,
                result
            ])
        }

    }


    return (
        <div>

            <div>
                <form className="flex flex-col max-w-1/2 mx-auto gap-y-5 p-5" onSubmit={(e) => createLaptop(e)}>
                    <input value={brand} onInput={(e) => setBrand(e.currentTarget.value)} type="text" placeholder="Бренд" />
                    <input value={model} onInput={(e) => setModel(e.currentTarget.value)} type="text" placeholder="Модель" />
                    <input value={price} onInput={(e) => setPrice(+e.currentTarget.value)} type="number" placeholder="Цена" />
                    <input value={ram} onInput={(e) => setRam(e.currentTarget.value)} type="number" placeholder="Объем оперативной памяти" />
                    <input value={storage} onInput={(e) => setStorage(e.currentTarget.value)} type="number" placeholder="Объем накопителя" />
                    <button>Создать ноутбук</button>
                </form>
            </div>

            <div className="grid grid-cols-5 gap-5">
                {
                    laptops.map(lap => (
                        <div>
                            <p>{lap.brand} {lap.model}</p>
                            <p>{lap.price}</p>
                            <p>{lap.specs.ram}</p>
                            <p>{lap.specs.storage}</p>
                        </div>
                    ))
                }
            </div>


        </div>
    )

}