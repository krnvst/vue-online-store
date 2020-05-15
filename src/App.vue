<template>
	<div id="app">
		<main-wrapper/>
	</div>
</template>

<script>
	import mainWrapper from "./components/main-wrapper"

	export default {
		name: 'App',
		components: {
			mainWrapper
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
	#app {
		font-family: 'Roboto Condensed', sans-serif;
		margin: 0;
		padding: 0;
	}
</style>
