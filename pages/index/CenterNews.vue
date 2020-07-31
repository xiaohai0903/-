<template>
	<view class="center-news">
		<view class="line-one"></view>
		<view class="service-details" v-for="(item,index) in newsList" :key="index" @click="newsClick">
			<view class="left">
				<image :src=item.img mode=""></image>
			</view>
			<view class="right">
				<p style="font-size: 30rpx;">{{item.title}}</p>
				<view class="bottom">
					<view class="">
						<text class="cuIcon-attention" style="color: #666666;margin-right: 10rpx;"></text>{{item.hits}}
					</view>
					<text style="color: #999999;">{{formData(item.create_time)}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import timestampToTime from '../../static/js/formData.js'
	export default{
		data(){
			return{
				newsList:[]
			}
		},
		created() {
			this.getNewsList()
		},
		methods:{
			// 获取新闻列表
			async getNewsList(){
				const res =  await this.$myRequest({
					url:'/api/api/newslist'
				})
				this.newsList = res.data.data
			},
			// 转换日期格式
			formData(time){
				return this.formDate.timestampToTime(time)
			},
			newsClick(){
				uni.navigateTo({
					url:'NewsDetails'
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
	.center-news{
		.line-one {
			width: 100%;
			height: 20rpx;
			background-color: #f2f2f2;
		}
		.service-details{
			position: relative;
			top: 20rpx;
			width: 90%;
			height: 160rpx;
			margin: 0 auto;
			display: flex;
			
			.left{
				image{
					border-radius: 10rpx;
					width: 230rpx;
					height: 150rpx;
				}
			}
			.right{
				width: 400rpx;
				margin-left: 40rpx;
				border-bottom: 0.01rpx #dbdbdb solid;
				p{
					margin-top: 15rpx;
				}
				.bottom{
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
			}
		}
	}
</style>
