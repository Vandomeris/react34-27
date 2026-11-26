import { create } from "zustand";
import type { Post } from "../types";

interface ReadLaterStore {
    posts: Post[],
    add: (post: Post) => void,
    remove: (id: number) => void,
    clear: () => void
}



export const useReadLaterStore = create<ReadLaterStore>(
    (set) => ({
        posts: [],

        add: (post) => {
            set((state) => {

                const isExists = state.posts.find(item => item.id === post.id)

                if (!isExists) {
                    return {
                        posts: [...state.posts, post]
                    }
                }

                return state


            })
        },

        remove: (id) => {
            set(state => {

                return {
                    posts: state.posts.filter(post => post.id !== id)
                }

            })
        },

        clear: () => set({posts: []})
    })
)