<template>
	<view class="points-mall">
		<view class="shop-message">
			<view class="message" @click="detailClick">
				<image src="../../static/img/2.png" mode=""></image>
				<text style="margin-left: 10rpx;">我家玉米好吃又好玩嘻嘻嘻嘻嘻嘻</text>
				<view class="message-bottom">
						<view class="left">
							<p>500<text style="color: #b6b6b6;">积分</text></p>
							<text style="text-decoration: line-through;">￥299.00</text>
						</view>
						<button class="cu-btn round bg-orange">立即兑换</button>
				</view>
			</view>			
			<view class="message">
				<image src="../../static/img/2.png" mode=""></image>					
			</view>
			<view class="message">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		created() {
			this.getGoodsList()
		},
		methods:{
			detailClick(){
				uni.navigateTo({
					url:'./PointsDetails'
				})
			},
			// 积分商城商品列表
			getGoodsList(){
				let data = {
					url:'/api/api/goodslist',
					data:{
						page_index:1,
						page_size:10
					}
				}
				this.$myRequest(data).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.points-mall{
		.shop-message{
			padding-top: 10rpx;
			background-color: #f2f2f2;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.message{
				height: 500rpx;
				background-color: #FFFFFF;
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;
				margin-top: 10rpx;
				border-radius: 20rpx;
				text{
					margin-top: 20rpx;
					width: 340rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				image{
					width: 340rpx;
					height: 340rpx;
				}
				.message-bottom{
					padding: 10rpx;
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #b6b6b6;
					.left{
						p{
							color: #fe5022;
						}					
					}
				}
			}
		}
	}
</style>
