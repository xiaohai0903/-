<template>
	<view class="my-courses">
		<view class="courses-top">
			<view class="main">
				<view class="left" @click="coursesClick(1)"  :class="{'bg1-courses': courses==1}">
					<text>线上课程</text>
				</view>
				<view class="right"  :class="{'bg-courses': courses==2}" @click="coursesClick(2)"> 
					<text>线下课程</text>
				</view>
			</view>
		</view>
		<!-- 课程列表 -->
		<view class="content-art">
			<view class="service-details" v-for="(item,index) in 2" :key="index" @click="newsClick(index)">
				<view class="top">
					<view class="left">
						<image src="../../static/img/2.png" mode=""></image>
					</view>
					<view class="right">
						<p style="font-size: 28rpx;">龙岗青少年活动中心"抗议加油站"线上公益课来啦！快来参加快来参加快来参加</p>
						<view class="bottom">
							<view class="center">
								<text>1666人已报名</text>
								<image src="../../static/img/xing.png" mode=""></image>
								<image src="../../static/img/xing.png" mode=""></image>
								<image src="../../static/img/xing.png" mode=""></image>
								<image src="../../static/img/xing.png" mode=""></image>
								<image src="../../static/img/xing.png" mode=""></image>
							</view>
						</view>
						<p style="color: #999999;margin-top: 20rpx;">2010/02/04</p>
					</view>
				</view>
					<view class='cu-tag round  bottom1'>去评价</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				courses:1
			}
		},
		methods:{
			coursesClick(index){
				this.courses=index
			},
			newsClick(index){
				uni.navigateTo({
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.bg-courses{
		background: linear-gradient(45deg, #0081ff, #1cbbb4);
		border-radius: 0 10rpx 10rpx 0;
	}
	.bg1-courses{
		background: linear-gradient(45deg, #0081ff, #1cbbb4);
		border-radius: 10rpx 0rpx 0rpx 10rpx;
	}
	.courses-top{	
		margin: 20rpx auto auto 30rpx; 
		.main{
			margin: 0 auto;
			width: 400rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			display: flex;
			background-color: #FFFFFF;
			border-radius: 15rpx;
			
			.left{
				flex: 1;			
			}
			.right{
				flex: 1;
			}
		}
	}
	.content-art{
		.service-details{
			position: relative;
			top: 20rpx;
			width: 100%;
			height: 350rpx;
			margin: 20rpx auto;
			background-color: #FFFFFF;
			padding: 20rpx;
			.top{
				display: flex;
				.left{
					image{
						border-radius: 10rpx;
						width: 250rpx;
						height: 200rpx;
					}
				}
				.right{
					height: 230rpx;
					width: 400rpx;
					margin-left: 40rpx;
					p{
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
					.bottom{
						margin-top: 20rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.center{
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;
							image{
								width: 25rpx;
								height: 25rpx;
							}
						}
					}
				}
			}
			.bottom1{
				float: right;
				margin-top: 30rpx;
				width: 160rpx;
				height: 60rpx;
				color: #1b9df5;
				border: 1rpx solid #1b9df5;
				background-color: #FFFFFF;
			}
		}
	}
</style>
