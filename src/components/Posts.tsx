import { useEffect, useState } from "react"
import type { Post } from "../types"
import ky, { isHTTPError, isKyError } from "ky"
import { api } from "../api"
import { useReadLaterStore } from "../stores/readLaterStore"



export default function Posts() {

    const [posts, setPosts] = useState<Post[]>([])
    const [pending, setPending] = useState(true)
    const [error, setError] = useState<string | null>(null)


    const addPosts = useReadLaterStore(state => state.add)


    useEffect(
        () => {

            async function getPosts() {

                try {
                    const data = await api.get<Post[]>('/posts').json()
                    setPosts(data)
                } catch (error) {
                    if(isKyError(error)){
                        setError(error.message)
                    }
                } finally {
                    setPending(false)
                }



            }

            getPosts()

        },
        []
    )


    const [showForm, setShowForm] = useState(false)

    const [userId, setUserId] = useState(0)
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')


    async function handleSubmit(event: React.SubmitEvent) {
        event.preventDefault()
        const resp = await api.post('/posts', {
            json: {
                title: postTitle,
                body: postBody,
                userId: userId
            }
        }).json()
        console.log(resp)
    }


    if (pending) {
        return (
            <div>
                Идет загрузка.....
            </div>
        )
    }


    if(error){
        return (
            <div>
                При выполнении запроса произошла ошибка:
                <p>{error}</p>
            </div>
        )
    }


    return (
        <div>
            <button
                onClick={() => setShowForm(!showForm)}
                className="bg-amber-400 py-2 px-4">{showForm ? "Отмена" : "Создать пост"}</button>
            <div>

                {
                    showForm && (
                        <form onSubmit={(event) => handleSubmit(event)}>

                            <input value={userId} onInput={(e) => setUserId(Number(e.currentTarget.value))} type="number" placeholder="User ID" />
                            <input value={postTitle} onInput={(e) => setPostTitle(e.currentTarget.value)} type="text" placeholder="Post Title" />

                            <textarea value={postBody} onInput={(e) => setPostBody(e.currentTarget.value)} placeholder="Post Body"></textarea>
                            <button>Создать</button>

                        </form>
                    )
                }
            </div>


            <div className="grid grid-cols-5 gap-5">

                {
                    posts.map(post => (
                        <div className="p-5 border border-blue-500">
                            <p> {post.title} </p>
                            <p> {post.body} </p>
                            <button onClick={() => addPosts(post)} className="py-1 px-2 bg-pink-300">Читать позже</button>
                        </div>
                    ))
                }

            </div>
        </div>

    )

}