<template>
	<view class="shipping-address">
	
		
		<view class="shipping-main" v-if="false">
			<view class="adress-content" @click="defaultClick">
				<view class="adress-title">
					<text>欧阳飘絮</text>
					<text style="margin-left: 30rpx;">13876263500</text>
					<button class="cu-btn round bg-gradual-blue">默认</button>
				</view>
				<view class="adress-main">
					<text>江西省 南昌市 西湖区 朝阳桃花一存</text>
					<image src="../../static/img/2.png" mode=""></image>
				</view>
			</view>
			<view class="adress-content" @click="defaultClick">
				<view class="adress-title">
					<text>欧阳飘絮</text>
					<text style="margin-left: 30rpx;">13876263500</text>
					<button class="cu-btn round bg-gradual-blue">默认</button>
				</view>
				<view class="adress-main">
					<text>江西省 南昌市 西湖区 朝阳桃花一存</text>
					<image src="../../static/img/2.png" mode=""></image>
				</view>
			</view>
		</view>

		
		<view class="shippingAddress-image" v-if="true">
			<image src="../../static/img/kong.png" mode="" class="xiaohai"></image>
			<view>
				空空乳液
			</view>
		</view>
		
		<view class="new-adress">
			<button class="cu-btn round lg bg-gradual-blue" @click="newAdress">新建地址</button>
		</view>
	</view>
</template>

<script>
	export default{
		onLoad() {
			let data={
				url:'/api/api/address_list',
				data:{
					token:''
				}
			}
			this.$myRequest(data).then(res=>{
				console.log(res)
			})
		},
		data(){
			return{
				
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					
				})
			},
			newAdress(){
				uni.navigateTo({
					url:'./NewAdress'
				})
			},
			defaultClick(){
				
			}
		}
	}
</script>

<style>
	page{
		background-color: #FFFFFF;
	}
</style>
<style scoped lang="less">
	.shipping-address{
		.shipping-main{
			border-top: solid 1rpx #dbdbdb;
			.adress-content{
				width: 95%;
				margin: 0 auto;
				height: 160rpx;
				border-bottom:solid 1rpx #dbdbdb ;
				padding-top: 20rpx;
				.adress-title{
					button{
						margin-left: 90rpx;
						height: 45rpx;
						weight: 90rpx;
					}
				}
				.adress-main{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 20rpx;
					image{
						margin-left: 200rpx;
						width: 36rpx;
						height: 36rpx;
					}
				}
			}
		}
		.shippingAddress-image{
			text-align: center;
			image{
				width: 85%;
				
			}
		}
		.new-adress{
			width: 100%;
			position: fixed;
			bottom: 30rpx;
			text-align: center;
			button{
				width: 90%;
			}
		}
	}
</style>
