<template>
	<view class="all-question">
		<view class="community-sort">
			<view class="community-sort-left" @click="serviceClick(0)" :class="{'underline': currendIndex===0}">
				<text>已完成</text>
			</view>
			<view class="community-sort-right" @click="serviceClick(1)" :class="{'underline': currendIndex===1}">
				<text>未完成</text>
			</view>
		</view>
		
		<view class="main">
			<view class="top">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
			<view class="center">
				<p>探讨过阿萨德阿萨德阿萨德阿萨德阿萨德洒打算打算倒萨打算打</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				currendIndex: 0,
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

<style scoped lang="scss">
	.underline {
		text-align: center;		
		border-bottom: #3dc5f6 3rpx solid;
		color: #3dc5f6;
	}
	.all-question{
		.community-sort {
			background-color: #FFFFFF;
			height: 90rpx;
			line-height: 90rpx;
			display: flex;
			justify-content: space-around;
			border-bottom: 1rpx solid #999999;
		}
		.main{
			padding: 20rpx;
			width: 100%;
			margin-top: 20rpx;
			background-color: #FFFFFF;
			height: 470rpx;
			border-radius:0 0 10rpx 10rpx;
			.top{
				image{
					border-radius: 20rpx;
					width: 100%;
					height: 330rpx;
				}
				video{
					width: 100%;
					height: 300rpx;
				}
			}
			.center{
				margin-top: 20rpx;
			}
		}
	}
</style>
