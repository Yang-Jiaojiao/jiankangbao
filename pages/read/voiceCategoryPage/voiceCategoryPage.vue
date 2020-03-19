<template>
	<!-- 左边滑动导航 -->
	<view class="voiceCategoryPage">
		<view class="left">
			<scroll-view scroll-Y="true" class="left-scroll-Y" :style="{height: navHeight+'px'}">
				<view class="left-item" :class="{selected: currentIndex === index}" v-for="(item, index) in leftNav" :key="index"
				 @click="leftNavSelected(index)">
					<text>{{item.title}}</text>
				</view>
			</scroll-view>
		</view>

		<!-- 右边书籍 -->
		<view class="right">
			<scroll-view scroll-Y="true" class="right-scroll-Y" :style="{height: detailsHeight+'px'}">
			<view class="right-item" v-for="(item, index) in bookslist" :key="index">
				<!-- 左边书籍封面 -->
				<navigator url="../voiceDetailsPage/voiceDetailsPage">
					<view class="img clearFix">
						<!-- <image></image> -->
						<image class="logo" src="../../../static/images/read/听书标签@2x.png" mode=""></image>
					</view>
				</navigator>
				<!-- 右边详情 -->
				<view class="details">
					<view class="title ff_bold">{{item.title}}</view>
					<view class="author">艺术家：夏果果</view>
					<view class="content">
						<view class="text ff_medium">
							总时长: &nbsp;22小时35分<br>
							播放: &nbsp;155次<br>
							章节: &nbsp;63章<br>
						</view>
						<voicebtn/>
					</view>
				</view>
			</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import voicebtn from '@/components/voicebtn.vue'
	export default {
		data() {
			return {
				// 左侧导航
				leftNav: [{
						title: '全部分类'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
				],
				currentIndex: 0, // 左侧导航当前下标
				// 书籍列表
				bookslist: [{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
				],
				// 用户手机高度
				userAgentHeight: 0,
				// 元素所需高度
				navHeight:0,
				// 右边盒子所需高度
				detailsHeight: 0
			};
		},
		components: {
			voicebtn
		},
		onReady() {
			this.getUserAgentHeight()
		},
		methods: {
			// 获取用户手机高度
			getUserAgentHeight() {
				let that = this
				uni.getSystemInfo({ 
					success(res) { 
						that.userAgentHeight = res.windowHeight //windoHeight为窗口高度，主要使用的是这个
						let leftScroll = uni.createSelectorQuery().select(".left-scroll-Y"); //想要获取高度的元素名（class/id）
						leftScroll.boundingClientRect(data=>{
							let userAgentHeight = that.userAgentHeight
							that.navHeight =userAgentHeight - data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
						}).exec()
						let rightScroll = uni.createSelectorQuery().select(".right-scroll-Y");
						rightScroll.boundingClientRect(data=>{
							let userAgentHeight = that.userAgentHeight
							that.detailsHeight =userAgentHeight - data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
						}).exec()
						// console.log(that.navHeight)
						// console.log(that.detailsHeight)
					}
				})
			},
			// 点击左导航
			leftNavSelected(index) {
				// 触发选中样式
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="less">
page{
	height: 100%;
	.voiceCategoryPage {
		height: 100%;
		display: flex;
		.left {
			height: 100%;
			width: 168rpx;
			background-color: #FAFAFA;
			::-webkit-scrollbar {
			  width: 0;
			  height: 0;
			  color: transparent;
			}
			.left-scroll-Y {
	
				.left-item {
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					font-family: 'PingFang-SC-Medium';
					font-weight: normal;
					color: #333333;
					font-size: 28rpx;
					letter-spacing: 3rpx;
				}
	
				.selected {
					font-family: 'PingFang-SC-Bold';
					font-weight: bold;
					color: #E9200F;
					font-size: 28rpx;
					border-left: 4rpx solid #E9200F;
					box-sizing: border-box;
				}
			}
		}
	
		// 右边主体
		.right {
			// flex: 1;
			display: flex;
			flex-direction: column;
			margin: 42rpx 30rpx 42rpx 30rpx;
			overflow-y: auto;
			::-webkit-scrollbar {
			  width: 0;
			  height: 0;
			  color: transparent;
			}
			.right-item {
				height: 200rpx;
				width: 522rpx;
				display: flex;
				justify-content: space-between;
				margin-bottom: 28rpx;
				.img {
					width: 150rpx;
					height: 200rpx;
					background-color: #F0AD4E;
					border-radius: 10rpx;
					box-shadow: 0 4rpx 8rpx #d0d3d8;
					position: relative;
					.logo {
						width: 30rpx;
						height: 22rpx;
						position: absolute;
						left: 10rpx;
						bottom: 10rpx;
					}
				}
	
				.details {
					height: 200rpx;
					width: 345rpx;
					display: flex;
					flex-direction: column;
					.title {
						height: 29rpx;
						color: #333333;
						font-size: 30rpx;
					}
					.author {
						height: 20rpx;
						margin-top: 20rpx;
						font-size: 20rpx;
						color: #999999;
						letter-spacing: 3rpx;
					}
					.content {
						width: 342rpx;
						height: 80rpx;
						margin-top: 34rpx;
						letter-spacing: 3rpx;
						display: flex;
						align-items: flex-end;
						justify-content: space-between;
						.text {
							color: #999999;
							line-height: 30rpx;
							font-size: 20rpx;
						}
					}
				}
			}
		}
	}
}
	
</style>
