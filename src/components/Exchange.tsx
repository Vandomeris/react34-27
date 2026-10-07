import { useEffect, useState } from "react"

export default function Exchange() {

    const [rubles, setRubles] = useState<number | null>(null)

    const [valuta, setValuta] = useState('USD')

    const [result, setResult] = useState<string | null>(null)


    useEffect(
        () => {
            if (valuta === "USD") {
                setResult(
                    (rubles / 78).toFixed(2)
                )
            } else if (valuta === 'EUR') {
                setResult(
                    (rubles / 85).toFixed(2)
                )
            }
        },
        [rubles, valuta]
    )

    return (
        <div>
            <h1>Обмен валют</h1>

            <div>
                <input
                    value={rubles}
                    onInput={(e) => setRubles(Number(e.currentTarget.value))}
                    type="number"
                    placeholder="Введите рубли" />

                <select value={valuta} onChange={(e) => setValuta(e.currentTarget.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <p>Вы получите: {result} </p>
            </div>
        </div>
    )

}