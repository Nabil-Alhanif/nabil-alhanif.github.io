<template>
	<article
		class="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
	>
		<div class="mb-5 flex items-center justify-between text-gray-500">
			<!-- Article Badge -->
			<span :class="badgeClass">
				<BadgeArticleIcon v-if="blogType === 'Article'" class="mr-1 h-3 w-3" />
				<BadgeTutorialIcon v-else-if="blogType === 'Tutorial'" class="mr-1 h-3 w-3" />
				<BadgeUnknownIcon v-else class="mr-1 h-3 w-3" />

				{{ blogType }}
			</span>

			<span class="text-sm">{{ getFormattedDate }}</span>
		</div>
		<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			<RouterLink :to="blog.url">{{ blog.title }}</RouterLink>
		</h2>
		<p class="mb-5 font-light text-gray-500 dark:text-gray-400">
			{{ blog.preview }}
		</p>
		<div class="flex items-center justify-between">
			<!-- Avatar -->
			<div class="flex items-center space-x-4">
				<div class="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
					<UserAvatarIcon class="absolute -left-1 h-12 w-12 text-gray-400" />
				</div>
				<span class="font-medium dark:text-white">{{ blog.author }}</span>
			</div>
			<RouterLink
				:to="blog.url"
				class="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
			>
				Read more
				<ReadMoreIcon class="ml-2 h-4 w-4" />
			</RouterLink>
		</div>
	</article>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { formatDistanceToNow, format } from 'date-fns'
import { RouterLink } from 'vue-router'

import UserAvatarIcon from '@/components/icons/UserAvatarIcon.vue'
import ReadMoreIcon from '@/components/icons/ReadMoreIcon.vue'
import BadgeArticleIcon from '@/components/icons/Badge/ArticleIcon.vue'
import BadgeTutorialIcon from '@/components/icons/Badge/TutorialIcon.vue'
import BadgeUnknownIcon from '@/components/icons/Badge/UnknownIcon.vue'

const props = defineProps({
	blog: {
		type: Object,
		default: () => ({
			title: 'How to quickly deploy a static website',
			created_at: new Date().toISOString(),
			edited_at: new Date().toISOString(),
			type: 'unknown',
			url: '/',
			preview:
				'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
			author: 'Test Author'
		}),
		required: true
	}
})

const blogType = computed(() => {
	const type = props.blog.type.toLowerCase()
	if (type === 'article') {
		return 'Article'
	} else if (type === 'tutorial') {
		return 'Tutorial'
	} else {
		return 'Unknown'
	}
})

const badgeClass = computed(() => {
	switch (blogType.value) {
		case 'Article':
			return 'badge bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800'
		case 'Tutorial':
			return 'badge bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800'
		default:
			return 'badge bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-800'
	}
})

const getFormattedDate = computed(() => {
	const createdAtDate = new Date(props.blog.created_at)
	const now = new Date()
	const differenceInYears = now.getFullYear() - createdAtDate.getFullYear()

	if (differenceInYears < 1) {
		// Return text in the format "14 days ago" or "2 months ago"
		return formatDistanceToNow(createdAtDate, { addSuffix: true })
	} else {
		// Returnm text in the format "26 August 2020"
		return format(createdAtDate, 'dd MMMM yyyy')
	}
})
</script>

<style scoped>
.badge {
	@apply inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium;
}
</style>
