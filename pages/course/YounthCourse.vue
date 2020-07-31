<template>
	<view class="younth-course">
		<view class="course-top">
			<image src="../../static/img/2.png" mode=""></image>
		</view>
		<view class="course-bottom">
			<view class="left">
				<scroll-view scroll-y="true" >
					<view v-for="(item,index) in course" :key="index" class="course"  :class="courseIndex==index?'bg-course':''" @click="courseClick(index)">
						<image v-if="courseIndex===index" src="../../static/img/shuxian.png" mode=""></image>
						<text>{{item}}</text>
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" >
					<view class="main">
						<button class="cu-btn" v-for="(item,index) in mainCourse" :key="index">{{item}}</button>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				course:['线上精品课程','线下课程'],
				mainCourse:['传统国学','历史课程','益智课程'],
				courseIndex:0
			}
		},
		methods:{
			courseClick(index){
				this.courseIndex=index
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
	.bg-course{
		background-color: #FFFFFF;
		color: #1b9df5;
	}
	.course-top{
		width: 90%;
		height: 230rpx;	
		margin: 0 auto;
		image{
			width: 100%;
			height: 230rpx;
		}
	}
	.course-bottom{
		margin-top: 20rpx;
		width: 100%;
		display: flex;
		.left{
			flex: 1;
			background-color: #f2f2f2;
			.course{
				height: 100rpx;
				line-height: 100rpx;
				display: flex;
				align-items: center;
				text{
					margin-left: 40rpx;
				}
				image{
					position: absolute;
					width: 7rpx;
					height: 50rpx;
				}
			}
		}
		.right{
			flex: 2;
			margin-top: 40rpx;
			.main{
				height: 100vh;
				text-align: center;
				button{
					background-color: #FFFFFF;
					border: 1rpx solid rgba($color: #999999, $alpha: 0.2);
					box-shadow: 2rpx 2rpx 2rpx 2rpx rgba($color: #000000, $alpha: 0.2);
					width: 450rpx;
					height: 75rpx;
						margin-top: 20rpx;
				}
			}
		}
	}
</style>
