<template>
	<view class="charitable">
		<search></search>
		<!-- 头部导航栏 -->
		<view class="head-navigation">
			<view class="left">
				<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
					<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in 10" :key="index" @tap="tabSelect"
					 :data-id="index">
						Tab{{index}}
					</view>
				</scroll-view>
			</view>
			<view class="right" @click="classClick">
				<image v-if="classification" style="width: 50rpx; height: 30rpx;" src="../../static/img/shang.png" mode=""></image>
				<image v-else style="width: 50rpx; height: 30rpx;" src="../../static/img/xia.png" mode=""></image>
			</view>
		</view>
		<view class="line-one"></view>
		<!-- 列表部分 -->
		<view class="classification" :style="{'display':classification? 'block':'none'}">
			<view class="bt">
				<button class="cu-btn round">快乐成长营</button>
				<button class="cu-btn round">快乐成长营</button>
				<button class="cu-btn round">启航亲于志愿者队</button>
				<button class="cu-btn round">亲于志愿者队</button>
				<button class="cu-btn round">快乐成长营</button>
				<button class="cu-btn round">快乐成长营</button>
				<button class="cu-btn round">启航亲于志愿者队</button>
				<button class="cu-btn round">亲于志愿者队</button>
			</view>
			<view class="mask">
				
			</view>
		</view>
		<view class="content-art">
			<view class="service-details" v-for="(item,index) in 2" :key="index" @click="newsClick">
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
		</view>
		<!-- 弹出窗口 -->
	</view>
</template>

<script>
	import search from '../../components/search/SearchCm.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				classification:false,
				eventList:[],
				id:0
			}
		},
		onLoad(options) {
			this.id = options.id
			console.log(options)
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			classClick(){
				this.classification=!this.classification
			},
			newsClick(){
				console.log(this.id)
				if(this.id==="1"){
					uni.navigateTo({
						url:"ProjectDetails"
					})
				}else{
					uni.navigateTo({
						url:'HeartDetails'
					})
				}
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
	.line-one {
		width: 100%;
		height: 20rpx;
		background-color: #f2f2f2;
	}
	.charitable {
		
		.head-navigation{
			width: 100%;
			display: flex;
			.left{
				width: 80%;
			}
			.right{
				text-align: center;
				width: 20%;				
				background-color: #FFFFFF;
				image{
					top: 35%;
					
				}
			}
		}
		.content-art{
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
		.classification{
			position: absolute;
			top: 190rpx;
			width: 100%;
			height: 350rpx;
			background-color: #FFFFFF;
			border-radius: 0 0 10rpx 10rpx;
			display: flex;
			flex-wrap: wrap;
			z-index: 9999;
			.bt{
				margin: 10rpx 10rpx 0 0rpx;
				button{
					margin: 20rpx 0 10rpx 15rpx;
				}
			}
			.mask{
				width: 100%;
				height: calc(100vh - 530rpx);
				position: fixed;
				bottom: 0upx;
				right: 0upx;
				background: rgba(0, 0, 0, 0.3);
				z-index: 10000;
				transition: all 0.2s ease-in;
				margin: auto;
			}
		}
	}
</style>
