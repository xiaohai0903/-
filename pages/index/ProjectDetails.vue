<template>
	<view class="pro-details">
		<view class="pro-top">
		<view>
			<swiper class="swiper" :current="swiperCurrent" @change="swiperChange" circular="true" :autoplay="true" :interval="5000"
			 :duration="1000">
				<block v-for="(item,index) in imageList" :key="index">
					<swiper-item class="swiperItem">
						<image :src="item.img" mode=""></image>
					</swiper-item>
				</block>
			</swiper>
			<view class="dots">
				<block v-for="(item,index) in imageList" :key="index">
					<view class="dot" :class="index == swiperCurrent ?' active' : ''"> </view>
				</block>
			</view>
		</view>
			<p>龙岗区青少年活动中心2020春季招生开始啦！各位童鞋快来报名吧~</p>
		</view>
		<view class="line-one"></view>

		<view class="community-sort">
			<view class="community-sort-left" @click="serviceClick(0)" :class="{'underline': currendIndex===0}">
				<text>项目简介</text>
			</view>
			<view class="community-sort-right" @click="serviceClick(1)" :class="{'underline': currendIndex===1}">
				<text>精彩回顾</text>
			</view>
		</view>

		<view class="pro-introduction">
			<view class="left" v-if="currendIndex===0">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
			<view class="right" v-else>
				<view class="service-details" v-for="(item,index) in 4" :key="index" @click="newsClick">
					<view class="left">
						<image src="../../static/img/2.png" mode=""></image>
					</view>
					<view class="right">
						<p style="font-size: 28rpx;">龙岗青少年活动中心"抗议加油站"线上公益课来啦！快来参加快来参加快来参加</p>
						<view class="bottom">
							<view class="center">
								<text class="cuIcon-attention">2004</text>
							</view>
						</view>
						<p style="color: #999999;margin-top: 20rpx;">2010/02/04</p>
					</view>
				</view>
			</view>
		</view>

		<view class="buy-list-item">
			<view class="cu-bar bg-white tabbar border shop">
				<button class="cu-btn round bg-orange" @click="showBottom">确定报名</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currendIndex: 0,
				imageList: [],
				swiperCurrent: 0,
			}
		},
		methods: {
			serviceClick(item) {
				if (item === 0) {
					this.currendIndex = 0
				} else {
					this.currendIndex = 1
				}
			},
			showBottom(){
				uni.navigateTo({
					url:'SignUp'
				})
			},
			getSwiper() {
				let data = {
					url: '/api/api/index'
				}
				this.$myRequest(data).then(res => {
					console.log(res.data.data)
					this.imageList = res.data.data
				})
			},
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
</style>
<style scoped lang="scss">
	.line-one {
		width: 100%;
		height: 20rpx;
		background-color: #f2f2f2;
	}

	.underline {
		text-align: center;

		border-bottom: #3dc5f6 4rpx solid;
		color: #333333;
	}

	.pro-details {
		.pro-top {
			image {
				width: 100%;
				height: 470rpx;
			}

			p {
				padding: 20rpx;
				background-color: #FFFFFF;
				font-size: 30rpx;
			}
			.swiper {
				width: 90%;
				margin: 120rpx auto 0 auto;
			
				.swiperItem {
					width: 500rpx;
					height: 300rpx;
					text-align: center;
			
					image {
						width: 700rpx;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
			
			.dots {
				position: relative;
				left: 0;
				right: 0;
				bottom: 20rpx;
				display: flex;
				justify-content: center;
			
				.dot {
					margin: 0 8rpx;
					width: 14rpx;
					height: 14rpx;
					background: #EEEEEE;
					border-radius: 8rpx;
					transition: all .6s;
				}
		}
}
		.community-sort {
			background-color: #FFFFFF;
			height: 90rpx;
			line-height: 90rpx;
			display: flex;
			justify-content: space-around;
			border-bottom: 1rpx solid #999999;
		}

		.pro-introduction {
			.left {
				image {
					width: 100%;
				}
			}

			.right {
				.service-details {
					position: relative;
					top: 20rpx;
					width: 90%;
					height: 230rpx;
					margin: 0 auto;
					display: flex;

					.left {
						image {
							border-radius: 10rpx;
							width: 250rpx;
							height: 200rpx;
						}
					}

					.right {
						height: 230rpx;
						width: 400rpx;
						margin-left: 40rpx;
						border-bottom: 0.01rpx #dbdbdb solid;

						p {

							margin-top: 15rpx;
							width: 100%;
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							line-clamp: 2;
							-webkit-box-orient: vertical;
						}

						.bottom {

							margin-top: 20rpx;
							display: flex;
							align-items: center;
							justify-content: space-between;

							.center {
								width: 100%;
								display: flex;
								align-items: center;
								justify-content: space-between;

								image {
									width: 25rpx;
									height: 25rpx;
								}

							}
						}
					}
				}
			}
		}

		.buy-list-item {
			position: fixed;
			bottom: 0;
			width: 100%;

			button {
				width: 90%;
				height: 70rpx;
				margin: 0 auto;
			}
		}
	}
</style>
