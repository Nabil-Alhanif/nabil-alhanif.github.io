<template>
	<main class="bg-white pb-16 pt-8 antialiased dark:bg-gray-900 lg:pb-24 lg:pt-16">
		<div class="mx-auto flex max-w-screen-xl justify-between px-4">
			<article
				class="format format-sm format-blue mx-auto w-full max-w-2xl dark:format-invert sm:format-base lg:format-lg lg:max-w-3xl"
			>
				<!-- Title & Author -->
				<header class="not-format mb-4 lg:mb-6">
					<address class="mb-6 flex items-center not-italic">
						<div class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
							<div
								class="relative mr-4 size-16 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600"
							>
								<UserAvatarIcon class="absolute size-20 text-gray-400" />
							</div>
							<div>
								<a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">
									{{ blogPost.author }}
								</a>
								<p class="text-base text-gray-500 dark:text-gray-400">
									<DateComponent :iso-date-string="blogPost.createdAt" message="Created on: " />
								</p>
								<p class="text-base text-gray-500 dark:text-gray-400">
									<DateComponent :iso-date-string="blogPost.editedAt" message="Updated on: " />
								</p>
							</div>
						</div>
					</address>
					<h1
						class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl"
					>
						{{ blogPost.title }}
					</h1>
				</header>

				<!-- Dynamic Content Component -->
				<component :is="ContentComponent" />
			</article>
		</div>
		<!-- Comment Section -->
		<div class="mx-auto w-full max-w-2xl px-4 lg:max-w-3xl">
			<TheComment />
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/BlogStore'

import UserAvatarIcon from '@/components/icons/UserAvatarIcon.vue'
import DateComponent from '@/components/DateComponent.vue'
import TheComment from '@/components/TheComment.vue'
import * as BlogComponents from '@/views/Blogs'

const route = useRoute()
const blogStore = useBlogStore()
const blogPost = ref({})

blogPost.value = blogStore.getPostByTitle(route.params.code)
const ContentComponent = BlogComponents[blogPost.value.source]
</script>
