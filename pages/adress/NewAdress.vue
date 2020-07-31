<template>
	<view class="new-adress">
		<view class="title">	
		<form class="new-adress-main" @submit="formSubmit" @reset="foremReset">
			<view class="cu-form-group" style="border-top: 1rpx solid #dbdbdb;">
				<view class="title" >收&nbsp;货&nbsp;&nbsp;人</view>
				<input placeholder="请填写收货人姓名" name='name'></input>
			</view>
			
			<view class="cu-form-group" style="border-top: 1rpx solid #dbdbdb;">
				<view class="title" >手机号码</view>
				<input placeholder="请填写收货人手机号" name='phone'></input>
			</view>
			
			<view class="cu-form-group" style="border-top: 1rpx solid #dbdbdb;"  @tap="handleTap('picker3')">
				<view class="title" >所在地区</view>
				<view class="xiaohai">
					<text style="margin-left: -140rpx;">
						{{item}}
					</text>					
				</view>
				<image src="../../static/img/dian.png" mode=""></image>
			</view>
	
			
			<view class="cu-form-group align-start" style="border-top: 1rpx solid #dbdbdb;">
				<view class="title">详细地址</view>
				<textarea maxlength="-1" :disabled="modalName!=null"  placeholder="街道,楼牌号等" name='adress'></textarea>
			</view>
			
			<view class="cu-form-group" style="border-top: 1rpx solid #dbdbdb; border-bottom: 1rpx solid #dbdbdb;">
				<view class="title" >默认地址</view>
				<!-- #ifdef MP-ALIPAY -->
				<switch name="switch" class='green' @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false" color="#4CD964"></switch>
				<!-- #endif -->

				<!-- #ifndef MP-ALIPAY -->
				<switch  name="switch"  @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false"></switch>
				<!-- #endif -->
			</view>
			
			<view class="new-adress">
				<button class="cu-btn round lg bg-gradual-blue" form-type="submit">保存</button>
				<button class="cu-btn round lg "  style="background-image: linear-gradient(to right, #dbdbdb ,#dbdbdb); margin-top: 30rpx;">删除</button>
			</view>
		</form>
		
		</view>
		<!-- 地址选择弹窗 -->
		<lb-picker ref="picker3"
		  name='picker'
		  v-model="value3"
		  mode="multiSelector"
		  :list="list"
		  :level="3"
		  @confirm="handleConfirm"
		  @cancel="handleCancel">
		</lb-picker>
	</view>
</template>

<script>
import areaData from '../../static/js/area-data-min.js'
import LbPicker from '../../components/lb-picker/pickers/multi-selector-picker.vue'
	export default {
		components:{
			LbPicker
		},
		data() {
			return {
				modalName: null,
				switchB: true,
				adressData:[],
				value3: [],
				list: areaData,
				item:"请选择你的地区",
				message:{}
			}
		},
		onReady() {
			this.$nextTick(() => {
			const info = this.$refs.picker3.getColumnsInfo(['340000', '340800', '340826'])
			console.log('根据value获取的信息：', info)
				})
		},
		methods: {
			handleConfirm (e) {
				this.item  = e.item.map(item => item.label).join('-')
				this.message.city=this.item
				console.log(this.message)
			},
			SwitchB(){
				this.switchB=!this.switchB
			},
			handleTap (picker) {
				this.$refs[picker].show()
			},
			formSubmit(e){
				console.log(1)
				console.log(e.detail.value)
				this.message= Object.assign(this.message,e.detail.value)
				console.log(this.message)
			}
		}
	}
</script>

<style>
	page{
		background-color: #FFFFFF;
	}
</style>
<style scoped lang="scss">
	.new-adress {
		.new-adress-main {
			image{
				height: 16rpx;
				width: 40rpx;
			}
			.xiaohai{
				width: 240rpx;
			}
		}
		.new-adress{
			width: 100%;
			position: fixed;
			bottom: 30rpx;
			text-align: center;
			button{
				width: 90%;
			}
		}
		.row{
			height: 150rpx;
			line-height: 150rpx;
			padding-left: 25rpx;
			display: flex;
			.value{
				margin-left: 20rpx;
			}
			.row-img{
				margin-left: 250rpx;
				image{
					width: 40rpx;
					height: 20rpx;
				}
			}
		}
	}
</style>
