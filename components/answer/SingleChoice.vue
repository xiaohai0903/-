<template>
	<view class="single">
		<view class="main" v-for="(x,index) in question" :key="index">
				<view class="top">
					<text style="color: #1b9df5;">{{x.id}}、</text>{{x.title}}
				</view>
				<radio-group @change="radioChange" class="radio">
					<label v-for="(y,indey) in x.item" :key="indey" class="label">
						<radio :value="y.question" /><text style="margin-left: 15rpx;">{{y.question}}</text>
					</label>
				</radio-group>
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
								question:'XXX'
							},
							{
								select:'B',
								question:'XXX'
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
			radioChange(e){
				console.log(e)
			}
		}
	}
</script>

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
