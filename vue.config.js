module.exports = {
	css: {
		loaderOptions: {
			sass: {
				// если VUE видит файлы sass то он понимает что они лежат по такому пути
				prependData: `@import "@/assets/styles/styles.scss";`
			}
		}
	}
}
