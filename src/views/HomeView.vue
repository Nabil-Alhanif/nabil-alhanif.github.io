<template>
	<main>
		<!-- HEADING -->
		<section id="heading" class="bg-white dark:bg-gray-900">
			<div class="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
				<h1
					class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
				>
					Heading
				</h1>
				<p class="mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
					Idk something about me I guess? :shrug:
				</p>
				<a
					href="#"
					class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
				>
					Learn more
					<RightArrowIcon class="ml-1 size-[24px]" />
				</a>
			</div>
		</section>

		<!-- BLOGS -->
		<section id="blog" class="bg-white dark:bg-gray-900">
			<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
				<!-- Blog Intro -->
				<div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
					<h2
						class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl"
					>
						Blogs
					</h2>
					<p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">Idk, some blogs</p>
				</div>

				<!-- Blog Cards -->
				<div class="grid gap-8 lg:grid-cols-2">
					<div v-for="(blogpost, index) in blogposts" :key="index">
						<BlogCard :blog="blogpost" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
import { computed } from 'vue'
import { useBlogpostStore } from '@/stores/blogpost'

import BlogCard from '@/components/BlogCard.vue'
import RightArrowIcon from '@/components/icons/RightArrowIcon.vue'

const blogposts = computed(() => useBlogpostStore().blogposts)
</script>
