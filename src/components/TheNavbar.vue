<template>
	<nav class="border-gray-200 bg-white">
		<div
			class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
		>
			<RouterLink to="/" class="flex items-center space-x-3">
				<img src="@/assets/logo.svg" class="h-8" alt="Logo" />
				<span class="self-center whitespace-nowrap text-2xl font-semibold"
					>Website</span
				>
			</RouterLink>
			<!-- TODO: Add a button for navbar collapse in mobile view -->
			<div id="navbar-default" class="hidden w-full md:block md:w-auto">
				<ul
					class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-semibold md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0"
				>
					<li>
						<RouterLink to="/" class="nav-item">Home</RouterLink>
					</li>
					<li>
						<RouterLink to="/about" class="nav-item">About</RouterLink>
					</li>
					<li>
						<a
							href="https://nabil-alhanif.github.io/portofolio/"
							class="nav-item"
							>Portfolio</a
						>
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
	@apply block rounded border-0 p-0 px-3 py-2 text-gray-900 hover:text-blue-700;
}
.nav-item.router-link-exact-active {
	@apply text-blue-700 underline;
}
</style>
