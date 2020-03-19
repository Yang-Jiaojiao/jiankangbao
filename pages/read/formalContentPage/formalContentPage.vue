<template>
	<view>
	<view class="formalContentPage">
		<view class="header">
			<view class="title ff_bold">中国国际时装周2020春夏邀您赴一场与时尚的浪漫约会</view>
			<view class="subtitle">
				<view class="left ff_medium">《读者》2019年9月第17期</view>
				<voicebtn/>
			</view>
		</view>
		<!-- 正文 -->
		<view class="main">
			<view class="img"></view>
			<view class="content ff_medium">
				文章，1984年6月26日出生于陕西省西安市，中国内地男演员、导演。2006年毕业于中央戏剧学院表演系。
				2004年参演电视剧《与青春有关的日子》，开始在影视圈崭露头角 [1]  。2005年拍摄古装剧《锦衣卫》。2007年主演赵宝刚导演的青春剧《奋斗》； [2]  同年，主演首部电影《走着瞧》。2008年主演滕华涛执导的电视剧《蜗居》，饰演80后城市青年小贝。 [1]  [3]  2009年，在电影《海洋天堂》中扮演自闭症患者王大福；同年参演抗战题材的电视剧《雪豹》 [4]  。2011年，主演的电视剧《裸婚时代》在各大卫视播出； [5]  2011年-2012年连续2年获得北京大学生电影节 [6-7]  最受大学生欢迎男演员奖。2012年，凭借电影《失恋33天》获得第31届大众电影百花奖最佳男主角奖； [8]  同年成立自己经营的北京君竹影视文化有限公司，并导演第一部影视作品《小爸爸》。2013年2月，主演的电影《西游·降魔篇》在全国上映。 [9] 
				2014年3月28日，主演的中韩合资文艺爱情片《我在路上最爱你》在全国上映。2014年12月18日，在姜文执导的动作喜剧片《一步之遥》中扮演武七一角。 [10]  2016年，主演电视剧《少帅》，饰演张学良 [11]  ；主演电视剧《剃刀边缘》 [12]  。7月15日导演的电影《陆垚知马俐》上映。 [13] 
			</view>
		</view>
	</view>
	<!-- 前进后退按钮 -->
	<btn-previous-next/>
	</view>
</template>

<script>
	import voicebtn from '@/components/voicebtn.vue'
	import btnPreviousNext from '@/components/btnPreviousNext.vue'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			voicebtn, btnPreviousNext
		}
	}
</script>

<style lang="less">
.formalContentPage {
	width: 690rpx;
	margin: 0 auto;
	.header{
		margin-top: 30rpx;
		margin-bottom: 29rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title {
			color: #333333;
			font-size: 36rpx;
			line-height: 48rpx;
			letter-spacing: 3rpx;
		}
		.subtitle{
			margin-top: 30rpx;
			display: flex;
			justify-content: space-between;
			.left{
				color: #999999;
				font-size: 20rpx;
				letter-spacing: 3rpx;
				line-height: 48rpx;
			}
		}
	}
	
	// 正文
	.main{
		.img{
			height: 420rpx;
			width: 690rpx;
			background-color: #ccc;
			border-radius: 10rpx;
		}
		.content{
			width: 690rpx;
			height: 894rpx;
			margin-top: 30rpx;
			margin-bottom: 57rpx;
			color: #333333;
			font-size: 30rpx;
			line-height: 48rpx;
			letter-spacing: 3rpx;
			overflow: hidden;
		}
	}
}
</style>
