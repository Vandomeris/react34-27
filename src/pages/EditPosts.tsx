import ky from "ky"
import { useState } from "react"
import type { Post } from "../types"

export default function EditPosts(){
    
    const [posts, setPosts] = useState<Post[]>([])

    async function getPosts() {
        const resp = await ky.get<Post[]>('https://jsonplaceholder.typicode.com/posts').json()
        setPosts(resp)
        
    }


    return (
        <div>
            <div>
                <select className="w-1/2 mx-auto block my-5 border border-amber-500">
                    {
                        posts.map(post => (
                            <option value={post.id}>ID - {post.id} - {post.title}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <form className="flex flex-col gap-y-3 max-w-1/2 mx-auto">
                    <input className="border border-amber-500" placeholder="Заголовок поста" type="text" />
                    <textarea className="border border-amber-500" placeholder="Текст поста"></textarea>
                    <button>Edit</button>
                </form>
            </div>
        </div>
    )

}