<template>
	<view class="index">
		<view class="title">
			<text style="color: white; font-size: 40rpx;">深圳市龙岗区青少年活动中心</text>
		</view>
		<!-- 轮播图部分 -->
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
		<!-- 导航部分 -->
		<view class="tabbar main" style="margin-top: 30rpx;">
			<view class="cu-item content" @click="goTo('/pages/index/CenterNews')">
				<image src="../../static/img/2.png" mode=""></image>
				<text style="text-align: center;">新闻中心</text>
			</view>
			<view class="cu-item content" @click="goTo('/pages/index/PointsMall')">
				<image src="../../static/img/2.png" mode=""></image>
				<text style="text-align: center;">积分商城</text>
			</view>
			<view class="cu-item content" @click="serviceClick">
				<image src="../../static/img/2.png" mode=""></image>
				<text style="text-align: center;">客服咨询</text>
			</view>
			<view class="cu-item content" @click="goTo('/pages/questionnaire/AllQuestion')">
				<image src="../../static/img/2.png" mode=""></image>
				<text style="text-align: center;">问卷调查</text>
			</view>
		</view>

		<one></one>
		<!-- 底部 -->
		<view class="item_box">
			<view class="item" @click="click_item(1)">
				<img src="/static/img/gyhd.png" alt="" srcset="" />
			</view>
			<view class="item" @click="click_item(2)">
				<img src="/static/img/jkfw.png" alt="" srcset="" />
			</view>
			<view class="item" @click="click_item(3)">
				<img src="/static/img/qsnjp.png" alt="" srcset="" />
			</view>
			<view class="item" @click="click_item(4)">
				<img src="/static/img/qpgly.png" alt="" srcset="" />
			</view>
		</view>
		

		<!-- 弹窗出现窗口-->
		<view class="announcement" :class="{sheetShow:announcement,sheeHide:!announcement}">
			<view class="announcement-main">
				<view class="main-top">
					<text style="font-size: 35rpx;">用户协议及隐私条款</text>
					<text style="width: 90%;">我们依据最新的法律，向你说明龙岗青少年活动中心隐私政策特向您推送本提示。请您阅读并充分理解相关条款</text>
				</view>

				<view class="main-center">
					<p>我们承诺</p>
					<view class="committed">
						<image src="../../static/img/2.png" mode=""></image>
						<text>我们会严格按照《网络安全法》、《信息网络传播保护调理》等保护您的个人信息</text>
					</view>
					<view class="committed">
						<image src="../../static/img/2.png" mode=""></image>
						<text>如果未经您的授权,我们不会使用您的个人信息用于您未授权的其他途径或目的</text>
					</view>
					<p>您点击"同意"，即表示您已阅读并同意<text>《用户协议》</text>及<text>《隐私政策》</text></p>
				</view>
				<!-- 底部 -->
				<view class="main-bottom">
					<navigator open-type="exit" target="miniProgram">
						<button type="default" class="cu-btn round">不同意</button>
					</navigator>
					<button open-type="getUserInfo" class="cu-btn round bg-gradual-blue" @click="determineClick" @getuserinfo="getUserInfo">同意</button>
				</view>
			</view>
		</view>
		<!-- 底部导航栏 -->
		<!-- #ifndef APP-PLUS -->
		<rwj-tabbar :current-page="0"></rwj-tabbar>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList: [],
				swiperCurrent: 0,
				announcement: false,
				code:''
			}
		},
		onLoad() {
			this.announcement = true
			uni.login({
				provider:'weixin',
				success: (res) => {
					if(res.errMsg=='login:ok'){
						console.log(res)
						this.code=res.code
						console.log(this.code)
					}else{
						uni.showToast({
							title:'系统异常,请联系管理员'
						})
					}
				}
			})
		},
		created() {
			this.getSwiper()
		},
		methods: {
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			goTo(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 获取轮播数据
			getSwiper() {
				let data = {
					url: '/api/api/index'
				}
				this.$myRequest(data).then(res => {
					console.log(res.data.data)
					this.imageList = res.data.data
				})
			},
			click_item(index) {
				switch (index) {
					case 1:
						uni.navigateTo({
							url: 'CharitableActivities?id=' + index
						})
						break;
					case 2:
						uni.navigateTo({
							url: 'CharitableActivities?id=' + index
						})
						break;
					case 3:
						uni.navigateTo({
							url:'../course/YounthCourse'
						})
						break;
					case 4:
						uni.navigateTo({
							url:'../appleparadise/GreenAppleParadise'
						})
				}
			},
			determineClick() {
				this.announcement = false
			},
			getUserInfo(e){
				var p = this.getSetting()
				p.then((isAuth)=>{
					console.log('是否已经授权',isAuth)
					// if(isAuth){
					// 	console.log('用户信息,加密数据',e);
					// 	let eData = JSON.parse(e.detail.rawData)
					// 	console.log(eData)
					// 	uni.request({
					// 		header:{'content-type': 'application/x-www-form-urlencoded'},
					// 		url:'https://zhentu.app65.cn/api/register/wechat_login',
					// 		method:'GET',
					// 		data:{
					// 			code:this.code
					// 		},
					// 		success(res) {
					// 			console.log(res)
					// 			if(res){
									
					// 			}else{
					// 				uni.showToast({
					// 					title:'授权登录失败',
					// 					mask:true,
					// 					icon:'none'
					// 				})
					// 			}
					// 		}
					// 	})
					// }else{
					// 	uni.showToast({
					// 		title:'授权失败,请确认授权已开启',
					// 		mask:true,
					// 		icon:none
					// 	})
					// }
				})
			},
			getSetting() {
				return new Promise(function(resolve, reject) {
					uni.getSetting({
						success: function(res) {
							if (res.authSetting['scope.userInfo']) {
								console.log('存在');
								resolve(true);
							} else {
								console.log('不存在');
								resolve(false);
							}
						}
					})
				}).catch((e) => {
					console.log(e)
				});;
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

	.index {
		width: 100%;
		height: 400rpx;
		background-image: url(../../static/img/beij.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;

		.title {
			padding-top: 13%;
			margin-left: 30rpx;
		}
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

		.active {
			width: 24rpx;
			background: #DDDDDD
		}
	}

	.main {
		width: 100%;
		display: flex;
		margin-bottom: 30rpx;

		.content {
			display: flex;
			flex-direction: column;
			text-align: center;
			width: 25%;

			image {
				margin: 0 auto;
				width: 100rpx;
				height: 100rpx;
			}

			text {
				margin-top: 20rpx;
			}
		}
	}


	.item_box {
		height: 440rpx;
		margin: auto;
		display: flex;
		padding: 20rpx;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #fff;
		margin-bottom: 20rpx;
	}

	.item {
		margin-top: 10rpx;
		width: 330rpx;
		height: 180rpx;
		border-radius: 15rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* background-color: pink; */
	}

	.item img {
		width: 100%;
		height: 100%;
	}

	.announcement {
		width: 100%;
		height: 100%;
		position: fixed;
		bottom: 0upx;
		right: 0upx;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10000;
		transition: all 0.2s ease-in;
		margin: auto;

		.announcement-main {
			position: absolute;
			top: 20%;
			transform: translateX(13%);
			width: 80%;
			height: 800rpx;
			border-radius: 25rpx;
			background-color: #FFFFFF;

			.main-top {
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;

				text {
					margin-top: 20rpx;
					color: #333333;
				}
			}

			.main-center {
				width: 90%;
				margin: 30rpx auto 0 auto;

				p {
					margin-top: 30rpx;

					text {
						color: #1b9df5;
					}
				}

				.committed {
					display: flex;
					margin-top: 20rpx;
					align-items: center;

					image {
						width: 90rpx;
						height: 90rpx;
					}

					text {
						font-size: 24rpx;
						margin-left: 30rpx;
					}
				}
			}

			.main-bottom {
				width: 90%;
				margin: 60rpx auto 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;

				button {
					width: 250rpx;
					height: 80rpx;
				}
			}
		}
	}

	.sheetShow {
		top: 0rpx;
	}

	/* 关闭时的动画，时间自己可以设置0.5s*/
	.sheeHide {
		top: 200%;
		transition: all;
	}
</style>
