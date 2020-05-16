<template>
	<div class="catalog">
		<catalog-item
			v-for="product in PRODUCTS"
			:key="product.article"
			:product_data="product"
			@addToCart="addToCardParent"
		/>
	</div>
</template>

<script>
	import catalogItem from "./catalog-item"
	import  {mapActions, mapGetters} from 'vuex'

	export default {
		name: "catalog",
		components: {
			catalogItem
		},
		data() {
			return {
			}
		},
		computed: {
			...mapGetters([
				'PRODUCTS'
			])
		},
		methods: {
			...mapActions([
				'GET_PRODUCTS_FROM_API',
				'ADD_TO_CART'
			]),
			addToCardParent(data) {
				this.ADD_TO_CART(data)
				console.log(data)
			}
		},
		mounted() {
			this.GET_PRODUCTS_FROM_API()
			.then(() => {
				console.log("Загрузился стор и пришли данные по запросу")
			})
		}
	}
</script>

<style scoped>
	.catalog {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
