<template>
	<view>
		<view class="dir-content" v-for="(item,index) in dirList" :key="index">
			<!-- 目录标题 -->
			<view class="subtitle">
				<image src="../../../static/images/read/目录装饰@2x.png" mode="aspectFill"></image>
				<text class="dir-title">{{item.page_name}}</text>
			</view>
			<!-- 目录结构 -->
			<view class="directory">
				<view class="directory_item ff_medium" 
				v-for="(conItem, i) in item.article_list" 
				:key="i"
				@click="navigate">
					{{ conItem.title }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:[
			'periods'
		],
		data() {
			return {
				// bookId:this.periods,
				dirList: this.periods
			};
		},
		methods:{
			navigate() {
				uni.navigateTo({
					url:'paperMain/paperMain'
				})
			}
		}
	}
</script>

<style lang="less">
	.dir-content{
		.subtitle{
			padding: 20rpx 30rpx;
			image{
				height: 20rpx;
				width: 38rpx;
			}
			text{
				display: inline-block;
				padding-left: 10rpx;
				font-size: 30rpx;
				line-height: 36rpx;
			}
		}
		.directory {
			.directory_item {
				margin: 0 62rpx;
				height: 72rpx;
				line-height: 72rpx;
				font-size: 26rpx;
				color: #333333;
				border-bottom: 1rpx solid #E6E6E6;
				padding-left: 16rpx;
			}
			.directory_item:last-child{
				border-bottom:none;
			}
		}
	}
	
</style>
