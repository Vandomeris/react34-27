import { useReadLaterStore } from "../stores/readLaterStore"


export default function ReadLaterPage(){

    const posts = useReadLaterStore(state => state.posts)
    const clearPosts = useReadLaterStore(state => state.clear)
    const removePost = useReadLaterStore(state => state.remove)

    return (
        <div>
            <h1>Посты на почитать потом</h1>

            {
                posts.map(post => (
                    <div>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                ))
            }

        </div>
    )

}