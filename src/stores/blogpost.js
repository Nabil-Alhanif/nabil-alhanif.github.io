import { defineStore } from 'pinia'
import { blogposts } from '@/data/blogposts'

// Utility function to sort posts
function sortPostsByDate(posts) {
	return posts.slice().sort((a, b) => {
		// Convert timestamp into Date object
		const dateA = new Date(a.created_at)
		const dateB = new Date(b.created_at)

		// Sort from newest to oldest
		return dateB - dateA
	})
}

export const useBlogpostStore = defineStore({
	id: 'blogpost',
	state: () => ({
		blogposts: sortPostsByDate(blogposts)
	}),
	getters: {},
	actions: {}
})
