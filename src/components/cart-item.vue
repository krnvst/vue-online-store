<template>
	<div class="cart-item">
		<img class="cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="">
		<div class="cart-item__info">
			<p>{{ cart_item_data.name }}</p>
			<p>{{ cart_item_data.price }}</p>
			<p>{{ cart_item_data.article }}</p>
			<p class="cart-item__quantity">Quantity: <span>{{ cart_item_data.quantity }}</span></p>
		</div>
		<button @click="deleteFromCart">Delete</button>
	</div>
</template>

<script>
	export default {
		name: "cartItem",
		props: {
			cart_item_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			deleteFromCart() {
				this.$emit('deleteFromCart')
			}
		}
	}
</script>

<style scoped lang="scss">
	.cart-item {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 0 8px 0 #e0e0e0;
		padding: $padding * 2;
		margin-bottom: $margin * 2;

		&__image {
			max-width: 50px;
		}

		&__quantity {
			color: red;
		}
	}
</style>
