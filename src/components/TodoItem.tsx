import { useState } from "react"

type TodoItem = {
    todo: {
        id: number,
        title: string,
        completed: boolean
    },
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
    editTodo: (id: number, text: string) => void,
}


export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }: TodoItem) {

    const [isEditing, setIsEditing] = useState(false)

    function toggleEdit() {
        setIsEditing(!isEditing)
    }

    return (
        <div className="flex gap-x-3 items-center">
            <span>{todo.id}</span>

            {
                isEditing
                    ? (<input value={todo.title} onInput={(e) => editTodo(todo.id, e.currentTarget.value)} type="text" />)
                    : (<span className={todo.completed ? "line-through" : ''}>{todo.title}</span>)
            }



            <input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
            <button onClick={() => deleteTodo(todo.id)}>X</button>
            <button onClick={() => toggleEdit()}>
                {
                    isEditing ? 'Save' : 'Edit'
                }
            </button>
        </div>

    )

}