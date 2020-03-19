<template>
	<view class="swiper_container">
		<swiper class="swiper"
			 indicator-dots
			 autoplay
			 interval=3000
			 circular
			 indicator-color="#FFFFFF"
			 indicator-active-color="#FF0000"
			 previous-margin="30rpx"
			 next-margin="30rpx"
		 >
			<swiper-item>
				<view class="swiper-item">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.swiper_container{
	position: relative;
	margin-top: 110rpx;
	.swiper{
		  width: 100%;
		  height: 294rpx;
		  margin: 20rpx 0rpx;
		  background-color: #FFFFFF;
		  swiper-item{
			 .swiper-item{
			 	height: 294rpx;
			 	margin: 0 10rpx;
			 	display: flex;
			 	justify-content: center;
			 	align-items: center;
			 	border-radius: 10rpx;
			 	image {
			 		width: 690rpx;
			 		height: 294rpx;
			 		background-color: #ffffff;
			 		border-radius: 10rpx;
			 	}
			 } 
		  }
		
	}
}
</style>
