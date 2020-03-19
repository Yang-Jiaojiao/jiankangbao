<template>
	<view class="previous_next">
		<view class="btn ff_medium">上一篇</view>
		<view class="blank"></view>
		<view class="btn ff_medium">下一篇</view>
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
.previous_next{
	width: 100%;
	height: 110rpx;
	display: flex;
	box-shadow: 0 -7rpx 20rpx #dbdfe4;
	.btn{
		width: 374.5rpx;
		color: #333333;
		font-size: 30rpx;
		line-height: 110rpx;
		text-align: center;
		letter-spacing: 3rpx;
	}
	.blank{
		width: 1rpx;
		height: 42rpx;
		background-color: #9C9C9C;
		margin: 34rpx 0;
	}
}
</style>
