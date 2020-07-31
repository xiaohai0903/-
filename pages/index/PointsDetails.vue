<template>
	<view class="search-title">
		<view class="search-list-item">
			<scroll-view scroll-y="false" class="scroll">				
				<!-- 轮播图 -->
				<view>
					<swiper class="swiper" @change="swiperChange" :current="swiperCurrent" circular="true" :autoplay="true" :interval="5000"
					 :duration="1000">
						<block v-for="(item,index) in imageList" :key="index">
							<swiper-item class="swiper-item">
								<image :src="item.src" mode=""></image>
							</swiper-item>
						</block>
					</swiper>
					<view class="dots">
						<view class='cu-tag round'>{{swiperCurrent+1}}/{{imageList.length}}</view>
					</view>
				</view>
		
				<view class="list-message">
					<text>啊1111111爱思打是的阿斯顿爱思打算打算打是的阿斯顿阿斯顿阿斯顿</text>
					<view class="new-price">
						<view class="left">
							<text style="color:#fe5022; font-size: 40rpx;">500</text>积分
							<text class="old-price">￥299.00</text>
						</view>
						<view class="right">
							<text>111人购买</text>
						</view>
					</view>
				</view>
								
				<view class="line-one"></view>

		
				<!-- 商品详情 -->
				<view class="product-details">
					<view class="product-details-top">
						<view class="left">
							<image src="../../static/img/shuxian.png" mode=""></image>
							<p>商品详情</p>
						</view>
					</view>
					<view class="introduction">
						<image src="../../static/img/2.png" mode=""></image>
					</view>
				</view>
			</scroll-view>
		
			<!--购买过程 -->
			<view class="buy-list-item">
				<view class="cu-bar bg-white tabbar border shop">
					<button class="cu-btn round bg-orange" @click="showBottom">立即兑换</button>
				</view>
			</view>
			
			<bottomSheet :isShowBottom="isShowBottom" @closeBottom="closeBottom"></bottomSheet>
			
		</view>
	</view>
</template>

<script>
	import bottomSheet from '../../components/bottomSheet.vue'
	export default {
		components:{
			bottomSheet
		},
		data() {
			return {
				title: [],
				imageList: [{
						src: '../../static/img/banner.png'
					},
					{
						src: '../../static/img/banner.png'
					},
					{
						src: '../../static/img/banner.png'
					}
				],
				swiperCurrent: 0,
				isShowBottom:false,
			}
		},
		created() {
			this.getGoodsDetails()
		},
		methods: {
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			showBottom() {
				this.isShowBottom = true;
			},
			closeBottom() {
				this.isShowBottom = false;
			},
			getGoodsDetails(){
				let data={
					url:'/api/api/goods_detail',
					data:{
						id:2
					}
				}
				this.$myRequest(data).then(res=>{
					console.log(res)
				})
			}
		},
		onLoad(options) {
			this.title = options.value
		}
	}
</script>

<style>
	page{
		background-color: #FFFFFF;
	}
</style>
<style scoped lang="scss">
	.cu-capsule.round .cu-tag:first-child{
		width: 240rpx;
		height: 80rpx;
	}
	.cu-capsule.round .cu-tag:last-child::after, .cu-capsule.round .cu-tag:last-child{
		width: 240rpx;
		height: 80rpx;
	}
	.search-list-item{
		.line-one {
			width: 100%;
			height: 20rpx;
			background-color: #f2f2f2;
		}
		.scroll {
			height: calc(100vh - 120rpx);
		}
		.swiper {
			width: 100%;
			height: 750rpx;
			.swiper-item {
				width: 100%;
				height: 100%;
			}			
		}
		.dots {
			position: absolute;
			right: 10rpx;
			top: 680rpx;
			z-index: 11;
		}
		
		.list-message {
			margin: 40rpx 20rpx 20rpx;		
			.new-price {
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left{
					.old-price{
						text-decoration:line-through;
						margin-left: 30rpx;
						font-size: 25rpx;
						color: #999999;
					}
				}
				.right{
					margin-right: 10rpx;
				}
			}
		}
		
		.product-details {
			width: 95%;
			margin: 20rpx auto 0 auto;
			.product-details-top {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left{
					display: flex;
					align-items: center;
					image{
						height: 30rpx;
						width: 7rpx;
					}
					p{
						margin-left: 20rpx;
					}
				}
			}
			.introduction{
				margin-top: 20rpx;
				image{
					width: 100%;
					height: 530rpx;
				}
			}
		}
	}
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
</style>
