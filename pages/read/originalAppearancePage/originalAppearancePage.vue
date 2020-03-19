<template>
	<view class="originalAppearancePage clearFix">
		<view class="title ff_medium">
			2019年7月<text>第8期</text>
		</view>
		<view class="main" :style="{height: navHeight2+'px'}">
			<image src="" mode=""></image>
		</view>
		<btn-previous-next class="bottombtn"/>
		<voicebtn class="voicebtn"/>
	</view>
</template>

<script>
	import btnPreviousNext from '@/components/btnPreviousNext.vue'
	import voicebtn from '@/components/voicebtn.vue'
	export default {
		data() {
			return {
			};
		},
		components: {
			btnPreviousNext, voicebtn
		},
		methods: {
			
		},
	}
</script>

<style lang="less">
.originalAppearancePage {
	height: 100%;
	.title {
		color: #333333;
		font-size: 30rpx;
		margin: 29rpx 0 30rpx 37rpx;
		height: 29rpx;
		text {
			display: inline-block;
			margin-left: 28rpx;
		}
	}
	.main {
		background-color: #DD524D;
		width: 690rpx;
		height: 933rpx;
		margin: 0 auto;
		margin-bottom: 75rpx;
		border-radius: 10rpx;
		image {
			width: 690rpx;
			height: 933rpx;
		}
	}
	.bottombtn {
		position: fixed;
		bottom: 0;
		// 苹果X底部安全区域
		padding-bottom: constant(safe-area-inset-bottom);  
		    padding-bottom: env(safe-area-inset-bottom); 
		    box-sizing: content-box;
	}
	.voicebtn {
		position: absolute;
		right: 4%;
		top: 2.5%;
	}
}
</style>
