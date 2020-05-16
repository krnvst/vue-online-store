import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		// Глобальное хранилище
		products: [],
		cart: []
	},
	mutations: {
		// Мутируем (изменяем) наш state (синхронно)
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products
		},
		SET_CART: (state, product) => {
			if (state.cart.length) {
				let isProductExists = false;
				state.cart.map((item)=> {
					if (item.article === product.article) {
						isProductExists = true
						item.quantity++
					}
				})
				if (!isProductExists) {
					state.cart.push(product)
				}
			} else {
				state.cart.push(product)
			}
		},
		DELETE_CART: (state, index) => {
			state.cart.splice(index, 1)
		}
	},
	actions: {
		// Запускаем мутации (асинхронно)
		GET_PRODUCTS_FROM_API({commit}) {
			return axios('http://localhost:3000/products', {
				method: "GET"
			})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products.data)
					return products
				})
				.catch((error) => {
					console.log(error)
					return error
				})
		},
		ADD_TO_CART({commit}, product) {
			commit('SET_CART', product)
		},
		DELETE_FROM_CART({commit}, index) {
			commit('DELETE_CART', index)
		}
	},
	getters: {
		// Получаем значение из state в компонентах (асинхронно)
		PRODUCTS(state) {
			return state.products
		},
		CART(state) {
			return state.cart
		}
	},
})

export default store
