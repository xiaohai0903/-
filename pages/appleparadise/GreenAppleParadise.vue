<template>
	<view class="apple-paradise">
		<search></search>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in applePE" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<!-- 电视节目 -->
		<view class="main" @click="mainClick">
			<view class="top">
				<image src="../../static/img/2.png" mode=""></image>
			</view>
			<view class="center">
				<p>探讨过阿萨德阿萨德阿萨德阿萨德阿萨德洒打算打算倒萨打算打</p>
			</view>
			<view class="bottom">
				<text class="cuIcon-attention" style="color: #666666;margin-right: 10rpx;"></text>20000
			</view>
		</view>
		<!-- 我要主持 -->
		<view class="main" >
			<view class="top">
				<video src="" controls></video>
			</view>
			<view class="center">
				<p>探讨过阿萨德阿萨德阿萨德阿萨德阿萨德洒打算打算倒萨打算打</p>
			</view>
			<view class="bottom">
				<text class="cuIcon-attention" style="color: #666666;margin-right: 10rpx;"></text>20000
			</view>
		</view>
	</view>
</template>

<script>
	import search from '../../components/search/SearchCm.vue'
	export default {
		components: {
			search
		},
		data() {
			return {
				TabCur: 0,
				applePE:['电视节目','我要主持','我要推荐']
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			mainClick(){
				uni.navigateTo({
					url:'./AppleDetails'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/ .uni-scroll-view-content{
		display: flex;
		justify-content: space-around;
	}
	.apple-paradise{
		.main{
			padding: 20rpx;
			width: 100%;
			margin-top: 20rpx;
			background-color: #FFFFFF;
			height: 500rpx;
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
				margin-bottom: 20rpx;
			}
		}
	}
</style>
