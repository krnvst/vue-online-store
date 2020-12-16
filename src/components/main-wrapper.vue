<template>
	<div class="main-wrapper">
		<h1>Online store</h1>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name: "main-wrapper"
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
