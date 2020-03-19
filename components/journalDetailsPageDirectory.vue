<template>
	<view>
		<view class="subtitle">
			<image src="../../../static/images/read/目录装饰@2x.png" mode="aspectFill"></image>
			<text class="ff_bold">卷首语</text>
		</view>
		<!-- 目录结构 -->
		<view class="directory">
			<view class="directory_item ff_medium" v-for="(item, index) in directoryList" :key="index">
				{{ item.msg }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 目录列表
				directoryList: [
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' },
					{ msg: '健康四川行动启动' }
				]
			};
		}
	}
</script>

<style lang="less">
.subtitle{
	margin-left: 29rpx;
	image{
		height: 20rpx;
		width: 38rpx;
	}
	text{
		display: inline-block;
		margin-left: 10rpx;
		font-size: 30rpx;
		line-height: 36rpx;
	}
}
.directory {
	.directory_item {
		margin: 0 60rpx;
		width: 630rpx;
		height: 72rpx;
		line-height: 72rpx;
		font-size: 26rpx;
		color: #333333;
		border-bottom: 1rpx solid #E6E6E6;
		padding-left: 10rpx;
	}
}
</style>
