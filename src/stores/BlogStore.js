import { defineStore } from 'pinia'
import { blogposts } from '@/data/blogposts'

// Utility function to sort posts
function sortPostsByDate(posts) {
	return posts.slice().sort((a, b) => {
		// Convert timestamp into Date object
		const dateA = new Date(a.createdAt)
		const dateB = new Date(b.createdAt)

		// Sort from newest to oldest
		return dateB - dateA
	})
}

export const useBlogStore = defineStore({
	id: 'blog',
	state: () => ({
		posts: sortPostsByDate(blogposts)
	}),
	getters: {
		getPostByTitle: (state) => (code) => {
			return state.posts.find((post) => post.code === code)
		}
	},
	actions: {}
})
