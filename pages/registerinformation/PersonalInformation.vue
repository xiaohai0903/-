<template>
	<view class="new-register">
		<form @submit="submitClick">
			<!-- 姓名 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>姓名:</p>
				</view>
				<view class="right">
					<input type="text" placeholder="请填写" placeholder-style="font-size:30rpx" maxlength="11" />
				</view>
			</view>
			<!-- 性别 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>性别:</p>
				</view>
				<view class="right">
					<radio-group @change="RadioChange">
						<view class="cu-form-group">
							<radio name="男" class="blue" :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="男"></radio>男
							<radio style="margin-left: 20rpx;" name='女' class="blue" :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false"
							 value="女"></radio>女
						</view>
					</radio-group>
				</view>
			</view>
			<!-- 出生日期 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>出生日期</p>
				</view>
				<view class="right">
					<input type="text" placeholder="请填写年月日" placeholder-style="font-size:30rpx" maxlength="11" />
				</view>
			</view>
			<!-- 学校名称 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>学校:</p>
				</view>
				<view class="right">
					<input type="text" placeholder="请填写学校名称" placeholder-style="font-size:30rpx" maxlength="11" />
				</view>
			</view>
			<!-- 年级 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>学校:</p>
				</view>
				<picker1 @pick="pickClick" :picker="picker1"></picker1>
			</view>
			<!-- 年龄-->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>年龄</p>
				</view>
				<view class="right">
					<input type="text" placeholder="请填写" placeholder-style="font-size:30rpx" maxlength="11" />
				</view>
			</view>
			<!-- 家长姓名 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>家长姓名</p>
				</view>
				<view class="right">
					<input type="text" placeholder="请填写" placeholder-style="font-size:30rpx" maxlength="11" />
				</view>
			</view>
			<!-- 联系电话1 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>联系电话1</p>
				</view>
				<view class="right">
					<input type="text" placeholder="请填写" placeholder-style="font-size:30rpx" maxlength="11" />
				</view>
			</view>
			<!-- 联系电话2 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>联系电话2</p>
				</view>
				<view class="right">
					<input type="text" placeholder="请填写" placeholder-style="font-size:30rpx" maxlength="11" />
				</view>
			</view>
			<!-- 车牌号 -->
			<view class="return" style="border-bottom: none;">
				<view class="left">
					<p>车牌号</p>
				</view>
				<view class="right">
					<input name="license" type="text" placeholder="请填写" placeholder-style="font-size:30rpx" maxlength="11" />
				</view>
			</view>
			<view class="buy-list-item">
				<view class="cu-bar bg-white tabbar border shop">
					<button class="cu-btn round bg-gradual-blue" form-type="submit">确定添加</button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	import picker1 from '../../components/picker/picker.vue'
	export default{
		components: {
			picker1
		},
		data(){
			return{
				radio: '',
				picker1: ['我调', '卧槽'],
			}
		},
		methods:{
			submitClick(e) {
				console.log(e)
			},
			RadioChange(e) {
				console.log(e)
				this.radio = e.detail.value
			},
			pickClick(index) {
				this.index = index
			},
		}
	}
</script>

<style scoped lang="scss">
	.return {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		width: 100%;
		padding: 0 20rpx;
		margin-top: 5rpx;
		border-bottom: 1rpx solid rgba($color: #999999, $alpha: 0.5);
		background-color: #FFFFFF;
		border-radius: 10rpx;
	
		.left {
			p {
				font-size: 30rpx;
				color: #666666;
			}
		}
	
		.right {
			display: flex;
			align-items: center;
			font-size: 30rpx;
	
			text {
				font-size: 30rpx;
				margin-right: 30rpx;
				color: #333333;
			}
	
			input {
				width: 270rpx;
				text-align: right;
			}
	
			image {
				width: 15rpx;
				height: 30rpx;
			}
		}
	
		.main {
			width: 400rpx;
		}
	}
	.buy-list-item{
		position: fixed;
		bottom: 0;
		width: 100%;
		button{
			width: 90%;
			height: 70rpx;
			margin: 0 auto;
		}
	}
</style>
