<template>
	<section class="bg-white dark:bg-gray-900">
		<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
			<div class="mx-auto max-w-screen-sm text-center">
				<h1
					class="mb-4 text-7xl font-extrabold tracking-tight text-blue-600 dark:text-blue-500 lg:text-9xl"
				>
					404
				</h1>
				<p class="mb4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
					Oops! Page Not Found.
				</p>
				<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
					The page you're looking for doesn't exist or has been moved.
				</p>

				<RouterLink
					to="/"
					class="my-4 inline-flex rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
					>Back to Homepage</RouterLink
				>
			</div>
		</div>
	</section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
