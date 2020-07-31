<template>
	<view class="content">
		<view class="sheet" :class="{sheetShow:isShowBottom,sheeHide:!isShowBottom}" @touchmove.stop.prevent="moveHandle"
		 @click="closeSheet()">
			<view class="img">
				<image src="../static/img/2.png" mode=""></image>
			</view>
			<scroll-view scroll-y="false" class="sheetView" :class="{sheetView_active:isShowBottom}">
				<view class="main-content">
					<view class="left">
					</view>
					<view class="right">
						<view class="right-top">
							<text>排骨排骨排骨排骨排骨排骨排骨排骨排骨排骨</text>
							<image src="../static/img/X.png" mode="" @click="closeSheet"></image>
						</view>
						<view class="right-bottom">
							<view class="price">
								<text style="color: red; font-size: 30rpx;">500</text><text style="color: red;">积分</text>
								<text class="old-price">￥299.00</text>
							</view>
						</view>
					</view>
				</view>
				<view class="specification">
					<p>规格</p>
					<button class="cu-btn">2.5kg</button>
				</view>
				<view class=" packaging-fee">
					<text>数量</text>
					<view class="last">
						<button>-</button>
						<view class="ao">
							<text>1</text>
						</view>
						<button>+</button>
					</view>
				</view>
				<view class="buy-list-item">
					<view class="cu-bar bg-white tabbar border shop">
						<button class="cu-btn round bg-orange" @click="orderClick">立即兑换</button>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		name: "bottomSheet",
		props: {
			isShowBottom: Boolean
		},
		methods: {
			closeSheet() {
				this.$emit('closeBottom');
			},
			orderClick() {
				console.log(1)
				uni.navigateTo({
					url: '/pages/order/Order'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		.img {

			image {
				width: 160rpx;
				height: 160rpx;
				position: absolute;
				top: 52%;
				left: 20rpx;
				z-index: 11111;
			}
		}
	}

	/* sheet弹窗 */
	.sheet {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0rpx;
		left: 0upx;
		bottom: 0upx;
		right: 0upx;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10000;

		.main-content {
			display: flex;
			position: relative;
			height: 150rpx;
			width: 95%;
			margin: 10rpx auto 0 auto;
			border-bottom: 1rpx solid #dbdbdb;

			.left {
				width: 160rpx;
			}

			.right {
				width: 520rpx;
				margin-left: 20rpx;
				margin-right: 20rpx;


				.right-top {
					width: 100%;
					display: flex;
					justify-content: space-between;

					text {
						font-size: 30rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					image {
						width: 30rpx;
						height: 30rpx;
					}
				}

				.right-bottom {
					margin-top: 30rpx;
					display: flex;

					.old-price {
						text-decoration: line-through;
						margin-left: 15rpx;
						font-size: 25rpx;
						color: #999999;
					}
				}
			}
		}

		.specification {
			height: 150rpx;
			width: 95%;
			margin: 10rpx auto 0 auto;
			border-bottom: 1rpx solid #dbdbdb;

			button {
				margin-top: 20rpx;
			}
		}
	}

	.packaging-fee {
		width: 95%;
		margin: 20rpx auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.last {
			width: 200rpx;
			height: 50rpx;
			display: flex;
			border: solid 1px #d9d9d9;

			.ao {
				width: 90rpx;
				height: 46rpx;
				line-height: 46rpx;
				text-align: center;
				margin-top: auto;
				margin-bottom: auto;
				border-left: solid 1px #d9d9d9;
				border-right: solid 1px #d9d9d9;
			}

			button::after {
				display: none
			}

			button:nth-child(1) {
				line-height: 50rpx;
				background-color: #FFFFFF;
			}

			button:last-child {
				line-height: 50rpx;
				background-color: #FFFFFF;
			}
		}
	}

	.buy-list-item {
		button {
			width: 90%;
			height: 70rpx;
			margin: 0 auto;
		}
	}

	/* 显示时候的动画默认0.5s */
	.sheetView {
		width: 100%;
		height: 0rpx;
		position: fixed;
		bottom: 0;
		background: white;
		z-index: 10001;

		.title {
			margin-left: 20rpx;
			margin-top: 20rpx;
			display: flex;

			text {
				position: absolute;
				right: 20rpx;
			}
		}
	}

	.sheetShow {
		top: 0upx !important;
	}

	/* 关闭时的动画，时间自己可以设置0.5s*/
	.sheeHide {
		top: 120% !important;
		transition: all 0.5s;
	}

	/* 项目需求根据设计稿要展示的高度,超出这个高度就自动滚动*/
	.sheetView_active {
		height: 45%;
	}
</style>
