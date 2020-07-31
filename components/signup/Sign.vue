<template>
	<view class="sign">
		<view class="line-one"></view>
		<view class="return">
			<view class="left">
				<p>报名信息</p>
			</view>
				<picker1 :picker="picker1" @pick="pickClick"></picker1>
		</view>
		
		<view class="line-one"></view>
		
		<view class="remarks">
			<text>备注信息：</text>
			<textarea  placeholder="(主持经历)非必填" />
		</view>
	</view>
</template>

<script>
	import picker1 from '../picker/picker.vue'
	export default{
		components:{
			picker1
		},
		data(){
			return{
				picker1: ['我调','卧槽'],
			}
		},
		methods:{
			pickClick(index){
				this.index=index
			},
		}
	}
</script>

<style scoped lang="scss">
	.line-one {
		width: 100%;
		height: 20rpx;
		background-color: #f2f2f2;
	}
	.sign{
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
		.remarks{
			width: 100%;
			height: 600rpx;
			padding: 10rpx 20rpx 0 40rpx ;
			display: flex;
			text{
				margin-top: 15rpx;
				flex: 1;
			}
			textarea{
				flex: 4;
			}
		}
	}
</style>
