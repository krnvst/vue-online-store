<template>
	<div>
		<cart-item
			v-for="(cart_data, index) in cart_datas"
			:key="cart_data.article"
			:cart_item_data="cart_data"
			@deleteFromCart="deleteFromCardParent(index)"
		/>
	</div>
</template>

<script>
	import cartItem from "./cart-item"
	import {mapActions} from "vuex"

	export default {
		name: "cart",
		components: {
			cartItem
		},
		methods: {
			...mapActions([
				'DELETE_FROM_CART'
			]),
			deleteFromCardParent(index) {
				this.DELETE_FROM_CART(index)
			}
		},
		props: {
			cart_datas: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>

</style>
