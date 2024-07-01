<template>
	<div id="grid-container">
		<TheNavbar />

		<RouterView />

		<TheFooter />
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { initFlowbite } from 'flowbite'

import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

onMounted(() => {
	initFlowbite()
})
</script>

<style>
#grid-container {
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-template-columns: 100%;

	/* fallback height */
	min-height: 100vh;

	/* new small viewport height for modern browsers */
	min-height: 100svh;
}
</style>
