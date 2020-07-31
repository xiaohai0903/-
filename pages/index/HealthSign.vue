<template>
	<view class="health-sign">
		<view class="line-one"></view>
		<view class="service-details" >
			<view class="left">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
			<view class="right">
				<p style="font-size: 28rpx;">龙岗青少年活动中心"抗议加油站"线上公益课来啦！快来参加快来参加快来参加</p>
				<p style="color: #fe5022;">￥1500</p>
			</view>
		</view>
		<view class="return">
			<view class="left">
				<p>报名信息</p>
			</view>
			<view class="right">
				<p>15讲</p>
			</view>
		</view>
		<view class="return">
			<view class="left">
				<p>课程金额</p>
			</view>
			<view class="right">
				<p>￥1500.00</p>
			</view>
		</view>
		<sign></sign>		
		<view class="buy-list-item">
			<view class="cu-bar bg-white tabbar border shop">
				<p>合计:<text style="color:#ff4a12;">￥1500.00</text></p>
				<button class="cu-btn round bg-orange" @click="showBottom">确定预约</button>
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
	.health-sign{
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
					color: #666666;
				}
			}
		}
		.buy-list-item {
			position: fixed;
			bottom: 0;
			width: 100%;
			border-top: 1rpx solid #dddddd;
			.shop{
				padding: 20rpx;
				button {
					width: 30%;
					height: 70rpx;
				}
			}
		}
	}
</style>
