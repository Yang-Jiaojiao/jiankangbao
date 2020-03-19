<template>
    <view>
        <view class="music-img">
            <view class="music-image">
                <!-- <image class="image-icon" src=""></image> -->
            </view>
            <view class="music-msg">
                <text class="music-user">艺术家：xxx</text>
                <text class="music-chapter">章节：12465</text>
            </view>
        </view>
        <view class="music-control">
            <view class="control-progress">
                <!-- 进度条 -->
                <view class="all-slider">
                    <view :style="{width:width}" class="buffer-box"></view>
                    <view :style="{left:left}" @touchmove="sliderMove" @touchstart="sliderStart" class="time-box">00:00/00:00</view>
                    <view class="finish-box"></view>
                </view>
            </view>
            <view class="music-icon">
                <view class="chapter-list">
                    <image src="../../../static/images/read/播放列表@2x.png"></image>
                    <view style="padding-top: 12upx;">
                        章节列表
                    </view>
                </view>
                <view class="pre-chapter">
                    <image @click="prevChapter" :src="[isFirstChapter?'../../../static/images/read/上一个-无@2x.png':'../../../static/images/read/上一个@2x.png']"></image>
                </view>
                <view class="play-chapter">
                    <image @click="clickPlay" :src="[isPlay?'../../../static/images/read/暂停@2x.png':'../../../static/images/read/开始@2x.png']"></image>
                </view>
                <view class="next-chapter">
                    <image @click="nextChapter" :src="[isLastChapter?'../../../static/images/read/下一个-无@2x.png':'../../../static/images/read/下一个@2x.png']"></image>
                </view>
                <view class="set-time">
                    <image src="../../../static/images/read/定时@2x.png"></image>
                    <view style="padding-top: 12upx;">
                        定时
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    const innerAudioContext = uni.createInnerAudioContext();
    export default {
        data() {
            return {
                acrtic_id: 1, //进来的文章id
                isFirstChapter: true, // 是否是第一首
                isPlay: false, // 是否是播放状态
                isLastChapter: false, // 是否是最后一首
                timer: null, // 定时器
                currentIndex: 0, // 第几章的索引
                currentValue: 0, // 进度条的值
                duration: 0, // 总时长
                width: '80%', // 缓存条长度
                left: '10%',
                chapterList: [{
                    "item_info": {
                        "item_id": "724951",
                        "item_name": "知音（月末版）",
                        "item_src": "https://webfs.yun.kugou.com/202003181815/6737c9f21dd8fef8a9d714a906434cd4/G139/M05/0D/08/K4cBAFubfGmAD9VjAEx8M4Tj2Ks549.mp3",
                        "volume": "2020年1月第1期",
                        "cover_image": "https://pic1.183read.cc/data/magazine/58/34258/51/724951/cover_128.jpg",
                        "item_rank": "9",
                        "page_num": "66",
                        "magazine_id": "34258",
                        "click_count": "134",
                        "share_count": "98",
                        "favorite_count": "82",
                        "last_update_date": "2020-02-24",
                        "category_id": "2",
                        "description": "知音创办于1985年1月，地处琴台故地、黄鹤之乡江城武汉。2006年8月，经中宣部同意、新闻出版总署批准，成立国有独资、企业性质的“知音传媒集团”。",
                        "cycle_name": "月刊",
                        "has_audio": 1
                    }
                }, {
                    "item_info": {
                        "item_id": "724952",
                        "item_name": "知音（月末版）",
                        "item_src": "https://webfs.yun.kugou.com/202003181816/534b0eb5c7224d9b2d3e21d206c7cc96/G104/M06/02/07/qA0DAFkvxIWADw0LADv707rjJYI877.mp3",
                        "volume": "2020年1月第1期",
                        "cover_image": "https://pic1.183read.cc/data/magazine/58/34258/51/724951/cover_128.jpg",
                        "item_rank": "9",
                        "page_num": "66",
                        "magazine_id": "34258",
                        "click_count": "134",
                        "share_count": "98",
                        "favorite_count": "82",
                        "last_update_date": "2020-02-24",
                        "category_id": "2",
                        "description": "知音创办于1985年1月，地处琴台故地、黄鹤之乡江城武汉。2006年8月，经中宣部同意、新闻出版总署批准，成立国有独资、企业性质的“知音传媒集团”。",
                        "cycle_name": "月刊",
                        "has_audio": 1
                    }
                }, {
                    "item_info": {
                        "item_id": "724953",
                        "item_name": "知音（月末版）",
                        "item_src": "https://webfs.yun.kugou.com/202003181820/8bc064ceaadcff201a2bc863bca0b21b/G192/M09/1A/01/YIcBAF4hXbyAD6KQADhcZf5DG4s820.mp3",
                        "volume": "2020年1月第1期",
                        "cover_image": "https://pic1.183read.cc/data/magazine/58/34258/51/724951/cover_128.jpg",
                        "item_rank": "9",
                        "page_num": "66",
                        "magazine_id": "34258",
                        "click_count": "134",
                        "share_count": "98",
                        "favorite_count": "82",
                        "last_update_date": "2020-02-24",
                        "category_id": "2",
                        "description": "知音创办于1985年1月，地处琴台故地、黄鹤之乡江城武汉。2006年8月，经中宣部同意、新闻出版总署批准，成立国有独资、企业性质的“知音传媒集团”。",
                        "cycle_name": "月刊",
                        "has_audio": 1
                    }
                }, {
                    "item_info": {
                        "item_id": "724954",
                        "item_name": "知音（月末版）",
                        "item_src": "https://webfs.yun.kugou.com/202003181819/4e7d441edc30676fc54e21527b949f12/G209/M0A/15/15/sZQEAF5l_sCAFvkYADKkPg31zNo875.mp3",
                        "volume": "2020年1月第1期",
                        "cover_image": "https://pic1.183read.cc/data/magazine/58/34258/51/724951/cover_128.jpg",
                        "item_rank": "9",
                        "page_num": "66",
                        "magazine_id": "34258",
                        "click_count": "134",
                        "share_count": "98",
                        "favorite_count": "82",
                        "last_update_date": "2020-02-24",
                        "category_id": "2",
                        "description": "知音创办于1985年1月，地处琴台故地、黄鹤之乡江城武汉。2006年8月，经中宣部同意、新闻出版总署批准，成立国有独资、企业性质的“知音传媒集团”。",
                        "cycle_name": "月刊",
                        "has_audio": 1
                    }
                }, {
                    "item_info": {
                        "item_id": "724955",
                        "item_name": "知音（月末版）",
                        "item_src": "https://webfs.yun.kugou.com/202003181815/6737c9f21dd8fef8a9d714a906434cd4/G139/M05/0D/08/K4cBAFubfGmAD9VjAEx8M4Tj2Ks549.mp3",
                        "volume": "2020年1月第1期",
                        "cover_image": "https://pic1.183read.cc/data/magazine/58/34258/51/724951/cover_128.jpg",
                        "item_rank": "9",
                        "page_num": "66",
                        "magazine_id": "34258",
                        "click_count": "134",
                        "share_count": "98",
                        "favorite_count": "82",
                        "last_update_date": "2020-02-24",
                        "category_id": "2",
                        "description": "知音创办于1985年1月，地处琴台故地、黄鹤之乡江城武汉。2006年8月，经中宣部同意、新闻出版总署批准，成立国有独资、企业性质的“知音传媒集团”。",
                        "cycle_name": "月刊",
                        "has_audio": 1
                    }
                }]
            };
        },
        methods: {
            // 初始化播放器
            initPlayer(index) {
                innerAudioContext.src = this.chapterList[index].item_info.item_src
                if (innerAudioContext.src.length !== 0) {
                    this.isPlay = true
                    innerAudioContext.play()
                    var times;
                    innerAudioContext.onCanplay(_ => {
                        innerAudioContext.duration
                        times = setTimeout(function() {
                            // console.log(innerAudioContext.duration, innerAudioContext)
                        }, 500)
                        console.log(times)
                    })
                    innerAudioContext.offCanplay(function() {
                        clearTimeout(times)
                        // console.log(innerAudioContext.duration, innerAudioContext)
                    })

                } else {
                    new Error('没有资源')
                }
                this.isChapter()



            },
            // 判断是否是第一章或者最后一章
            isChapter() {
                if (this.chapterList[this.currentIndex]) {
                    // 判断是否是第一章或最后一章
                    this.isFirstChapter = this.currentIndex === 0 ? true : false
                    this.isLastChapter = this.currentIndex === this.chapterList.length - 1 ? true : false
                } else {
                    new Error("章节不存在")
                }
            },
            // 点击播放功能
            clickPlay() {
                // 歌曲暂停时
                if (this.isPlay) {
                    this.isPlay = !this.isPlay
                    innerAudioContext.pause()
                    // innerAudioContext.destroy()
                } else {
                    this.isPlay = !this.isPlay
                    innerAudioContext.play()
                }

            },
            // 上一章
            prevChapter() {
                /* if () {
                    
                } */
                if (this.currentIndex === 0) {
                    uni.showToast({
                        title: "已经是第一章了~"
                    })
                } else {
                    --this.currentIndex
                    console.log(this.currentIndex)
                    this.initPlayer(this.currentIndex)
                }
            },
            // 下一章
            nextChapter() {
                if (this.currentIndex === this.chapterList.length - 1) {
                    uni.showToast({
                        title: "已经是最后一章了~"
                    })
                } else {
                    ++this.currentIndex
                    console.log(this.currentIndex)
                    this.initPlayer(this.currentIndex)
                }
            },
            // 触摸进度条时
            sliderStart (e) {
                console.log(e.changedTouches[0])
            },
            sliderMove (e) {
                console.log(e.changedTouches[0])
            },
        },
        onReady() {
            let indx = 2;
            this.currentIndex = indx
            this.initPlayer(this.currentIndex)
        },
        onLoad() {
            // this.initPlayer()

        }
    }
</script>

<style lang="less">
    /* 书籍封面 */
    .music-img {
        display: flex;
        flex-direction: column;
        height: 60%;
        padding-top: 50upx;

        .music-image {
            box-sizing: border-box;
            display: flex;
            width: 620upx;
            height: 620upx;
            margin: 0 auto;
            background: url('~@/static/images/read/装饰@2x.png') no-repeat;
            background-size: cover;

            .image-icon {
                width: 620upx;
                height: 620upx;
            }
        }

        .music-msg {
            display: flex;
            padding: 60upx 0 120upx 0;
            font-size: 28upx;

            .music-user,
            .music-chapter {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
            }

            .music-user {
                padding-left: 100upx;
                box-sizing: border-box;
            }
        }
    }

    /* 进度条和播放控制 */
    .music-control {
        padding: 0 35upx 30upx 35upx;
        
        /* 进度条 */
        .control-progress {
            .all-slider {
                width: 100%;
                position: relative;
                height: 2upx;
                background-color: #FFD5D1;
                z-index: 1;
                .buffer-box {
                    position: absolute;
                    width: 50%;
                    top: 0;
                    left: 0;
                    height: 2upx;
                    background-color: #FF9087;
                    z-index: 10;
                }
                .time-box {
                    position: absolute;
                    top: -10upx;
                    left: 25%;
                    width: 120upx;
                    height: 22upx;
                    text-align: center;
                    line-height: 22upx;
                    font-size: 18upx;
                    color: #FFFFFF;
                    background-color: #E9200F;
                    border-radius: 11upx;
                    z-index: 999;
                }
                .finish-box {
                    position: absolute;
                    width: 25%;
                    top: 0;
                    left: 0;
                    height: 2upx;
                    background-color: #E9200F;
                    z-index: 998;
                }
            }
        }

        /* 播放控制 */
        .music-icon {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 50upx 0;

            .chapter-list {
                font-size: 24upx;
                color: #666666;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                image {
                    width: 44upx;
                    height: 38upx;
                    // margin: 0 auto;
                }
            }

            .pre-chapter {
                image {
                    width: 31upx;
                    height: 32upx;
                }
            }

            .play-chapter {
                image {
                    width: 130upx;
                    height: 130upx;
                }
            }

            .next-chapter {
                image {
                    width: 31upx;
                    height: 32upx;
                }
            }

            .set-time {
                font-size: 24upx;

                color: #666666;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                image {
                    width: 36upx;
                    height: 37upx;
                }
            }
        }
    }
</style>
