const mutations = {
	SETHISTORYSEARCH(state, data) {
		state.historySearch.push(data)
		console.log(state.historySearch)
		uni.setStorage({
			key: 'historySearch',
			data: state.historySearch
		})
	},
	SETSHOPGOODS(state,data){
		state.shopGoods.push(data)
		uni.setStorageSync('shopGOods',state.shopGoods)
	}
}

export default mutations
