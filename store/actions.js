const actions = {
	setHistorySearch({state,commit},data){
		commit('SETHISTORYSEARCH',data)
	},
	setShopGoods({state,commit},data){
		commit('SETSHOPGOODS',data)
	}
}

export default actions