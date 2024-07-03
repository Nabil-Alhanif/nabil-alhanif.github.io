<template>
	<div class="mt-10">
		<Giscus
			repo="Nabil-Alhanif/nabil-alhanif.github.io"
			repo-id="MDEwOlJlcG9zaXRvcnkzNDMzNTA5ODc="
			category="Announcements"
			category-id="DIC_kwDOFHcey84CghZ_"
			mapping="pathname"
			strict="0"
			reactions-enabled="1"
			emit-metadata="0"
			input-position="top"
			theme="light_high_contrast"
			lang="en"
			crossorigin="anonymous"
		/>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Discussion powered by
			<a href="https://giscus.app" class="underline hover:no-underline">Giscus</a>
		</p>
	</div>
</template>

<script setup>
import Giscus from '@giscus/vue'
</script>
