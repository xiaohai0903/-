<template>
	<view class="course-details">
		<view class="pro-top">
			<video v-if="isBuy" object-fit="fill" poster="../../static/img/2.png" class="video" show-play-btn="true" controls src="http://ykugc.cp31.ott.cibntv.net/65730A98D074171B0F0E83545/03000A01005EE82185200440230E41B8009D27-CA17-416A-BE9C-0E2283C061FA.mp4?ccode=050F&duration=147&expire=18000&psid=4d67190466f85fe1507815e29f990aa447fce&ups_client_netip=6a07f886&ups_ts=1595993896&ups_userid=&utid=%2FatCF%2BhD%2F2kCAXUsuTrMVrxK&vid=XNDcxMzk2OTczMg%3D%3D&vkey=B8f0b9966ddcbe0892198b53114fe5aac&eo=0&bc=2&dre=u21&si=42&dst=1"></video>
			<image v-else src="../../static/img/2.png" mode=""></image>
			<p>初升高直播专场老师带你升高,步步高升</p>
			<p style="color: #fe5022;">￥1500 <text style="color: #999999;">￥2690.00</text></p>
		</view>
			<one></one>
			<view class="community-sort">
				<view class="community-sort-left" @click="serviceClick(0)" :class="{'underline': currendIndex===0}">
					<text>课程简介</text>
				</view>
				<view class="community-sort-right" @click="serviceClick(1)" :class="{'underline': currendIndex===1}">
					<text>课程大纲</text>
				</view>
			</view>
			
			<view class="pro-introduction">
				<view class="left" v-if="currendIndex===0">
					<image src="../../static/img/2.png" mode=""></image>
				</view>
				<view class="right bg-course" v-else v-for="(item,index) in 10" :key="index" >
					<view class="return">
						<view class="left">
							<p>第一讲:色彩的认知</p>
						</view>
						<view class="right">
							<image src="../../static/img/2.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			
			<view class="buy-list-item">
				<view class="cu-bar bg-white tabbar border shop">
					<button class="cu-btn round bg-orange" @click="showBottom">立即报名</button>
				</view>
			</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isBuy:false,
				currendIndex: 0
			}
		},
		methods:{
			serviceClick(item) {
				if (item === 0) {
					this.currendIndex = 0
				} else {
					this.currendIndex = 1
				}
			},
		}
	}
</script>

<style>
	page{
		background-color: #FFFFFF;
	}
</style>
<style scoped lang="scss">
	.bg-course:nth-child(odd){
		background-color: #f2faff;
		color: #1b9df5;
	}
	.bg-course:nth-child(even){
		color: #666666;
	}
	.underline {
		text-align: center;
	
		border-bottom: #3dc5f6 4rpx solid;
		color: #333333;
	}
	.course-details{
		.pro-top {
			.video{
				width: 100%;
				height: 470rpx;
			}
			image {
				width: 100%;
				height: 470rpx;
			}		
			p {
				padding: 20rpx;
				background-color: #FFFFFF;
				font-size: 30rpx;
				text{
					margin-left: 30rpx;
					font-size: 24rpx;
					text-decoration: line-through;
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
			padding-bottom: 110rpx;
			.left {
				image {
					width: 100%;
				}
			}		
			.right {
				.return {
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 100rpx;
						width: 90%;
						margin: 0 auto;
						.left {
							p {
								font-size: 30rpx;

							}
						}
						.right{
							image{
								width: 20rpx;
								height: 30rpx;
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
