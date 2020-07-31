<template>
	<view class="search">
		<view class="search-title">
			<view class="cu-bar search lookup">
				<view class="search-form round search-box" style="width: 550rpx; background-color: #f2f2f2;">
					<input @confirm="search" @input="inputvalue" style="padding-left: 30rpx;" type="text" placeholder="搜索"
					 confirm-type="search"></input>
					<text class="cuIcon-search"></text>
				</view>
				<button @click="search_bt" class="cu-btn round">搜索</button>
			</view>

			<view class="hotSearch">
				<text>热门搜索</text>
				<view class="" @click="hotClick(item)">
					<button class="cu-btn round bg-white">鞋子</button>
					<button class="cu-btn round bg-white">白菜</button>
					<button class="cu-btn round bg-white">冻排骨猪肉</button>
					<button class="cu-btn round bg-white">鞋子</button>
					<button class="cu-btn round bg-white">白菜</button>
					<button class="cu-btn round bg-white">冻排骨猪肉</button>
					<button class="cu-btn round bg-white">鞋子</button>
					<button class="cu-btn round bg-white">白菜</button>
					<button class="cu-btn round bg-white">冻排骨猪肉</button>
				</view>
			</view>

			<view class="historySearch">
				<view class="top">
					<text>历史搜索</text>
					<text @tap="del" class="cuIcon-delete cutOff"></text>
				</view>
				<block v-for="(item,index) in historySearch" :key="index">
					<button class="cu-btn round button_history bg-white" @tap="historyButton(item)">{{item}}</button>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				historySearch: [],
				inputValue: '',
				jumpId: ""
			}
		},
		onLoad(option) {
			this.jumpId = option.id
		},
		onShow() {
			this.historySearch = [...new Set(this.$store.state.historySearch)]
		},
		created() {
			console.log(this.historySearch)
		},
		methods: {
			search() {
				if (!this.inputValue) {
					uni.showToast({
						title: "请输入搜索内容",
						icon: 'none',
						duration: 2000
					})
				} else {
					this.$store.dispatch('setHistorySearch', this.inputValue)
					console.log(this.inputValue)
					uni.navigateTo({
						url: '/pages/search/SearchList?value=' + this.inputValue
					})
				}
			},
			search_bt() {
				if (!this.inputValue) {
					uni.showToast({
						title: "请输入搜索内容",
						icon: 'none',
						duration: 2000
					})
				} else {
					this.$store.dispatch('setHistorySearch', this.inputValue)
					console.log(this.inputValue)
					uni.navigateTo({
						url: '/pages/search/SearchList?value=' + this.inputValue
					})
				}
			},
			historyButton(item) {
				uni.navigateTo({
					url: '/pages/search/SearchList?value=' + item
				})
			},
			hotClick(item) {
				uni.navigateTo({
					url: './SearchList?value=' + item
				})
			},
			getHotSearch() {

			},
			inputvalue(e) {
				this.inputValue = e.detail.value.trim()
			},
			del() {
				this.$store.state.historySearch = []
				this.historySearch = []
				uni.setStorageSync('historySearch', [])
				console.log()
				uni.showToast({
					title: '已经清楚搜索记录',
					icon: 'none',
					duration: 2000
				})
			}
		}
	}
</script>

<style>
</style>
<style scoped lang="scss">
	.search-title {
		.lookup {
			background-color: #FFFFFF;

			text {
				padding-right: 25rpx;
			}
		}

		.hotSearch {
			width: 90%;
			margin: 30rpx auto;

			button {
				margin: 20rpx 20rpx 0 0;
			}
		}

		.historySearch {
			width: 90%;
			margin: 0 auto;

			.top {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.button_history {
				margin: 20rpx 20rpx 0 0;
			}
		}
	}
</style>
