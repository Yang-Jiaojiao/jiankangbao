<template>
	<view class="read" v-if="HotVoiceList.length !==0 ">
		<!-- 精选期刊 -->
		<view class="featured_journals">
			<view class="featured_journals_header">
				<text class="title">精选期刊</text>
				<text class="more" @click="getMore">查看更多 ></text>
			</view>
			<view class="featured_journals_container">
				<view class="featured_journal_item" v-for="(item, index) in HotBookList.columndetail" :key="index">
					<navigator url="./journalDetailsPage/journalDetailsPage">
						<image :src="item.lastest_image" mode="aspectFill"></image>
					</navigator>
				</view>
			</view>
		</view>
		<!-- 热门听书 -->
		<view class="hot_listenBook">
			<view class="hot_listenBook_header">
				<text class="title">热门听书</text>
				<navigator url="voiceCategoryPage/voiceCategoryPage">
					<text class="more">查看更多 ></text>
				</navigator>
			</view>
			<view class="hot_listenBook_container">
				<view class="hot_listenBook_item" v-for="(item, index) in HotVoiceList.columndetail" :key="index">
					<navigator url="voiceRead/voiceRead">
						<image :src="item.cover_image" mode="aspectFill"></image>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				HotBookList: [], // 热门精选列表
				HotVoiceList: [], // 热门听书列表
			};
		},
		onLoad() {
			this.getHotBookList()
		},
		methods: {
			// 查看更多
			getMore () {
				uni.navigateTo({
					url: './journalCategoryPage/journalCategoryPage',
				})
			},
			// 获取热门书籍列表
			getHotBookList() {
				uni.showLoading({
					title: '加载中'
				})
				this.$request({
					url: 'module.selected.list',
					data: {param:{"use_https":"1","cover_format":"s","token":"","page_num":"1","page_limit":10}}
				}).then(res => {
					this.HotBookList = res.column_info[0]
					this.HotVoiceList = res.column_info[1]
					console.log(this.HotVoiceList)
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="less">
.read{
	margin: 30rpx 30rpx 29rpx 30rpx;
	.featured_journals {
		.featured_journals_header{
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			margin-bottom: 30rpx;
			.title {
				font-family: 'PingFang-SC-Bold';
				font-weight: bold;
				font-size: 32rpx;
			}
			.more {
				font-family: 'PingFang-SC-Medium';
				color: #999999;
				font-size: 24rpx;
			}
		}
		.featured_journals_container {
			width: 100%;
			display: flex;
			flex-flow: wrap;
			.featured_journal_item {
				width: 150rpx;
				height: 200rpx;
				background-color: #F0AD4E;
				border-radius: 10rpx;
				box-shadow: 0 4rpx 8rpx #d0d3d8;
				image {
					width: 150rpx;
					height: 200rpx;
				}
			}
			.featured_journal_item:not(:nth-child(4n)) {
				margin-right: 30rpx;
				margin-bottom: 30rpx;
			}
		}
	}
	// 热门听书
	.hot_listenBook {
		.hot_listenBook_header{
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			margin-bottom: 30rpx;
			.title {
				font-family: 'PingFang-SC-Bold';
				font-weight: bold;
				font-size: 32rpx;
			}
			.more {
				font-family: 'PingFang-SC-Medium';
				color: #999999;
				font-size: 24rpx;
			}
		}
		.hot_listenBook_container {
			width: 100%;
			display: flex;
			flex-flow: wrap;
			.hot_listenBook_item {
				width: 150rpx;
				height: 200rpx;
				border-radius: 10rpx;
				box-shadow: 0 4rpx 8rpx #d0d3d8;
				image {
					width: 150rpx;
					height: 200rpx;
				}
			}
			.hot_listenBook_item:not(:nth-child(4n)) {
				margin-right: 30rpx;
				margin-bottom: 30rpx;
			}
		}
	}
		
}
</style>
