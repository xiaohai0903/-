<template>
	<view class="customer">
		<!-- 问题类型 -->
		<view class="customer-top">
			<view class="top">
				<text>问题类型</text>
			</view>
			<view class="bottom">
				<radio-group name="" @change="RadioChange">
					<label>
						<radio class="blue" value="功能异常" /><text>功能异常</text>
					</label>
					<label>
						<radio class="blue" value="优化建议" /><text>优化建议</text>
					</label>
				</radio-group>
			</view>
		</view>
		<!-- 问题或建议 -->
		<view class="customer-top">
			<view class="top" >
				<text>问题或建议</text>
			</view>
			<view class="bottom" style="border-top: 1rpx solid #dbdbdb;">
				<textarea value="" placeholder="请描述您的问题或建议,如果有系统截图,请在添加图片中上传截图,我们将尽快优化体验,感谢您的反馈" />
			</view>
		</view>
		<!-- 添加图片 -->
		<view class="customer-top">
			<view class="top" >
				<text>添加图片(选填)</text>
			</view>
			<view class="bottom">
				<view class="upload-bottom" >
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @click="viewImage(index)">
						<image :src="imgList[index]"></image>
						<view class="del-img" @click.stop="DelImg" :data-index="index">
							<image src="../../static/img/X.png" mode=""></image>
						</view>
					</view>
					<view class="add-image" @click="choseImage" v-if="imgList.length<5">
						<image src="../../static/img/shouye2.png" v-if="imgList ==0"></image>
						<p v-else style="margin-top: 50rpx;">{{5-imgList.length}}/5</p>
						<p>添加图片</p>
					</view>
				</view>
			</view>
		</view>
		<view class="buy-list-item">
			<view class="cu-bar tabbar border shop">
				<button class="cu-btn round bg-gradual-blue" form-type="submit">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				imgList:[],
				description:''
			}
		},
		methods:{
			RadioChange(e){
				console.log(e)
			},
			// 选择图片
			choseImage(){
				uni.chooseImage({
					count:5,
					success: (res) => {
						if(this.imgList.length!=0){
							this.imgList = this.imgList .concat(res.tempFilePaths)
						}else{
							this.imgList =res.tempFilePaths
						}
					}
				})
			},
			// 预览图片
			viewImage(index){
				uni.previewImage({
					urls:this.imgList,
					current: index
				})
			},
			// 删除图片
			DelImg(e){
				console.log(e)
				uni.showModal({
					title:'删除照片',
					content:'确定要删除这张照片吗？',
					cancelText:'取消',
					confirmText:'确定',
					success: (res) => {
						if(res.confirm){
							this.imgList.splice(e.currentTarget.dataset.index, 	1)
							console.log(this.imgList)
						}
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.customer{
		.customer-top{
			margin-top: 20rpx;
			background-color: #FFFFFF;
			border-radius: 0 10rpx;
			padding: 20rpx;
			.top{
				font-size: 35rpx;
				color: #333333;
			}
			.bottom{
				margin-top: 20rpx;
				width: 100%;
				label{
					display: flex;
					display: inline-block;
					align-items: center;
					margin-right: 80rpx;
					text{
						margin-left: 20rpx;
						color: #666666;
					}
				}
				// 文本框
				textarea{
					padding-top: 30rpx;
					width: 100%;
				}
					.upload-bottom {
						border-radius: 10rpx;
						margin-top: 10rpx;
						text-align: center;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						.bg-img{
							position: relative;						
							display: flex;
							justify-content: space-between;
							width: 160rpx;
							height: 160rpx;
							margin-bottom: 20rpx;
							image{
								max-width: 100%;
								max-height: 100%;
							}
							.del-img{
								position:absolute;
								right: 0;
								image{
									width: 30rpx;
									height: 30rpx;
								}
							}
						}
						.add-image{
							width: 160rpx;
							height: 160rpx;
							margin-bottom: 20rpx;
							text-align: center;
							border: 1rpx solid rgba($color: #999999, $alpha: 0.5);
							border-radius: 20rpx;
							image{
								margin-top: 35rpx;
								width: 60rpx;
								height: 50rpx;
							}
						}
						p {
							color: #999999;
						}
					}
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
		}
</style>
