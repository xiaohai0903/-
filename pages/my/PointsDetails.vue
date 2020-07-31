<template>
	<view class="points-details">
		<view class="points-top">

		</view>
		<view class="points-bottom">
			<view class="adress-content" @click="defaultClick">
				<view class="adress-title">
					<text>国课课程</text>
				</view>
				<view class="adress-main">
					<text>2020/01/15 13:20</text>	
				</view>
			</view>
			<view class="right" :style="{color:true? '#fe5022':''}">
				<text>+20</text>
			</view>
			<view class="right">
				<text>+20</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>
<style>
	page{
		background-color: #FFFFFF;
	}
</style>

<style scoped lang="scss">
	.points-details{
		.points-top{
			width: 100%;
			height: 300rpx;
			background-size: 100% 100%;
			background-repeat: no-repeat;
			background-image: url(../../static/img/jifen2.png);
		}
		.points-bottom{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 90%;
			margin: 0 auto;
			border-bottom:solid 1rpx #dbdbdb ;
			.adress-content{
				width: 100%;
				height: 140rpx;
				padding-top: 20rpx;
				.adress-title{
					text{
						font-size: 30rpx;
					}
				}
				.adress-main{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 20rpx;
					text{
						font-size: 30rpx;
						color: #999999;
					}
				}
			}
			.right{
				font-size: 30rpx;
			}
		}
	}
</style>
