import { useMemo, useState } from "react"

function fibonacciCalc(n: number):  number{

    if(n <= 1) return n

    return fibonacciCalc(n-1) + fibonacciCalc(n - 2)

}

export default function FibonacciCalcPage(){

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const [number, setNumber] = useState(5)

    const result: number = useMemo(
        () => fibonacciCalc(number),
        [number]
    )

    function changeTheme(){
        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    return (
        <div className={theme === 'dark' ? 'bg-gray-700 text-white' : ''}>
            <input value={number} onChange={(e) => setNumber(Number(e.currentTarget.value))} type="number" />
            <p>Вывод: {result}  </p>

            <button onClick={changeTheme}>Сменить тему</button>
        </div>
    )

}