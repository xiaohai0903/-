<template>
	<view class="payment">
		<view class="payment-title">
			<view class="payment-main">
				<image src="../../static/img/dingd.png" mode=""></image>
				<view class="payment-main-pay">
					<text>恭喜您提交成功</text>
					<p>工作人员将在2-3个工作日发货请注意查收</p>
				</view>
			</view>
		</view>
		<view class="payment-completed">
			<button class="cu-btn round bg-gradual-blue">查看详情</button>
			<button class="cu-btn round lines-blue" @click="backClick">返回首页</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			backClick() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.payment {
		.payment-title {
			text-align: center;

			.payment-main {
				margin-top: 100rpx;

				image {
					width: 400rpx;
					height: 300rpx;
				}

				.payment-main-pay {

					margin-top: 50rpx;

					text {

						font-size: 35rpx;
					}

					p {
						margin: 10rpx auto;
						width: 400rpx;
						color: #999999;
					}
				}
			}
		}

		.payment-completed {
			text-align: center;

			button {
				width: 450rpx;
				height: 90rpx;
				margin-top: 100rpx;
			}
		}
	}
</style>
