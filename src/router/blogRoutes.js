export default [
	{
		path: '/blogs/example',
		name: 'blog-example',
		component: () => import('@/views/Blogs/BlogExample.vue')
	},
	{
		path: '/blogs/tristan_belajar_morin',
		name: 'blog-tristan_belajar_morin',
		component: () => import('@/views/Blogs/TristanBelajarMorin.vue')
	},
	{
		path: '/blogs/menjaga_kesehatan_dalam_pandemi',
		name: 'blog-menjaga_kesehatan_dalam_pandemi',
		component: () => import('@/views/Blogs/MenjagaKesehatanDalamPandemi.vue')
	}
]
