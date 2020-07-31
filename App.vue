
<script>
	export default {
		onLaunch: function() {
			uni.getStorage({
				key:'historySearch',
				success:(res)=>{
					console.log(res)
					this.$store.state.historySearch=res.data
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	
	@import "colorui/main.css";
	@import "colorui/icon.css";
	
	/*每个页面公共css */
</style>
