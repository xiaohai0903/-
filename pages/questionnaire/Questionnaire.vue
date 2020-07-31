<template>
	<view class="questionnaire">
		<view class="top">
			<view class="num">
				<text>请认真回答问题</text>
				<text style="z-index: 999;">{{count}}/20</text>
			</view>
			<view class="progress" :style="{width:long+'px'}">
				<view class="questions">
					<text>请认真回答问题</text>			
				</view>
			</view>
		</view>
		
		<single></single>
		<multiple></multiple>
		<fill></fill>
		<view class="bottom">
			<button class="cu-btn round bg-gradual-blue" @click="onClick">上一题</button>
			<button class="cu-btn round bg-gradual-blue" @click="underClick">下一题</button>
		</view>
	</view>
</template>

<script>
	import single from '../../components/answer/SingleChoice.vue'
	import multiple from '../../components/answer/MultipleChoice.vue'
	import fill from  '../../components/answer/FillIn.vue'
	export default {
		components:{
			single,
			multiple,
			fill
		},
		onLoad() {
		},
		data() {
			return {
				long: 0,
				count: 0,
				color: "blue"
			}
		},
		methods: {
			onClick(){
				uni.getSystemInfo({
					success: (res) => {
						if(this.long<=0){
							uni.showToast({
								title:'第一题'
							})
						}else{
							this.long -= (res.screenWidth)*0.05
							console.log(this.long)
						}
					}
				})
			},
			// 下一题
			underClick() {
				uni.getSystemInfo({	
					success: (res) => {
						console.log(res)
						if(this.long >=res.screenWidth){
							this.long =res.screenWidth
							uni.showToast({
								title:'最后一题了'
							})
						}else{
							this.long += (res.screenWidth)*0.055
							console.log(this.long)
						}	
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.questionnaire {
		background-color: #FFFFFF;
		height: 60rpx;
		width: 100%;
		border-radius: 0 0 10rpx 10rpx;
		position: relative;

		.top {
			display: flex;
			.num {
				padding-left: 20rpx;
				margin-top: 10rpx;
				width: 100%;
				display: flex;
				align-items: center;
				color: #333333;
				justify-content: space-between;
				text {
					font-size: 24rpx;
				}
			}

			.questions {
				padding-left: 20rpx;
				margin-top: 10rpx;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				word-break: break-all;
				color: #FFFFFF;
				
				text {
					font-size: 24rpx;
				}
			}

			.progress {
				position: absolute;
				width: 0;
				height: 100%;
				background-color: #2aaff5;
				border-radius: 0 0 10rpx 10rpx;
				z-index: 150;
			}
		}
		.bottom{
			display: flex;
			justify-content: space-around;
		}
	}
</style>
