<template>
	<div class="main-wrapper">
		<p>{{title}}</p>
		<catalog/>
		<card/>
	</div>
</template>

<script>
	import catalog from "./catalog"
	import card from "./card"

	export default {
		name: "main-wrapper",
		components: {
			catalog,
			card
		},
		data() {
			return {
				title: "Main"
			}
		}
	}
</script>

<style scoped>
	.main-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 900px;
		margin: 0 auto;
	}
</style>
