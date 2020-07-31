<template>
	<view class="fill">
		<view class="main" v-for="(x,index) in question" :key="index">
			<view class="top">
				<text style="color: #1b9df5;">{{x.id}}、</text>{{x.title}}
			</view>
			<textarea value="" placeholder="请输入您的答案" />
		</view>
	
	</view>
</template>

<script>
	export default{
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
		}
	}
</script>

<style scoped lang="scss">
	.main{
		padding: 30rpx 20rpx;
		width: 90%;
		margin: 0 auto;
		textarea{
			margin-top: 20rpx;
			background-color: #FFFFFF;
			width: 100%;
			border-radius: 10rpx;
		}
	}
	
</style>
