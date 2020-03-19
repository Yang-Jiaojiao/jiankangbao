<template>
	<view class="preview">
			<view class="preview_item"  v-for="(item, index) in originalList" :key="index">
				<navigator url="/pages/read/originalAppearancePage/originalAppearancePage">
					<image src="" mode=""></image>
				</navigator>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				originalList: [
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
				]
			};
		}
	}
</script>

<style lang="less">
.preview{
	width: 100%;
	margin: 30rpx 31rpx 0 0;
	display: flex;
	flex-flow: wrap;
	.preview_item {
		height: 279.3rpx;
		width: 210rpx;
		background-color: #ccc;
		margin-left: 29rpx;
		margin-bottom: 31rpx;
		image {
			height: 279.3rpx;
			width: 210rpx;
		}
	}
}
</style>
