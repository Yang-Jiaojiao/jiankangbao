<template>
	<view class="nav">
		<navigator class="nav_item ff_medium" :class="{nav_item_selected: index===currentIndex}" @click="seleted(index)" v-for="(item, index) in navlist" :key="index" :url="item.url" hover-class="navigator-hover">
			 {{item.text}}
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navlist: [
					{url: 'https://www.baidu.com/', text: '地球科学'},
					{url: 'https://www.baidu.com/', text: '环境'},
					{url: 'https://www.baidu.com/', text: '地球科学'},
					{url: 'https://www.baidu.com/', text: '地球科学'},
					{url: 'https://www.baidu.com/', text: '地球科学'}
				],
				// 当前下标
				currentIndex: 0
			};
		},
		methods:{
			seleted (index) {
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="less">
	.nav {
		position: fixed;
		top: 0;
		background-color: #fff;
		z-index: 99;
		display: flex;
		width: 100%;
		height: 44px;
		line-height: 44px;
		justify-content: space-around;
		.nav_item {
			font-size: 15px;
			color: #333333;
			letter-spacing: 3rpx;
		}
		.nav_item_selected {
			color: #E9200F;
			font-size: 18px;
			font-family: 'PingFangSC-Medium';
			font-weight: 600;
			letter-spacing: 3rpx;
			border-bottom: 4rpx solid #E9200F;
			border-radius: 2rpx;
		}
	}
</style>
