<template>
	<view>
		<navigator url="" class="voicebtn">
			<image src="../../../static/images/read/语音@2x.png" mode="scaleToFill"></image>
			<text>语音朗读</text>
		</navigator>
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
.voicebtn {
		display: inline-block;
		width: 120rpx;
		height: 40rpx;
		line-height: 40rpx;
		border: 1rpx solid #E9200F;
		border-radius: 4rpx;
		font-size: 20rpx;
		color: #E9200F;
		display: flex;
		align-items: center;
		justify-content: space-around;
		image {
			width: 20rpx;
			height: 18rpx;
		}
	}
</style>
