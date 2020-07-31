<template>
	<view class="youth-center">
		<view class="main">
			<view class="top">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
			<view class="center">
				<p>探讨过阿萨德阿萨德阿萨德阿萨德阿萨德洒打算打算倒萨打算打</p>
			</view>
			<view class="bottom">
				<text class="cuIcon-attention" style="color: #666666;margin-right: 10rpx;"></text>20000
			</view>
		</view>
		<view class="main">
			<view class="top">
				<video src="" controls></video>
			</view>
			<view class="center">
				<p>探讨过阿萨德阿萨德阿萨德阿萨德阿萨德洒打算打算倒萨打算打</p>
			</view>
			<view class="bottom">
				<text class="cuIcon-attention" style="color: #666666;margin-right: 10rpx;"></text>20000
			</view>
		</view>
		<rwj-tabbar :current-page="1"></rwj-tabbar>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
	.youth-center{
		.main{
			padding: 20rpx;
			width: 100%;
			margin-top: 20rpx;
			background-color: #FFFFFF;
			height: 500rpx;
			.top{
				image{
					border-radius: 20rpx;
					width: 100%;
					height: 330rpx;
				}
				video{
					width: 100%;
					height: 300rpx;
				}
			}
			.center{
				margin-top: 20rpx;
				margin-bottom: 20rpx;
			}
		}
	}
</style>
