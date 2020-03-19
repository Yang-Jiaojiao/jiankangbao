<template>
	<view>
		<!-- <view style="position: fixed";top:0;> -->
			<view class="paper-list">
				<view class="dir-list">
					<view :class="['tabbar',isActive==0?'active':'']" @click="isActive = 0">版面</view>
					<view :class="['tabbar',isActive==1?'active':'']" @click="isActive = 1">目录</view>
					<view :class="['tabbar',isActive==2?'active':'']" @click="isActive = 2">往期</view>
				</view>
				<view class="paper-icon">
					<view class="download" v-if="isActive === 0">
						<navigator url="" class="downbtn">
							<image src="../../static/images/read/下载@2x.png"></image>
							<text>下载</text>
						</navigator>
					</view>
					<view class="listen" v-if="isActive !== 2">
						<voicebtn></voicebtn>
					</view>
					<view class="empty" v-if="isActive === 2">
					</view>
				</view>
			</view>
		<!-- </view> -->
			<!-- 往期筛选 -->
			<view class="old" v-show="isActive === 2">
				<!-- <view style="position: fixed";top:0;> -->
				<view class="old-select">
					<view class="select">选择范围：<text>全部</text></view>
					<view class="screening" @click="open">筛选</view>
				</view>
				<!-- </view> -->
				<view v-for="(item, index) in oldList" :key="index" class="old-list">
					<view class="aLLdate">
						<view class="datelist">
							{{item.date}}
						</view>
						<view class="nperlist">
							第{{item.nper}}期
						</view>
					</view>
					<view class="alldir">
						<view class="dirbtn">
							<image src="../../static/images/read/目录@2x.png" mode="scaleToFill"></image>目录
						</view>
					</view>
				</view>
			</view>
			<!-- 目录选项 -->
			<view class="directory" v-show="isActive === 1">
				<view class="datenum">
					{{dirList.item_info.pub_date}}第{{dirList.item_info.item_number}}期
				</view>
				<directoryList v-if="dirList.page_list[0].page_id" :periods="dirList.page_list"></directoryList>
			</view>
			<!-- 版面选项 -->
			<view v-for="(item, index) in layList.page_list" :key="index" class="layout" v-show="isActive === 0">
				<view class="laytitle">
					<view class="layday">
						{{layList.item_info.pub_date}}
					</view>
					<view class="laynum">
						第{{layList.item_info.item_number}}期
					</view>
					<view class="layhead">
						{{item.page_name}}
					</view>
				</view>
				<!-- 版面滑动内容 -->
				<view class="laybody">
					<view class="layimg">
						<scroll-view scroll-y="true" class="scoll">
							<view class="scoll-item"></view>
							<view class="scoll-item"></view>
							<view class="scoll-item"></view>
						</scroll-view>
					</view>
					<view v-show="loadFlag" class="loadingmore">
						滑动查看下一版<image class="loadimg" src="../../static/images/read/上滑箭头@2x.png" mode="aspectFill"></image>
					</view>
					<view v-show="moreFlag" class="nomore">
						本期结束，请查看往期
					</view>
				</view>
			</view>
			<!-- 遮罩层 -->
			<uni-popup ref="popup" type="bottom" :maskClick="false">
				<view class="mask">
					<view class="">
						确定
					</view>
					<view class="" @click="closepop">
						取消
					</view>
				</view>
			</uni-popup>
	</view>
</template>

<script>
	import voicebtn from '@/components/voicebtn.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import directoryList from '@/components/directoryList.vue'
	export default {
		components: {
			voicebtn,
			directoryList,
			uniPopup
		},
		data() {
			return {
				requestUrl:'newspaper.item.page.list',
				isActive: 0,
				layList: [],
				dirList: [],
				oldList: [{
					date: '2018年6月27日',
					nper: '8058'
				}, {
					date: '2018年6月26日',
					nper: '8057'
				}],
				loadFlag: true,
				moreFlag: false
			}
		},
		mounted() {
			/* 获取目录的请求 */
			this.$request({
				url: this.requestUrl,
				data:{param:{"use_https":"1","cover_format":"s","token":"","resource_id":"37782","item_id":"0"}}
			}).then((res)=>{
				this.dirList = res
				// console.log(this.dirList)
			}).catch((e)=>{
				console.log(e)
			})
			/* 获取版面的请求 */
			this.$request({
				url: 'newspaper.item.page.list',
				data:{param:{"use_https":"1","cover_format":"s","token":"","resource_id":"37782","item_id":"0"}}
			}).then((res)=>{
				this.layList = res
				// console.log(res)
			}).catch((e)=>{
				console.log(e)
			})
		},
		onReachBottom() {

		},
		methods: {
			changeTab(id) {
				this.navIdx = id;
			},
			open() {
				this.$refs.popup.open()
				uni.hideTabBar()
			},
			closepop() {
				this.$refs.popup.close()
				uni.showTabBar()
			},
			clickDay() {

			}
		}
	}
</script>

<style lang="less">
	.paper-list {
		display: flex;
		padding: 20upx 20upx 20upx 0;
		box-sizing: border-box;

		.dir-list {
			display: flex;
			flex: 1;
			justify-content: space-around;

			.tabbar {
				font-size: 30upx;
				text-align: center;
				color: #000;
				height: 80upx;
				line-height: 80upx;
			}

			.active {
				color: #E9200F;
                font-size: 36upx;
				border-bottom: 6upx solid #E9200F;
			}
		}

		.paper-icon {
			display: flex;
			flex: 1;
			flex-direction: row-reverse;

			.listen {
				display: flex;
				flex-direction: row-reverse;
				flex: 8;
				justify-content: flex-start;
				align-items: center;
				margin-right: 10upx;
			}

			.download {
				display: flex;
				width: 80upx;
				font-size: 20upx;
				color: #E9200F;
				justify-content: flex-end;
				align-items: center;

				.downbtn {
					display: flex;
					width: 80upx;
					height: 40upx;
					flex: 1;
					justify-content: center;
					align-items: center;
					border: 1rpx solid #E9200F;

					image {
						width: 20upx;
						height: 20upx;
					}
				}
			}

			.empty {
				display: flex;
				flex: 1;
			}
		}
	}

	.old {
		padding: 30upx;
		font-size: 24upx;

		.old-select {
			display: flex;

			.select {
				display: flex;
				flex: 4;
				align-items: center;
			}

			.screening {
				display: flex;
				flex: 6;
				justify-content: flex-end;
				align-items: center;
				padding-right: 30upx;
			}
		}

		.old-list {
			display: flex;
			align-items: center;
			border-bottom: 1upx solid #E6E6E6;
			padding: 30upx 0;

			.aLLdate {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				flex: 4;

				.nperlist {
					color: #666;
				}
			}

			.alldir {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				flex: 6;

				.dirbtn {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-grow: 0;
					width: 130upx;
					height: 50upx;
					box-sizing: border-box;
					border-radius: 20upx;
					border: 1upx solid #CCCCCC;
					padding-left: 10upx;
					color: #666666;
					image {
						width: 24upx;
						height: 24upx;
						margin-right: 12upx;
					}
				}

			}
		}

	}

	.layout {
		padding: 10upx 20upx 10upx 0;

		position: relative;
		.laytitle {
			display: flex;
			font-size: 28upx;
			.layday {
				display: flex;
				padding: 0 20upx;
				flex: 1;
			}

			.laynum {
				display: flex;
				flex: 1;
			}

			.layhead {
				display: flex;
				flex: 1;
				flex-direction: row-reverse;
			}

		}
		.laybody {
			padding: 16upx 0 10upx 20upx;
			.layimg {
				.scoll{
					.scoll-item{
						height: 80vh;
						background-color: #ccc;
					}

				}
			}
		
			.loadingmore {
				display: flex;
				justify-content: center;
				font-size: 24upx;
				.loadimg {
					width: 20upx;
					height: 20upx;
				}
			}
		}
	}

	.directory{
		// padding: 20upx;
		.datenum {
			padding-left: 35upx;
			height: 80upx;
			line-height: 80upx;
		}
	}
	.mask {
		background-color: #fff;
		height: 30vh;
	}
</style>
