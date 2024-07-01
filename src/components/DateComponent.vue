<template>
	<time :pubdate="true" :datetime="formattedDate" :title="fullDateTitle">
		{{ message }}{{ abbreviatedDate }}
	</time>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { format } from 'date-fns'

// Props
const props = defineProps({
	isoDateString: {
		type: String,
		required: true
	},
	message: {
		type: String,
		default: '',
		required: false
	}
})

const date = new Date(props.isoDateString)

// Computed properties
const formattedDate = computed(() => {
	// Extract the date part from the ISO string (YYYY-MM-DD)
	return format(date, 'yyyy-MM-dd')
})

const fullDateTitle = computed(() => {
	// Format the date as "MMMM do, Year"
	return format(date, 'MMM do, yyyy')
})

const abbreviatedDate = computed(() => {
	// Format the date as "Mon. d, yyyy"
	return format(date, 'MMM d, yyyy')
})
</script>
