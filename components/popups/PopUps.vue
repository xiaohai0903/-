<template>
	<view class="">
		<view class="announcement" :class="{sheetShow:announcement,sheeHide:!announcement}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			announcement:Boolean
		}
	}
</script>

<style scoped lang="scss">
	.announcement {
		width: 100%;
		height: 100%;
		position: fixed;
		bottom: 0upx;
		right: 0upx;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10000;
		transition: all 0.2s ease-in;
		margin: auto;

		.announcement-main {
			position: absolute;
			top: 20%;
			transform: translateX(13%);
			width: 80%;
			height: 800rpx;
			border-radius: 25rpx;
			background-color: #FFFFFF;
		}
	}

	.sheetShow {
		top: 0rpx;
	}

	/* 关闭时的动画，时间自己可以设置0.5s*/
	.sheeHide {
		top: 200%;
		transition: all;
	}
</style>
