<template>
	<view class="right">
		<scroll-view scroll-Y="true" class="right-scroll-Y" :style="{height: detailsHeight+'px'}">
		<view class="right-item" v-for="item in bookslist" :key="item.magazine_id">
			<!-- 左边书籍封面 -->
			<navigator url="../journalDetailsPage/journalDetailsPage">
				<view class="img">
					<image :src="item.lastest_image" mode="aspectFill"></image>
				</view>
			</navigator>
			<!-- 右边详情 -->
			<view class="details">
				<view class="title">{{item.magazine_name}}</view>
				<view class="content">
					<text>
						{{item.description}}
					</text>
				</view>
				<voicebtn/>
			</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	import voicebtn from '@/components/voicebtn.vue'
	export default {
		data() {
			return {
				bookslist: [], // 书籍列表
				userAgentHeight: 0,	// 用户手机高度
				detailsHeight: 0 // 右边盒子所需高度
			};
		},
		props: {
			categoryId: String
		},
		components: {
			voicebtn
		},
		mounted() {
			this.getBooksList()
			this.getUserAgentHeight()
		},
		methods: {
			// 获取右侧书籍
			getBooksList() {
				console.log(this.categoryId)
				uni.showLoading({
					title: '加载中'
				})
				this.$request({
					url: 'magazine.class.item.list',
					data: {param:{"class_id":this.categoryId,"use_article":"1","cover_format":"s","page_num":1,"page_limit":"10","token":"","use_https":"0","use_all":1}}
				}).then(res => {
					this.bookslist = res.magazine_list
					uni.hideLoading()
					console.log(res)
				})
			},
			// 获取用户手机高度
			getUserAgentHeight() {
				let that = this
				uni.getSystemInfo({ 
					success(res) { 
						that.userAgentHeight = res.windowHeight //windoHeight为窗口高度，主要使用的是这个
						let rightScroll = uni.createSelectorQuery().in(that);
						rightScroll.selectAll(".right-scroll-Y").boundingClientRect(data=>{
							// console.log(data)
							let userAgentHeight = that.userAgentHeight
							// console.log(userAgentHeight)
							// console.log(data.top)
							that.detailsHeight = userAgentHeight - data[0].top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
						}).exec()
						// console.log(that.detailsHeight)
					}
				})
			},
		}
	}
</script>

<style lang="less">
page{
	height: 100%;
	.right::-webkit-scrollbar {
		display: none;
	}
	.right {
		// flex: 1;
		height: auto;
		display: flex;
		flex-direction: column;
		pading: 42rpx 26rpx 42rpx 30rpx;
		margin-top: 42rpx;
		margin-left: 30rpx;
		overflow-y: auto;
		::-webkit-scrollbar {
		  width: 0;
		  height: 0;
		  color: transparent;
		}
		
		.right-item {
			height: 200rpx;
			width: 526rpx;
			display: flex;
			justify-content: space-between;
			margin-bottom: 28rpx;
			.img {
				width: 150rpx;
				height: 200rpx;
				background-color: #F0AD4E;
				image {
					width: 150rpx;
					height: 200rpx;
				}
			}
	
			.details {
				height: 200rpx;
				width: 345rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
	
				.title {
					height: 28rpx;
					font-family: 'PingFang-SC-Bold';
					font-weight: bold;
					color: #333333;
					font-size: 30rpx;
				}
	
				.content {
					width: 345rpx;
					height: 80rpx;
					text {
						font-family: 'PingFang-SC-Medium';
						font-weight: normal;
						color: #999999;
						font-size: 20rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
}

</style>
