<template>
	<view>
		<view class="content">
			<view class="con-title">
				中国国际时装周2020春夏邀您赴一场与时尚的浪漫约会
			</view>
			<view class="con-voc">
				<view class="con-day">
				2020年2月第2期  第一版： 头版
				</view>
				<view class="vocbtn">
					<voicebtn></voicebtn>
				</view>
			</view>
			<view class="con-img">
				
			</view>
			<view class="con-content">
				
				为了迎接东京奥运会的到来，耐克于北京时间2月6日在纽约时装周上，举行了耐克 Future Sport Forum 2020的产品峰会。耐克在这次峰会带来了一系列创新产品，包括为签约国家队在东京奥运会准备的装备。
				
				携手五大设计师，打造奥运联名系列。近几年，“联名”一词出现在运动品牌产品中的频率成几何增长。作为“联名大户”，耐克也与五位知名设计师一同，将“联名产品”搬上奥运舞台。在峰会上，耐克携手 Virgil Abloh、Yoon Ahn、阿部千登势、Matthew Williams 和 Jun Takahashi 5位国际时尚大师，发布奥运联名系列。
				
				本次联名项目以东京奥运会为灵感，以“未来运动”为理念打造。通过设计师迥异的设计风格，呈现与众不同脑洞大开的特殊创意。每位设计师都研究了运动员和运动服装的概念，以表达其独特的运动表现。同时，每个设计师的奥运联名系列都包括有服饰和鞋款。

			</view>
		</view>
	</view>
</template>

<script>
	import voicebtn from '@/components/voicebtn.vue'
	export default {
		components:{
			voicebtn
		},
		data() {
			return {
				
			};
		},
		onLoad(id) {
			console.log(id)
		}
	}
</script>

<style lang="less">
    .content{
		padding: 30upx;
		.con-title{
			font-size: 36upx;
			font-weight: 700;
		}
		.con-voc{
			font-size: 20upx;
			display: flex;
			align-items: center;
			color: #999999;
			padding: 30upx 10upx 30upx 0;
			.con-day{
				display: flex;
				flex: 5;
			}
			.vocbtn {
				flex: 5;
				display: flex;
				flex-direction: row-reverse;
			}
		}
	}
</style>
