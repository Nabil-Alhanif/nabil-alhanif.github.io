<template>
	<TheNavbar />

	<RouterView />

	<TheFooter />
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

<style scoped></style>
