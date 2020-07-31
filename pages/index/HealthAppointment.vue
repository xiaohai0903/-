<template>
	<view class="health-appointment">
		<scroll-view scroll-x class="bg-white nav text-center" style="margin-top: 20rpx">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in week" :key="index" @click="tabSelect(item,index)">
				{{item}}
			</view>
		</scroll-view>
		
		<view class="morning">
			<view class="top">
				<image src="../../static/img/shuxian.png" mode=""></image>
				<text>上午预约</text>
			</view>
			<view class="bottom" style="margin-top: 20rpx;">
				<button class="cu-btn bg-white" :class="index==mornCur&&disabled==true?'bt-color':''" v-for="(item,index) in morning" :key="index" @click="morningClick(item,index)">{{item}}</button>
			</view>
		</view>
		<view class="morning">
			<view class="top">
				<image src="../../static/img/shuxian.png" mode=""></image>
				<text>下午预约</text>
			</view>
			<view class="bottom" style="margin-top: 20rpx;">
				<button class="cu-btn bg-white" :class="index==afterCur&&disabled==false?'bt-color':''" v-for="(item,index) in after" :key="index" @click="afterClick(item,index)">{{item}}</button>
			</view>
		</view>
		
		
		
		<view class="buy-list-item">
			<view class="cu-bar bg-white tabbar border shop">
				<text>预约时间:{{weekday}}{{time}}</text>
				<button class="cu-btn round bg-gradual-blue" @click="showBottom">确定预约</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				week:['周一','周二','周三','周四','周五'],
				morning:['09:00~10:00','10:00~11:00'],
				after:['14:00~15:00','16:00~17:00','17:00~18:00'],
				time:'09:00~10:00',
				weekday:'周一',
				mornCur:-1,
				afterCur:-1,
				disabled:false
			}
		},
		onLoad() {
			var d = new Date()
			console.log(d.getDate())
			console.log(d.getMonth()+1)
		},
		methods: {
			tabSelect(item,index) {
				console.log(item)
				this.weekday=item
				this.TabCur = index
			},
			morningClick(item,index){
				this.time = item
				this.mornCur=index
				this.disabled=true
			},
			afterClick(item,index){
				this.afterCur=index
				this.time = item
				this.disabled=false
			},
			showBottom(){
				uni.navigateTo({
					url:'HealthSign'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.morning{
		padding: 20rpx;
		.top{
			display: flex;
			align-items: center;
			image{
				width: 10rpx;
				height: 50rpx;
			}
			text{
				margin-left: 20rpx;
			}
		}
		
	}
	.bottom{
		button{
			width: 210rpx;
			height: 90rpx;
			margin-right: 10rpx;
		}	
	}
	.buy-list-item {
		position: fixed;
		bottom: 0;
		width: 100%;
		.shop{
			padding: 20rpx;
			button {
				width: 30%;
				height: 70rpx;
			}
		}
	}
	.bt-color{
		background-color: #eff8ff;
		color: #1b9df5;
		border: 1rpx solid #1b9df5;
	}
</style>
