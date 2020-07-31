<template>
	<view class="order">
		<view class="order-title">

			<view class="line-one"></view>

			<!-- 收货地址 -->
			<view class="adress">
				<view class="top">
					<image src="../../static/img/2.png" mode=""></image>
				</view>
				<view class="adress-content" @click="goAdressClick">
					<text>欧阳飘絮</text>
					<text style="margin-left: 30rpx;">13876263500</text>
					<view class="adress-main">
						江西省 南昌市 西湖区 朝阳桃花一存
					</view>
				</view>
				<view class="bottom">
					<image src="../../static/img/fanh.png" mode=""></image>	
				</view>			
			</view>
			<image style="width: 100%; height: 5rpx;" src="../../static/img/2.png" mode=""></image>
			
			<view class="line-one"></view>
			
				<view class="store-goods">
					<view class="main-content">
						<view class="main-image" @click="goodsClick">
						</view>
						<view class="left">
							<image src="../../static/img/fanh.png" mode=""></image>
						</view>
						<view class="right">
							<view class="right-top">
								<text>我是晚上阿萨德阿萨德阿萨德洒打说的啊阿斯达说的爱上大声地</text>
							</view>
							<view class="right-bottom">
								<view class="left">
									<text style="color:#fe5022; font-size: 30rpx;">500</text>积分
									<text class="old-price">￥299.00</text>
								</view>
								<view class="right">
									<button class="cu-btn">-</button>
									<text>11</text>
									<button class="cu-btn">+</button>
								</view>
							</view>
						</view>
					</view>
					
					<view class="return" style="border-bottom:none">
						<view class="left">
							<p>配送方式</p>
						</view>
						<view class="right">
							<picker style="color: #999999;margin-right: 20rpx;" mode="selector" :value="index" :range="picker" @change="orderChange" class="order-picker">
								<view>{{picker[index]}}</view>
							</picker>
							<image src="../../static/img/fanh.png" mode="" ></image>
						</view>
					</view>
					
					
					<view class="buyer" style="border-bottom:none;">
						<view class="left">
							<p>买家留言</p>
						</view>
						<view class="right">
							<input placeholder="选填内容" placeholder-class="content"></input>
						</view>
					</view>
					
					<view class="line-one"></view>
					<view class="return" style="border-bottom:none;">
						<view class="left">
							<p>商品金额</p>
						</view>
						<view class="right" style="margin-right: -30rpx;">
							<text>￥30.8</text>
						</view>
					</view>
					
					<view class="return" style="border-bottom:none;margin-bottom: 200rpx;">
						<view class="left">
							<p>运费</p>
						</view>
						<view class="right" style="margin-right: -30rpx;">
							<text style="color:#fe5022 ;">+￥0.00</text>
						</view>
					</view>
				</view>
			
			<view class="order-total">
				<view class="new-price">
					合计:
					<text style="color:#fe5022; font-size: 30rpx;">500</text>积分
					<text class="old-price">￥299.00</text>
				</view>
				<view class="buy">
					<button class="cu-btn round bg-orange" @click="orderClick">提交订单</button>
				</view>
			</view>
			
		</view>
		
		<!-- 弹窗 -->
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				index: 0,
				picker: ['配送员上门', '上门自取'],
				time: '12:01',
				date: '12-25',
				localTime: '',
				announcement:false,
				typeColumn:['不想要','物流太慢','不喜欢','其他原因']
			}
		},
		
		async onReady() {
			let timer = setTimeout(() => {
				this.defaultValue = '2018-10-18 18:18';
				clearTimeout(timer);
			}, 3000);
		},
		methods: {
			// 返回按钮
			back() {
				uni.navigateBack({

				})
			},
			closeClick() {
				this.announcement = !this.announcement				
			},
			orderChange(e) {
				this.index = e.detail.value
			},
			goAdressClick(){
				uni.navigateTo({
					url:'../adress/ShippingAddress'
				})
			},
			orderClick(){
				uni.navigateTo({
					url:'../payment/Payment'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #FFFFFF;
	}
</style>
<style scoped lang="scss">
	.order-title {
		.line-one {
			width: 100%;
			height: 20rpx;
			background-color: #f2f2f2;
		}
		.adress {
			width: 90%;
			margin: 0 auto;
			height: 130rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.top{
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
			.bottom{
				image{
					width: 15rpx;
					height: 30rpx;
				}
			}
			.adress-content {
				margin-right: 100rpx;
				.adress-main {
					margin-top: 20rpx;
				}
			}
			
		}
		.store-goods {

		
			.main-content {
				display: flex;
				margin-top: 20rpx;
		
				.main-image {
					margin: auto 20rpx;
		
					image {
						width: 40rpx;
						height: 40rpx;
					}
				}
		
				.left {
					image {
						width: 160rpx;
						height: 160rpx;
						border-radius: 10rpx;
					}
				}
		
				.right {
					margin-left: 20rpx;
					margin-right: 20rpx;
		
					.right-bottom {
						margin-top: 40rpx;
						display: flex;
						.old-price {
							color: #999999;
						text-decoration: line-through;
							margin-left: 20rpx;
							font-size: 24rpx;
						}
		
						.right {
							display: flex;
							position: absolute;
							right: 30rpx;
							border: solid 1px #d9d9d9;
		
							text {
								width: 90rpx;
								text-align: center;
								margin-top: auto;
								margin-bottom: auto;
							}
		
							button:nth-child(1) {
								border-radius: 0;
								border-right: solid 1px #d9d9d9;
								background-color: #FFFFFF;
								width: 50rpx;
								height: 50rpx;
							}
		
							button:last-child {
								border-radius: 0;
								width: 50rpx;
								height: 50rpx;
								border-left: solid 1px #d9d9d9;
								background-color: #FFFFFF;
							}
						}
					}
				}
			}
			.buyer{
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 100rpx;
				width: 90%;
				margin: 0 auto;
				.left{
					flex: 1;
				}
				.right{
					input{
						text-align: right;
					}
				}
				.content{
					width: 200rpx;
					font-size: 25rpx;
					margin-left: 150rpx;
				}
			}
			.return {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100rpx;
				width: 90%;
				margin: 0 auto;
				border-bottom: 1rpx solid rgba($color: #999999, $alpha: 0.5);
			
				image:nth-child(3) {
					width: 15rpx;
					height: 30rpx;
				}
				.left{
					display: flex;
					text{
						margin-left: 20rpx;
						color:#fd5325;
					}
				}
				.right {
					display: flex;
					align-items: center;
					justify-content: space-between;
					text {
						margin-right: 30rpx;
						color: #999999;
					}
					.order-picker{
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
					.value{
						margin-right: 20rpx;
					}
					image {
						width: 15rpx;
						height: 30rpx;
					}
					input{
						width: 140rpx;
						word-break: break-all;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
		.order-total{
			width: 100%;
			height: 110rpx;
			background-color: #FFFFFF;
			position: fixed;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.new-price {
				margin-left: 30rpx;
				.old-price{
					color: #999999;
					text-decoration:line-through;
					margin-left: 30rpx;
					font-size: 30rpx;
				}
			}
			.buy{
				margin-right: 30rpx;
				button{
					width: 240rpx;
					height: 90rpx;
				}
			}
		}
}
.announcement{
			width: 100%;
			height: 100%;
			position: fixed;
			top: 100%;
			left: 0;
			bottom: 0upx;
			right: 0upx;
			background: rgba(0, 0, 0, 0.3);
			z-index: 10000;
			transition: all 0.5s ease-in;
			margin: auto;
			.announcement-main{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 650rpx;
				border-radius: 25rpx 25rpx 0 0;
				background-color: #FFFFFF;
				.main-top{
					line-height: 100rpx;
					text-align: center;
					height: 100rpx;
					image{
						position: absolute;
						top: 30rpx;
						right: 40rpx;
						width: 40rpx;
						height: 40rpx;
					}
					border-bottom: 1rpx solid rgba($color: #999999, $alpha: 0.5);
					text{
						font-size: 35rpx;
					}
				}
				.main-bottom{
					.request-button{
						width: 90%;
						margin: 30rpx auto 0 auto;
						.button{
							height: 100rpx;
							width: 100%;
						}
					}
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
		}
		.sheetShow {
			top: 0rpx ;
		}
		
		/* 关闭时的动画，时间自己可以设置0.5s*/
		.sheeHide {
			top: 200% ;
			transition: all 0.5s;
		}
</style>
