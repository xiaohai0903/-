<template>
	<view class="news-detail">
		<view class="uni-common-mt" style="background:#aaff00; padding:20rpx;">
			<rich-text :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default{
		created() {
			this.getNewDetail()
		},
		methods:{
			async getNewDetail(){
				const res = await this.$myRequest({
					url:'/api/api/news_detail',
					data:{
						id:2
					}
				})
				console.log(res)
			}
		}
	}
</script>

<style>
</style>
