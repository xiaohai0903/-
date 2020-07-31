<template>
	<view class="single">
		<view class="main" v-for="(x,index) in question" :key="index">
				<view class="top">
					<text style="color: #1b9df5;">{{x.id}}、</text>{{x.title}}
				</view>
				<checkbox-group @change="checkboxChange" class="radio">
					<label v-for="(y,indey) in x.item" :key="indey" class="label">
						<checkbox color="#007AFF" style="border-radius: 40rpx;" :checked="y.checked" :value="y.question" /><text style="margin-left: 15rpx;">{{y.question}}</text>
					</label>
				</checkbox-group>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			
		},
		data(){
			return{
				question:[
					{	
						id:1,
						title:'请问XXXXXX',
						item:[
							{	
								select:'A',
								question:'XXX',
								checked:'true'
							},
							{
								select:'B',
								question:'XXX',
								chenker:'true'
							},
							{
								select:'C',
								question:'XXX'
							}
						]
					},
					
				]
			}
		},
		methods:{
			checkboxChange(e){
				console.log(e.detail.value)
			}
		}
	}
</script>

<style scoped>
	/deep/ .uni-checkbox-input{
			 border-radius: 40rpx !important;
	}
</style>
<style scoped lang="scss">
	 
	.main{
		padding: 30rpx 20rpx;
		width: 90%;
		margin: 0 auto;
		.radio{
			margin-top: 20rpx;
			display: flex;
			flex-direction: column;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			.label{
				margin: 0 auto;
				width: 90%;
				height: 100rpx;
				line-height: 100rpx;
				border-bottom: 1rpx solid #dbdbdb;
			}
			.label:last-child{
				border-bottom: none;
			}
		}
	}
</style>
