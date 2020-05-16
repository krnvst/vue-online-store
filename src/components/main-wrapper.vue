<template>
	<div class="main-wrapper">
		<h1>Online store</h1>
		<catalog/>
		<cart
			v-if="isEmptyCart"
			:cart_datas="CART"
		/>
	</div>
</template>

<script>
	import catalog from "./catalog"
	import cart from "./cart"
	import {mapGetters} from 'vuex'

	export default {
		name: "main-wrapper",
		components: {
			catalog,
			cart
		},
		computed: {
			...mapGetters([
				'CART'
			]),
			isEmptyCart() {
				return this.CART.length !== 0
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
		max-width: 950px;
		width: 100%;
		margin: 0 auto;
	}
</style>
