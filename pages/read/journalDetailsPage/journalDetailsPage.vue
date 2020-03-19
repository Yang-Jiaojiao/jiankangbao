<template>
	<view class="journalDetailsPage">
		<!-- 详情 -->
		<view class="header">
			<view class="top">
				<!-- 左边图片 -->
				<view class="img">
					<!-- <image src="" mode=""></image> -->
				</view>
				<!-- 右边详情 -->
				<view class="details clearFix">
					<view class="title">财经</view>
					<view class="info">
						<view>期数: 2019年8月第9期</view>
						<view>刊期: 月刊</view>
						<view>页码: 78页</view>
					</view>
					<view class="btn">
						<navigator url="../formalContentPage/formalContentPage" class="nowRead ff_bold">立即阅读</navigator>
						<navigator url="../oldList/oldList" class="oldList ff_medium">往期列表</navigator>
					</view>
					<voicebtn />
				</view>
			</view>
			<!-- 简介 -->
			<view class="introduction clearFix">
				<view class="content_info">
					<view :class="{hide:!iSinfo}">
						从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。
						<view class="btnwrpper" @click="showinfo" v-if="!iSinfo">
							<text>...</text>
							<image src="../../../static/images/read/下拉@2x.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<image @click="showinfo" v-if="iSinfo" class="hidebtn" src="../../../static/images/read/上拉@2x.png" mode="aspectFill"></image>
			</view>
		</view>
		<!-- 分割线 -->
		<view class="blank" style="height: 10rpx; width: 100%; background-color: #F7F7F7;"></view>
		<!-- 本期目录&原貌预览 -->
		<view class="directory_preview">
			<view class="title">
				<text class="ff_medium" :class="{selected:isSelected}" @click="setselected">本期目录</text>
				<text class="ff_medium" :class="{selected:!isSelected}" @click="setselected" style="margin-left: 62rpx;">原貌预览</text>
			</view>
			<!-- 目录 -->
			<journalDetailsPageDirectory v-if="isSelected" />
			<!-- 原貌预览 -->
			<journalDetailsPagePreview v-else="" />
		</view>
	</view>
</template>

<script>
	import voicebtn from '@/components/voicebtn.vue'
	import journalDetailsPageDirectory from '@/components/journalDetailsPageDirectory.vue'
	import journalDetailsPagePreview from '@/components/journalDetailsPagePreview.vue'
	export default {
		data() {
			return {
				isSelected: true,
				iSinfo: false
			};
		},
		components: {
			voicebtn,
			journalDetailsPageDirectory,
			journalDetailsPagePreview
		},
		methods: {
			setselected() { // 是否被选中
				this.isSelected = !this.isSelected
			},
			showinfo() { // 是否展开简述
				this.iSinfo = !this.iSinfo
			}
		}
	}
</script>

<style lang="less">
	.journalDetailsPage {
		.header {
			// height: 581rpx;
			height: auto;
			width: 750rpx;

			.top {
				display: flex;
				justify-content: space-between;
				height: 320rpx;
				margin: 30rpx 30rpx 0 30rpx;

				.img {
					width: 240rpx;
					height: 320rpx;
					background-color: #ccc;
					border-radius: 10rpx;
				}

				.details {
					height: 320rpx;
					width: 370rpx;
					display: flex;
					flex-direction: column;
					// justify-content: space-around;
					// 给语音按钮定位
					position: relative;

					.voicebtn {
						position: absolute;
						top: 28rpx;
						right: 0;
					}

					.title {
						font-family: 'PingFang-SC-Bold';
						font-weight: bold;
						color: #333333;
						font-size: 32rpx;
						margin-top: 24rpx;
					}

					.info {
						height: 106rpx;
						margin-top: 40rpx;
						margin-bottom: 43rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						font-family: 'PingFang-SC-Medium';
						font-weight: normal;
						color: #666666;
						font-size: 24rpx;
					}

					.btn {
						.nowRead {
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

						.oldList {
							margin-left: 40rpx;
							display: inline-block;
							font-size: 24rpx;
							color: #666666;
							width: 150rpx;
							height: 52rpx;
							background-color: #FFFFFF;
							border: 1rpx solid #999999;
							border-radius: 150rpx;
							text-align: center;
							line-height: 52rpx;
						}
					}
				}
			}

			.introduction {
				/* width: 687rpx;
				margin: 0 24rpx 29rpx 39rpx; */
				
				display: flex;
				flex-direction: column;
				padding: 30rpx;
				position: relative;
				// padding-right: 30rpx;


				.content_info {
					display: flex;
					flex-direction: column;

					view {
						text-align: justify;
						font-family: 'PingFang-SC-Medium';
						font-weight: 400;
						color: #666666;
						font-size: 24rpx;
						line-height: 32rpx;
						letter-spacing: 2rpx;
						word-break: break-word;
						.btnwrpper{
							background-color: #fff;
							display: flex;
							justify-content: flex-end;
							align-items: center;
							position: absolute;
							bottom: 30rpx;
							right: 38rpx;
							text {
								font-size: 24rpx;
								color: #666666;
							}
							image {
								// display: flex;
								// justify-content: flex-end;
								// align-items: center;
								margin-left: 30rpx;
								height: 8rpx;
								width: 16rpx;
							}
						}
						
					}


					.hide {
						word-break: break-word; //换行模式
						overflow: hidden;
						// text-overflow: ellipsis; //修剪文字
						display: -webkit-box;
						-webkit-line-clamp: 3; //此处为上限行数
						-webkit-box-orient: vertical;
					}
				}

				.hidebtn {
					height: 8rpx;
					width: 16rpx;
					// display: flex;
					// flex: 1;
					// justify-content: flex-end;
					position: absolute;
					right: 30rpx;
					bottom: 30rpx;
				}
			}

		}

		// 下部分
		.directory_preview {
			width: 100%;
			height: auto;

			.title {
				margin-top: 31rpx;
				margin-bottom: 26rpx;
				text-align: center;
				color: #666666;
				font-size: 28rpx;
				line-height: 32rpx;

				.selected {
					font-family: 'PingFang-SC-Bold';
					font-weight: bold;
					color: #333333;
					font-size: 32rpx;
					border-bottom: 8rpx solid #E9200F;
				}
			}
		}
	}
</style>
