<template>
	<view class="my">
		<view class="title">
			<text style="color: white; font-size: 40rpx;">我的</text>
		</view>
		<!-- 头部 -->
		<view class="my-header">
			<view class="user-main">
				<view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
				<view class="right">
					<view class="user-main-phone" @click="pointsClick">
						<view class="top">
							<text>小海</text>
							<image src="../../static/img/jinbi.png" mode=""></image>
							<text>20积分</text>
						</view>
						<div style="margin-top: 10rpx;">18270112585</div>
					</view>
					<view class="bottom" @click="announClick">
						<text>未签到</text>
						<image src="../../static/img/qiandao1.png" mode="" @click="announClick"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 菜单栏 -->
		<view class="my_list">
			<view class="list" v-for="(item, index) in mine" :key="index" @click="categoryClick(index)">
				<view class="left_img">
					<img :src=item.src alt="" />
				</view>
				<view class="list_tet">{{item.name}}</view>
				<view class="right_img">
					<img src="/static/img/fanh.png" alt="" />
				</view>
			</view>
			<view class="list" @click="phoneClick">
				<view class="left_img">
					<img src='/static/img/11.png' alt="" />
				</view>
				<view class="list_tet">联系客服</view>
				<view class="right_img">
					182701112825
				</view>
			</view>
		</view>
		<!-- 签到弹窗 -->
		<popups :announcement="announcement">
			<view class="main"  @click="closeClick" >
				<view class="top">
					<text>签到成功</text>
				</view>
				<view class="center">
					<view class="box">
						<p>+<text>2</text>积分</p>
						<p>已成功签到三天</p>
						<p>今日份的积分已领取</p>
					</view>
				</view>
			</view>
		</popups>

		<!-- 底部导航栏 -->
		<rwj-tabbar :current-page="2"></rwj-tabbar>
	</view>
</template>

<script>
	import popups from '../../components/popups/PopUps.vue'
	export default {
		components: {
			popups
		},
		data() {
			return {
				mine: [{
						src: '../../static/img/4.png',
						name: '报名信息管理'
					},
					{
						src: '../../static/img/5.png',
						name: '我的课程'
					},
					{
						src: '../../static/img/6.png',
						name: '我的活动'
					},
					{
						src: '../../static/img/7.png',
						name: '我的预约'
					},
					{
						src: '../../static/img/8.png',
						name: '关于我们'
					},
					{
						src: '../../static/img/9.png',
						name: '用户隐私协议'
					},
					{
						src: '../../static/img/10.png',
						name: '用户反馈'
					}
				],
				announcement: false
			}
		},
		methods: {
			announClick() {
				this.announcement = true
				setInterval(()=>{
					this.announcement = false
				},1500)
			},
			pointsClick(){
				uni.navigateTo({
					url:'PointsDetails'
				})
			},
			categoryClick(index){
				switch (index){
					case 1:
					uni.navigateTo({
						url:'MyCourses'
					})
					break;
					case 6:
					uni.navigateTo({
						url:'CustomerFeedback'
					})
					break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.my {
		width: 100%;
		height: 400rpx;
		background-image: url(../../static/img/beij.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;

		.title {
			padding-top: 13%;
			margin-left: 30rpx;
		}

		.my-header {
			width: 90%;
			margin: 0 auto;

			.user-main {
				display: flex;
				margin-top: 30rpx;

				.right {
					flex: 4;
					width: 100%;
					display: flex;
					justify-content: space-between;
					margin-left: 20rpx;

					.user-main-phone {
						display: flex;
						flex-direction: column;
						color: #FFFFFF;

						.top {
							display: flex;
							align-items: center;

							image {
								margin-top: 5rpx;
								margin-left: 25rpx;
								width: 40rpx;
								height: 40rpx;
							}

							text {
								font-size: 30rpx;
							}
						}
					}

					.bottom {
						display: flex;

						text {
							margin-right: 20rpx;
							color: #FFFFFF;
						}

						image {
							width: 45rpx;
							height: 45rpx;
						}
					}
				}
			}
		}
	}

	.my_list {
		margin-top: 160rpx;
	}

	.list {
		width: 95%;
		height: 100rpx;
		border-radius: 10rpx;
		background-color: #fff;
		border-bottom: 1px #f2f2f2 solid;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin: 10rpx auto;
		display: flex;
		align-items: center;
	}

	.left_img img {
		width: 45rpx;
		height: 45rpx;
	}

	.left_img {
		flex: 1;
	}

	.right_img img {
		width: 15rpx;
		height: 37rpx;
	}

	.right_img {
		flex: 2;
		text-align: right;
	}
	.list_tet {
		flex: 6;
	}
	.main{
		transform: translate(25%,50%);
		
		.top{
			transform: translate(20%,50%);
			text{
				font-size: 30rpx;
				color: #FFFFFF;
			}
		}
		.center{
			position: relative;
			width: 400rpx;
			height: 500rpx;	
			background-image: url(../../static/img/qiandao.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			text-align: center;
			color: #FFFFFF;
			.box{
				transform: translate(0,150%);
				text{
					font-size: 40rpx;
				}
				p:nth-child(2){
					margin-top: 40rpx;
				}
				p:nth-child(3){
					margin-top: 30rpx;
				}
			}
		}
	}
</style>
