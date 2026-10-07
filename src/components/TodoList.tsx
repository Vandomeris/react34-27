import { useState } from "react"
import TodoItem from "./TodoItem"

type Todo = {
    id: number,
    title: string,
    completed: boolean
}


export default function TodoList() {

    const [todos, setTodos] = useState<Todo[]>([])

    const [newTodo, setNewTodo] = useState('')

    function addTodo(title: string) {
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos,
                { id: Date.now(), title: title, completed: false }
            ])
            setNewTodo('')
        }
    }


    function toggleTodo(id: number) {

        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )

    }


    function editTodo(id: number, text: string) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = text
                }
                return todo
            })
        )
    }

    function deleteTodo(id: number) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }



    return (
        <div>

            <div>
                <input className="border-b border-amber-500" value={newTodo} onInput={(event) => setNewTodo(event.currentTarget.value)} type="text" placeholder="Введите дело" />
                <button onClick={() => addTodo(newTodo)}>Создать</button>

            </div>
            {
                todos.map(todo => (
                    <TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                ))
            }



            <div className="mt-10">
                <input placeholder="Добавить дело" type="text" />
                <button></button>
            </div>

            <div className="flex items-start gap-x-4">

                <div>
                    <p className="font-bold">Новые</p>
                    <ul>
                        <li>Дело 1</li>
                        <li className="bg-amber-400">Дело 2</li>
                        <li>Дело 3</li>
                    </ul>
                </div>
                <div className="flex flex-col self-center">
                    <button>⬅</button>
                    <button>➡</button>
                </div>
                <div>
                    <p className="font-bold">Завершенные</p>
                    <ul>
                        <li>Дело 1</li>

                    </ul>
                </div>

            </div>

        </div>
    )
}
