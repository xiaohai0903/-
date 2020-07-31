const baseUrl = "https://zhentu.app65.cn"


export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			data:options.data || {},
			method: options.method || 'GET',
			success: (res) => {
				console.log(res.data)
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}
