<template>
	<view class="voiceDetailsPage">
		<view class="header">
			<view class="img">
				<!-- <image src="" mode=""></image> -->
				<image class="logo" src="../../../static/images/read/听书标签-听书详情@2x.png" mode=""></image>
			</view>
			<view class="detail">
				<view class="title ff_bold">东宫&nbsp;&nbsp;(典藏版)</view>
				<view class="author ff_medium">艺术家: 匪我存思</view>
				<view class="content ff_medium">
					<text>总时长: &nbsp;22小时35分</text><br>
					<text>播放: &nbsp;155次</text><br>
					<text>章节: &nbsp;63章</text><br>
				</view>
				<navigator url="../voicePlay/voicePlay" class="nowRead ff_bold">立即播放</navigator>
			</view>
		</view>
		<!-- 间隔 -->
		<view class="blank"></view>
		<!-- 目录 -->
		<view class="directory_wrapper">
			<view class="section">
				<view class="total ff_bold">共63章</view>
				<view class="choice ff_bold">
					<image src="../../../static/images/read/选集@2x.png" mode=""></image>
					选集
				</view>
			</view>
			<view class="directory">
				<view class="item ff_medium" v-for="(item, index) in directoryList" :key="index">
					{{ index+1 }}<text class="title">{{ item.title }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				directoryList: [
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
					{ title: '健康四川行动启动'},
				]
			};
		}
	}
</script>

<style lang="less">
.voiceDetailsPage{
	overflow-x: hidden;
	.header{
		width: 100%;
		padding: 30rpx 30rpx 40rpx 30rpx;
		display: flex;
		.img{
			width: 240rpx;
			height: 320rpx;
			background-color: #F0AD4E;
			border-radius: 10rpx;
			box-shadow: -10rpx 10rpx 30rpx #d0d2d7;
			position: relative;
			image{
				width: 240rpx;
				width: 240rpx;
			}
			.logo {
				width: 48rpx;
				height: 35rpx;
				position: absolute;
				left: 10rpx;
				bottom: 22rpx;
			}
		}
		.detail{
			height: 320rpx;
			margin-left: 60rpx;
			display: flex;
			flex-direction: column;
			.title{
				color: #333333;
				font-size: 32rpx;
				margin-top: 10rpx;
				margin-bottom: 14rpx;
			}
			.author{
				color: #999999;
				font-size: 24rpx;
				letter-spacing: 3rpx;
				line-height: 30rpx;
			}
			.content{
				margin-top: 24rpx;
				margin-bottom: 19rpx;
				line-height: 36rpx;
				text{
					color: #666666;
					font-size: 24rpx;
					letter-spacing: 3rpx;
				}
			}
			.nowRead{
				display: inline-block;
				font-size: 24rpx;
				color: #FFFFFF;
				width: 150rpx;
				height: 52rpx;
				background: -webkit-gradient(linear, 0 0, 0 100%, from(#EB6056), to(#E82515));
				border-radius: 150rpx;
				text-align: center;
				line-height: 52rpx;
			}
		}
	}
	// 分割线
	.blank {
		width: 100%;
		height: 10rpx;
		background-color: #F7F7F7;
	}
	
	// 章节
	.directory_wrapper{
		.section{
			width: 691rpx;
			margin: 29rpx 29rpx 14rpx 30rpx;
			display: flex;
			justify-content: space-between;
			.total{
				color: #333333;
				font-size: 32rpx;
				line-height: 32rpx;
				letter-spacing: 3rpx;
			}
			.choice{
				color: #333333;
				font-size: 32rpx;
				line-height: 32rpx;
				letter-spacing: 3rpx;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-right: 10rpx;
				}
			}
		}
		.directory {
			.item{
				width: 690rpx;
				height: 72rpx;
				line-height: 72rpx;
				margin-left: 30rpx;
				margin-right: 30rpx;
				padding-left: 10rpx;
				color: #333333;
				font-size: 26rpx;
				border-bottom: 1rpx solid #E6E6E6;
				.title{
					display: inline-block;
					margin-left: 30rpx;
				}
			}
		}
	}
}
</style>
