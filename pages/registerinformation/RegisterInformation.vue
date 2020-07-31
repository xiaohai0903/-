<template>
	<view class="register">
		<view class="return" style="border-bottom: none;">
			<view class="left">
				<p>欧阳飞燕</p>
				<text style="margin-left: 40rpx;">女</text>
			</view>
			<view class="right">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
		</view>		
		<!-- 没有报名信息 -->
		<view class="" v-if="true">
			<view class="buy-list-item">
				<view class="cu-bar bg-white tabbar border shop">
					<button class="cu-btn round bg-gradual-blue" @click="newClick" >+新建报名信息</button>
				</view>
			</view>
			<view class="shippingAddress-image" >
				<image src="../../static/img/kong.png" mode="" class="xiaohai"></image>
				<view>
					空空乳液
				</view>
			</view>
		</view>
		
		<!-- 选择学校 -->

	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				
			}
		},
		methods: {
			
			newClick(){
				uni.navigateTo({
					url:'NewRegister'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.buy-list-item{
		position: fixed;
		bottom: 0;
		width: 100%;
		button{
			width: 90%;
			height: 70rpx;
			margin: 0 auto;
		}
	}
	.return {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		width: 100%;
		padding: 0 20rpx;
		margin-top: 5rpx;
		border-bottom: 1rpx solid rgba($color: #999999, $alpha: 0.5);
		background-color: #FFFFFF;
		border-radius: 10rpx;
	
		.left {
			display: flex;
			align-items: center;
			p {
				font-size: 30rpx;
				color: #666666;
			}
		}
	
		.right {
			display: flex;
			align-items: center;
			font-size: 30rpx;
	
			text {
				font-size: 30rpx;
				margin-right: 30rpx;
				color: #333333;
			}
	
			input {
				width: 270rpx;
				text-align: right;
			}
	
			image {
				width: 15rpx;
				height: 30rpx;
			}
		}
	
		.main {
			width: 400rpx;
		}
	}
	.shippingAddress-image {
		text-align: center;

		image {
			width: 85%;
		}
	}

	.register {
		margin-top: 20rpx;

		
	}
</style>
