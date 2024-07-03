import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomeView.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/AboutView.vue')
		},
		{
			path: '/credits',
			name: 'credits',
			component: () => import('@/views/CreditsView.vue')
		},
		{
			path: '/blogs/:code',
			name: 'blog',
			component: () => import('@/views/BlogView.vue')
		},
		{
			path: '/blogs/example',
			name: 'blog-example',
			component: () => import('@/views/Blogs/BlogExample.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@/views/PageNotFoundView.vue')
		}
	]
})

export default router
