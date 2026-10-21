import { useEffect, useState } from "react"
import type { Post } from "../types"
import ky from "ky"

export default function Posts() {

    const [posts, setPosts] = useState<Post[]>([])

    // async function getPosts() {
    //     const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const data = (await resp.json()) as Post[]
    //     setPosts(data)
    // }

    async function getPosts() {
        const data = await ky<Post[]>('https://jsonplaceholder.typicode.com/posts').json()
        setPosts(data)
    }

    useEffect(
        () => {
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
        const resp = await ky.post('https://jsonplaceholder.typicode.com/posts', {
            json: {
                title: postTitle,
                body: postBody,
                userId: userId
            }
        }).json()
        console.log(resp)
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
                        </div>
                    ))
                }

            </div>
        </div>

    )

}