import ky from "ky"
import { useCallback, useEffect, useState } from "react"
import type { Post } from "../types"

export default function EditPosts() {

    const [selectedPost, setSelectedPost] = useState<number>(0)
    const [singlePost, setSinglePost] = useState<Post | null>(null)

    const [posts, setPosts] = useState<Post[]>([])

    async function getAllPosts() {
        const resp = await ky.get<Post[]>('https://jsonplaceholder.typicode.com/posts').json()
        setPosts(resp)
    }

    useEffect(
        () => {
            getAllPosts()

        },
        []
    )
    
    const getSinglePost = useCallback(
        async () => {
            const resp = await ky.get<Post>(`https://jsonplaceholder.typicode.com/posts/${selectedPost}`).json()
            setSinglePost(resp)
        },
        [selectedPost]
    )


    useEffect(
        () => {
            getSinglePost()
        },
        [getSinglePost]
    )


    return (
        <div>
            <div>
                <select value={selectedPost} onChange={(e) => setSelectedPost(Number(e.currentTarget.value))} className="w-1/2 mx-auto block my-5 border border-amber-500">
                    {
                        posts.map(post => (
                            <option value={post.id}>ID - {post.id} - {post.title}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <form className="flex flex-col gap-y-3 max-w-1/2 mx-auto">
                    <input defaultValue={singlePost?.title ?? ''}  className="border border-amber-500" placeholder="Заголовок поста" type="text" />
                    <textarea defaultValue={singlePost?.body ?? ''} className="border border-amber-500" placeholder="Текст поста"></textarea>
                    <button>Edit</button>
                </form>
            </div>
        </div>
    )

}