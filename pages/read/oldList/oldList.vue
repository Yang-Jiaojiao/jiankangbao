<template>
	<view class="oldList">
		<scroll-view class="scroll-X" scroll-x="true" >
			<block v-for="(item, index) in scroll_view_all" :key="index">
				<view class="scroll-view-item ff_medium" :class="{selected: currentIndex===index}" @click="setSelected(index)">
					{{item.year}}年
				</view>
			</block>
		</scroll-view>
		
		<!-- 主体: 期刊目录 -->
		<view class="main" :style="{height: navHeight+'px'}">
			<view class="item" v-for="(item, index) in oldList" :key="index">
				<navigator url="../journalDetailsPage/journalDetailsPage">
					<image class="img"></image>
				</navigator>
				<text class="text ff_medium">{{item.content}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scroll_view_all: [
					{ year: 2020 },
					{ year: 2019 },
					{ year: 2018 },
					{ year: 2017 },
					{ year: 2016 },
					{ year: 2015 },
					{ year: 2014 },
					{ year: 2013 },
					{ year: 2012 },
				],
				currentIndex: 0,
				// 往期列表
				oldList: [
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' },
					{imgurl:'', content:'2019年5月第4期' }
				],
				// 用户手机高度
				userAgentHeight: 0,
				// 元素所需高度
				navHeight:0
			};
		},
		onReady() {
			this.getUserAgentHeight()
		},
		methods: {
			setSelected(i) { // 设置顶部导航激活样式
				this.currentIndex = i
			},
			getUserAgentHeight() {
				let that = this
				uni.getSystemInfo({ 
					success(res) { 
						that.userAgentHeight = res.windowHeight //windoHeight为窗口高度，主要使用的是这个
						let main_H = uni.createSelectorQuery().select(".main");
						main_H.boundingClientRect(data=>{
							let userAgentHeight = that.userAgentHeight
							that.navHeight =userAgentHeight - data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
						}).exec()
					}
				})
			},
		}
	}
</script>

<style lang="less">
.oldList{
	.scroll-X {
		width: 100%;
		height: 48rpx;
		white-space: nowrap;
		margin: 30rpx 44rpx 40rpx 0;
		.scroll-view-item{
			display: inline-block;
			width: 102rpx;
			height: 48rpx;
			line-height: 48rpx;
			margin-left: 24rpx;
			margin-right: 24rpx;
			color: #666666;
			font-size: 30rpx;
		}
		.scroll-view-item:first-child {
			margin-left: 48rpx;
		}
		.selected {
			width: 130rpx;
			height: 48rpx;
			text-align: center;
			margin-left: 17rpx;
			margin-right: 17rpx;
			color: #FFFFFF;
			background: -webkit-gradient(linear, 0 0, 0 100%, from(#EB6056), to(#E82515));
			border-radius: 24rpx;
		}
	}
	.main {
		width: 100%;
		height: 1128rpx;
		overflow: auto;
		display: flex;
		flex-flow: wrap;
		.item {
			height: 324rpx;
			width: 209rpx;
			margin-left: 30rpx;
			margin-bottom: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.img {
				width: 209rpx;
				height: 280rpx;
				background-color: #F0AD4E;
				border-radius: 10rpx;
				box-shadow: 0 8rpx 10rpx #C1BDC3 ;
			}
			.text {
				color: #333333;
				font-size: 26rpx;
				text-align: center;
			}
		}
	}
}
</style>
