<template>
	<view class="featured">
		<!-- 顶部导航 -->
		<nav-top/>
		<!-- 轮播 -->
		<myswiper/>
		<!-- 精选文章 -->
		<view class="main">
			<!-- 第一篇文章 -->
			<view class="item">
				<view class="left">
					<view class="title ">天文学家们把正在形成的最年轻的星体称为“蓝星”</view>
					<view class="fromtime">
						<text class="from">健康报</text>
						<text class="time">刚刚</text>
					</view>
				</view>
				<!-- 封面 -->
				<view class="right">
					<image src="" mode=""></image>
				</view>
			</view>
			<!-- 第2篇文章 -->
			<view class="item">
				<view class="left">
					<view class="title ">天文学家们把正在形成的最年轻的星体称为“蓝星”</view>
					<view class="fromtime">
						<text class="from">健康报</text>
						<text class="time">刚刚</text>
					</view>
				</view>
				<view class="right">
					<image src="" mode=""></image>
				</view>
			</view>
			<!-- 广告区域 -->
			<view class="advertisement">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
					<swiper-item>
						<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="swiper-item" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item>
						<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="swiper-item" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item>
						<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="swiper-item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			
		</view>
		
		<view class="main">
			<!-- 第一篇文章 -->
			<view class="item">
				<view class="left">
					<view class="title ">天文学家们把正在形成的最年轻的星体称为“蓝星”</view>
					<view class="fromtime">
						<text class="from">健康报</text>
						<text class="time">刚刚</text>
					</view>
				</view>
				<!-- 封面 -->
				<view class="right">
					<image src="" mode=""></image>
				</view>
			</view>
			<!-- 第2篇文章 -->
			<view class="item">
				<view class="left">
					<view class="title ">天文学家们把正在形成的最年轻的星体称为“蓝星”</view>
					<view class="fromtime">
						<text class="from">健康报</text>
						<text class="time">刚刚</text>
					</view>
				</view>
				<view class="right">
					<image src="" mode=""></image>
				</view>
			</view>
			<!-- 广告区域 -->
			<view class="advertisement">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
					<swiper-item>
						<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="swiper-item" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item>
						<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="swiper-item" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item>
						<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="swiper-item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			
		</view>
	</view>
</template>

<script>
	import navTop from '../../components/navTop.vue'
	import myswiper from '../../components/swiper.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			navTop, myswiper
		},
		methods: {

		}
	}
</script>

<style lang="less">
.featured {
	.main {
		width: 690rpx;
		margin: 40rpx 30rpx 40rpx 30rpx;
		.item{
			height: 200rpx;
			margin-bottom: 40rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: 1rpx solid #E0E0E0;
			.left{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title{
					width: 429rpx;
					font-family: PingFangSC-Regular;
					color: #333333;
					font-size: 30rpx;
					line-height: 48rpx;
					letter-spacing: 3rpx;
				}
				.fromtime{
					padding-bottom: 40rpx;
					font-family: PingFangSC-Regular;
					color: #999999;
					font-size: 20rpx;
					letter-spacing: 3rpx;
					.time {
						margin-left: 40rpx;
					}
				}
			}
			.right{
				width: 240rpx;
				height: 160rpx;
				background-color: #F0AD4E;
				image{
					width: 240rpx;
					height: 160rpx;
				}
			}
		}
		// 广告轮播
		.advertisement {
			height: 208rpx;
			width: 690rpx;
			border-bottom: 1rpx solid #E0E0E0;
			.swiper{
				height: 214rpx;
				.swiper-item{
					width: 690rpx;
					height: 160rpx;
					image{
						width: 690rpx;
						height: 160rpx;
					}
				}
			}
		}
	}
}
</style>
