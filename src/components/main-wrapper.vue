<template>
	<div class="main-wrapper">
		<h1>Online store</h1>
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
		}
	}
</script>

<style scoped>
	.main-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 950px;
		width: 100%;
		margin: 0 auto;
	}
</style>
