import { createRouter, createWebHistory } from 'vue-router'

import blogRoutes from '@/router/blogRoutes'

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
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@/views/PageNotFoundView.vue')
		},
		...blogRoutes
	]
})

export default router
