<template>
	<nav class="border-gray-200 bg-white dark:bg-gray-900">
		<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
			<RouterLink to="/" class="flex items-center space-x-3">
				<img src="@/assets/logo.svg" class="h-8" alt="Logo" />
				<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
					>Website</span
				>
			</RouterLink>
			<button
				data-collapse-toggle="navbar-default"
				type="button"
				aria-controls="navbar-default"
				aria-expanded="false"
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
			<div id="navbar-default" class="hidden w-full md:block md:w-auto">
				<ul
					class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse"
				>
					<li>
						<RouterLink to="/" class="nav-item">Home</RouterLink>
					</li>
					<li>
						<RouterLink to="/about" class="nav-item">About</RouterLink>
					</li>
					<li>
						<a href="https://nabil-alhanif.github.io/portofolio/" class="nav-item">Portfolio</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav-item {
	@apply block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500;
}
.nav-item.router-link-exact-active {
	@apply bg-blue-700 text-white underline md:bg-transparent md:text-blue-700 md:dark:text-blue-500;
}
</style>
