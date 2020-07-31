<template>
	<view class="techology">
		
		<view class="pro-top">
			<image src="../../static/img/2.png" mode=""></image>
		</view>
		<view class="return">
			<view class="left">
				<p>分类</p>
			</view>
				<picker1 :picker="picker1" @pick="pickClick"></picker1>
		</view>
		<one></one>
		
		<view class="community-sort">
			<view class="community-sort-left" @click="serviceClick(0)" :class="{'underline': currendIndex===0}">
				<text>教师简介</text>
			</view>
			<view class="community-sort-right" @click="serviceClick(1)" :class="{'underline': currendIndex===1}">
				<text>系列课程</text>
			</view>
		</view>
		
		<view class="pro-introduction">
			<view class="left" v-if="currendIndex===0">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
			<view class="right" v-else>
				<view class="service-details" v-for="(item,index) in 2" :key="index" @click="courseClick">
					<view class="left">
						<image src="../../static/img/2.png" mode=""></image>
					</view>
					<view class="right">
						<p style="font-size: 28rpx;">龙岗青少年活动中心"抗议加油站"线上公益课来啦！快来参加快来参加快来参加</p>
						<view class="bottom">
							<view class="center">
								<text>1666人已报名</text>
								<image src="../../static/img/2.png" mode=""></image>
							</view>
						</view>
						<p style="color: #999999;margin-top: 20rpx;">2010/02/04</p>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import picker1 from '../../components/picker/picker.vue'
	export default{
		components:{
			picker1
		},
		data(){
			return{
				picker1:['语文','数学','英语'],
				currendIndex: 0
			}			
		},
		methods:{
			pickClick(index){
				this.index=index
			},
			serviceClick(item) {
				if (item === 0) {
					this.currendIndex = 0
				} else {
					this.currendIndex = 1
				}
			},
			courseClick(){
				uni.navigateTo({
					url:'CourseDetails'
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
	.underline {
		text-align: center;
	
		border-bottom: #3dc5f6 4rpx solid;
		color: #333333;
	}
	.pro-top {
		image {
			width: 100%;
			height: 470rpx;
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
				.service-details{
					position: relative;
					top: 20rpx;
					width: 90%;
					height: 230rpx;
					margin: 0 auto;
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
						border-bottom: 0.01rpx #dbdbdb solid;
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
			}
		}
</style>
