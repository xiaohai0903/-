<template>
	<view class="cu-bar search lookup">
		<view class="search-form round search-box" style="width: 550rpx; background-color: #f2f2f2;">
			<input @click="searchClick" style="padding-left: 30rpx;" type="text" placeholder="搜索" ></input>
			<text class="cuIcon-search"></text>
		</view>
		<button @click="search_bt" class="cu-btn round">搜索</button>
	</view>
</template>

<script>
	export default{
		methods:{
			searchClick(){
				uni.navigateTo({
					url:'../search/Search'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.lookup {
		background-color: #FFFFFF;
		text {
			padding-right: 25rpx;
		}
		button {
			margin-right: 20rpx;
		}
	}
</style>
