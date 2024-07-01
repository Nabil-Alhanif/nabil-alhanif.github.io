<template>
	<article
		class="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
	>
		<div class="mb-5 flex items-center justify-between text-gray-500">
			<!-- Article Type -->
			<span
				v-if="blog.type.toLowerCase() === 'article'"
				class="inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200 dark:text-green-800"
			>
				<svg
					class="mr-1 h-3 w-3"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
						clip-rule="evenodd"
					></path>
					<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
				</svg>
				Article
			</span>

			<!-- Tutorial Type -->
			<span
				v-else-if="blog.type.toLowerCase() === 'tutorial'"
				class="inline-flex items-center rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800"
			>
				<svg
					class="mr-1 h-3 w-3"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
					></path>
				</svg>
				Tutorial
			</span>

			<!-- Unknown Type -->
			<span
				v-else
				class="inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-200 dark:text-red-800"
			>
				<svg
					class="mr-1 h-3 w-3"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15.2 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11.2a1 1 0 0 0 .747-.334l4.46-5a1 1 0 0 0 0-1.332l-4.46-5A1 1 0 0 0 15.2 6Z"
					></path>
				</svg>
				Unknown
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
				<svg
					class="ml-2 h-4 w-4"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
			</RouterLink>
		</div>
	</article>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { formatDistanceToNow, format } from 'date-fns'
import { RouterLink } from 'vue-router'

import UserAvatarIcon from '@/components/icons/UserAvatarIcon.vue'

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
