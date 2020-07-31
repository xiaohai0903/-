<template>
	<view class="picker-simple">
		<picker style="color: #999999; font-size: 30rpx;" mode="selector" :value="index" :range="picker"
		 @change="orderChange">
			<view class="order-picker">
				<text>{{picker[index]}}</text>
				<image src="../../static/img/2.png" mode="" style="margin-left: 20rpx;"></image>
			</view>
		</picker>

	</view>


</template>

<script>
	export default {
		props: {
			picker: {},
		},
		data() {
			return {
				index: 0
			}
		},
		methods: {
			orderChange(e) {
				this.index = e.detail.value
				this.$emit('pick', this.index)
			}
		}
	}
</script>

<style scoped lang="scss">
	.order-picker {
		display: flex;
		align-items: center;
	}

	image {
		width: 15rpx;
		height: 30rpx;
	}
</style>
