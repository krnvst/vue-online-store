<template>
	<div class="catalog-item">
		<img class="catalog-item__image" :src="require('../assets/images/' + product_data.image)" alt="">
		<p>Name: <span>{{ product_data.name }}</span></p>
		<p>Price: <span>{{ product_data.price }} ₴</span></p>
		<button @click="addToCart">Add to card</button>
	</div>
</template>

<script>
	export default {
		name: "catalogItem",
		props: {
			product_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			addToCart() {
				this.$emit('addToCart', this.product_data)
			}
		},
		mounted() {
			this.$set(this.product_data, 'quantity', 1)
		}
	}
</script>

<style lang="scss" scoped>
	.catalog-item {
		flex-basis: 25%;
		box-shadow: 0 0 8px #e0e0e0;
		padding: $padding * 2;
		margin: $margin $margin * 2;

		&__image {
			width: 100%;
			height: 200px;
			object-fit: cover;
			object-position: top;
		}
	}
</style>
