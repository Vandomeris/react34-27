import { useRef, useState } from "react"

export default function TimerPage() {

    const [seconds, setSeconds] = useState(0)

    const timerId = useRef<number | null>(null)

    const input = useRef<HTMLInputElement | null>(null)

    function start() {

        if (timerId.current !== null) return

        timerId.current = setInterval(
            () => {
                setSeconds(prev => prev + 1)
            },
            1000
        )


    }

    function stop() {
        if (timerId.current) {
            clearInterval(timerId.current)
            timerId.current = null
            if (input.current)
                input.current.focus()
        }
    }



    return (
        <div>
            <div className="text-center text-4xl font-bold"> {seconds} секунд</div>
            <div>
                <button onClick={start}>СТарт</button>
                <button onClick={stop}>Стоп</button>
            </div>
            <div>
                <input ref={input} className="input" type="text" placeholder="Запишите время круга" />
            </div>
        </div>
    )


}