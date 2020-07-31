<template>
	<view class="tabbar-container">
		<view class="tabbar-item" v-for="(item,index) in tabbarList" :class="[item.centerItem ? ' center-item' : '']"  @click="changeItem(item)" :key="index">
			<view class="item-top">
				<image :src="currentItem==item.id?item.selectIcon:item.icon"></image>
			</view>
			<view class="item-bottom" :class="[currentItem==item.id ? 'item-active' : '']">
				<text>{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			currentPage: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				currentItem: 0,
				tabbarList: [{
						id: 0,
						path: "/pages/index/index",
						icon: "/static/img/shouye2.png",
						selectIcon: "/static/img/shouye.png",
						text: "首页",
						centerItem: false
					},
					{
						id: 1,
						path: "/pages/youthcenter/YouthCenter",
						icon: "/static/img/lgqsn.png",
						selectIcon: "/static/img/lgqsn.png",
						text: "龙岗青少中心",
						centerItem: true
					},
					{
						id: 2,
						path: "/pages/my/My",
						icon: "/static/img/wd.png",
						selectIcon: "/static/img/wd2.png",
						text: "我的",
						centerItem: false
					}
				]

			};
		},
		mounted() {
			this.currentItem = this.currentPage;
			uni.hideTabBar();
		},
		methods: {
			changeItem(item) {
				console.log(item.path)
				let _this = this;
				//_this.currentItem = item.id;  
				uni.switchTab({
					url:item.path
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	view {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.tabbar-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 110rpx;
		box-shadow: 0 0 5px #999;
		display: flex;
		align-items: center;
		padding: 5rpx 0;
		color: #999999;
		background-color: #FFFFFF;
		justify-content: space-around;
	}

	.tabbar-container .tabbar-item {
		width: 20%;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.tabbar-container .item-active {
		color: #66CCFF;
	}

	.tabbar-container .center-item {
		display: block;
		position: relative;
	}

	.tabbar-container .tabbar-item .item-top {
		width: 70rpx;
		height: 70rpx;
		padding: 10rpx;
	}

	.tabbar-container .center-item .item-top {
		flex-shrink: 0;
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		top: -50rpx;
		left: calc(50% - 50rpx);
		border-radius: 50%;
		box-shadow: 0 0 5px #999;
		background-color: #ffffff;
	}

	.tabbar-container .tabbar-item .item-top image {
		width: 100%;
		height: 100%;
	}

	.tabbar-container .tabbar-item .item-bottom {
		font-size: 28rpx;
		width: 180rpx;
		text{
			margin-right: 5rpx;
		}
	}

	.tabbar-container .center-item .item-bottom {
		position: absolute;
		bottom: 5rpx;
	}
</style>
