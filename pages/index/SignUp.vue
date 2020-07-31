<template>
	<view class="sing-up">
		<view class="line-one"></view>
		<view class="service-details" >
			<view class="left">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
			<view class="right">
				<p style="font-size: 28rpx;">龙岗青少年活动中心"抗议加油站"线上公益课来啦！快来参加快来参加快来参加</p>
			</view>
		</view>

		
		<sign></sign>
		
		<view class="buy-list-item">
			<view class="cu-bar bg-white tabbar border shop">
				<button class="cu-btn round bg-orange" @click="showBottom">预约报名</button>
			</view>
		</view>
		
		<view class="announcement" :class="{sheetShow:announcement,sheeHide:!announcement}" @click="determineClick">
			<view class="announcement-main" >
				<view class="center">
					<image src="../../static/img/baom.png" mode=""></image>
					<view class="bottom">
						<text>恭喜您已报名成功</text>
						<p>xxxx活动</p>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import sign from '../../components/signup/Sign.vue'
	export default{
		components:{
			sign
		},
		data(){
			return{
				
				announcement: false,
			}
		},
		methods:{		
			showBottom(){
				this.announcement = !this.announcement
			},
			determineClick(){
				this.announcement=!this.announcement
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
	.line-one {
		width: 100%;
		height: 20rpx;
		background-color: #f2f2f2;
	}
	.sing-up{
		.service-details {
			position: relative;
			top: 20rpx;
			width: 90%;
			height: 210rpx;
			margin: 0 auto;
			display: flex;
		
			.left {
				image {
					border-radius: 20rpx;
					width: 210rpx;
					height: 160rpx;
				}
			}
		
			.right {
				height: 230rpx;
				width: 400rpx;
				margin-left: 40rpx;
	
		
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
			top: 30%;
			transform: translateX(27%);
			.center{
				position: relative;
				image{
					width: 500rpx;
					height: 520rpx;
				}
				.bottom{
					text-align: center;
					position: absolute;
					bottom: 60rpx;
					left: 30%;
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
