<template>
    <view>
        <view class="serach">
            <view class="search-input-box">
                <view class="search-input">
                    <input type="text" placeholder-class="palceholder" v-model="inputVal" placeholder="请输入关键字">
                </view>
                <view class="search-text" @click="clickSearch" v-show="searchFlag">
                    搜索
                </view>
                <view class="search-text" @click="clickCancel" v-show="!searchFlag">
                    取消
                </view>
            </view>
            <view class="search-history" v-if="searchFlag">
                <view class="search-recent-box">
                    <view class="search-recent">
                        最近搜索
                    </view>
                    <view class="search-delete" @click="clickDelete">
                        删除
                    </view>
                </view>
                <view class="search-history-btn">
                    <view class="search-botton" v-for="(item, index) in historyResult" :key="index" @click="selectHistory(index)">
                        {{ item }}
                    </view>
                </view>
            </view>
            <view class="search-list" v-else>
                <view class="search-list-box">
                    <view class="search-dir">
                        <view :class="['search-bar',isActive==0?'active':'']" @click="isActive = 0">文章</view>
                        <view :class="['search-bar',isActive==1?'active':'']" @click="isActive = 1">期刊</view>
                        <view :class="['search-bar',isActive==2?'active':'']" @click="isActive = 2">听书</view>
                    </view>
                </view>

                <!-- 文章筛选 -->
                <view class="article" v-show="isActive === 0">
                    <view class="article-result">
                        共找到18条结果
                    </view>
                    <uni-list>
                        <uni-list-item class="search-art-list" v-for="(item, index) in resultArr" :key="index">
                            <text class="" v-for="(item2, ind) in item" :key="ind">
                                <text v-if="item2.key" style="color: #FF0000;">{{item2.str}}</text>
                                <text v-else>{{item2.str}}</text>
                            </text>
                        </uni-list-item>
                    </uni-list>

                </view>
                <!-- 期刊选项 -->
                <view class="periodical" v-show="isActive === 1">
                    <view class="article-result">
                        共找到18条结果
                    </view>
                    <view class="right">
                        <scroll-view scroll-Y="true" class="right-scroll-Y" @scrolltolower="nextPage" lower-threshold=120>
                            <view class="right-item" v-for="(item, index) in perList" :key="index">
                                <!-- 左边书籍封面 -->
                                <view class="img" @click="toDetail">
                                    <!-- <image :src="" mode="aspectFill"></image> -->
                                </view>
                                <!-- 右边详情 -->
                                <view class="details">
                                    <view class="title">中国财经</view>
                                    <view class="content">
                                        {{item.perCon}}
                                    </view>
                                </view>
                            </view>
                            <view class="none" v-if="flag">
                                ---没有更多了---
                            </view>
                        </scroll-view>
                    </view>
                </view>
                <!-- 听书 -->
                <view class="listen-book" v-show="isActive === 2">
                    <view class="article-result">
                        共找到18条结果
                    </view>
                    <view class="right">
                        <scroll-view scroll-Y="true" class="right-scroll-Y" :style="{height: detailsHeight+'px'}">
                            <view class="right-item" v-for="(item, index) in bookslist" :key="index">
                                <!-- 左边书籍封面 -->
                                <navigator url="../voiceDetailsPage/voiceDetailsPage">
                                    <view class="img clearFix">
                                        <!-- <image></image> -->
                                        <image class="logo" src="../../static/images/read/听书标签@2x.png" mode=""></image>
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
                                    </view>
                                </view>
                            </view>
                        </scroll-view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                flag: false,
                searchFlag: true,
                // searchBtn: "搜索",
                inputVal: "",
                isActive: 0,
                resultArr: [],
                historyResult: [],
                searchList: [
                    "政府网_中中央人民政府门户网站",
                    "政府网_中央人民政府门户网站",
                    "中国政府网政府网政府网政府网政府网政府网政府网政府网政府网政府网政"
                ],
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
                ],
                perList: [{
                        imgsrc: "",
                        perCon: "秉承“独立立场、独家报道、独到见解”的理念，《财经》全面观察并追踪中国经济改革的重大举措、政府高层...秉承“独立立场、独家报道、独到见解”的理念，《财经》全面观察并追踪中国经济改革的重大举措、政府高层..."
                    },
                    {
                        imgsrc: "",
                        perCon: "秉承“独立立场、独家报道、独到见解”的理念，《财经》全面观察并追踪中国经济改革的重大举措、政府高层...秉承“独立立场、独家报道、独到见解”的理念，《财经》全面观察并追踪中国经济改革的重大举措、政府高层..."
                    },
                    {
                        imgsrc: "",
                        perCon: "秉承“独立立场、独家报道、独到见解”的理念，《财经》全面观察并追踪中国经济改革的重大举措、政府高层...秉承“独立立场、独家报道、独到见解”的理念，《财经》全面观察并追踪中国经济改革的重大举措、政府高层..."
                    },
                    {
                        imgsrc: "",
                        perCon: "秉承“独立立场、独家报道、独到见解”的理念，《财经》全面观察并追踪中国经济改革的重大举措、政府高层...秉承“独立立场、独家报道、独到见解”的理念，《财经》全面观察并追踪中国经济改革的重大举措、政府高层..."
                    }
                ]
            }
        },
        onLoad() {
            this.searchHistor()
        },
        methods: {
            // 点击搜索
            clickSearch() {
                // 判断输入框是否有值
                if (this.isEmpty(this.inputVal)) {
                    this.searchFlag = false
                    // 如果是搜索历史记录的
                    if (this.historyResult.indexOf(this.inputVal) > -1) {
                        this.historyResult.splice(this.historyResult.indexOf(this.inputVal), 1)
                        this.historyResult.unshift(this.inputVal)
                    } else {
                        this.historyResult.unshift(this.inputVal)
                    }
                    try{
                        uni.setStorageSync('search_history', JSON.stringify(this.historyResult))
                    }catch(e){
                        console.log(e)
                    }
                } else {
                    this.searchFlag = true
                }
                // 处理关键字颜色变红
                let searchResult = []
                for (let i = 0; i < this.searchList.length; i++) {
                    if (this.searchList[i].indexOf(this.inputVal) > -1) {
                        searchResult.push(this.procesData(this.inputVal, this.searchList[i]))
                    }
                }
                this.resultArr = searchResult
                this.procesData(this.inputVal, this.searchList)
            },
            // 判断输入字符串是否为空
            isEmpty (test) {
                /* 给String原型链对象添加方法trim */
                if (!String.prototype.trim) {
                  String.prototype.trim = function () {
                    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                  };
                }
                let str = test.trim();
                if (str.length === 0) {
                    return false
                } else {
                    return test
                }
            },
            // 查找字符串里是否有关键词
            procesData(key, word) {
                let idx = word.indexOf(key)
                let strArr = []
                if (idx > -1) {
                    if (idx === 0) {
                        strArr = this.procesData(key, word.substr(key.length))
                        strArr.unshift({
                            key: true,
                            str: key
                        })
                        return strArr
                    }
                    if (idx > 0) {
                        strArr = this.procesData(key, word.substr(idx))
                        strArr.unshift({
                            key: false,
                            str: word.substring(0, idx)
                        })
                        return strArr
                    }
                }
                return [{
                    key: false,
                    str: word
                }]
            },
            // 获取本地搜索记录
            searchHistor () {
                try{
                    this.historyResult = JSON.parse(uni.getStorageSync('search_history'))
                }catch(e){
                    //TODO handle the exception
                    console.log(e)
                }
            },
            // 点击近期搜索的函数
            selectHistory (i) {
                this.inputVal = this.historyResult[i]
            },
            // 点击取消
            clickCancel() {
                this.searchFlag = true
                this.inputVal = ""
                this.searchHistor()
            },
            // 清除历史记录
            clickDelete () {
                try{
                    uni.setStorageSync('search_history', JSON.stringify([]))
                }catch(e){
                    console.log(e)
                }
                this.searchHistor()
            },
            // 到底部加载下一页
            nextPage() {
                // 防抖
                setTimeout(_ => {
                    if (this.page_num === this.total_page_num) {
                        uni.hideLoading()
                        return this.flag = true
                    } else {
                        this.page_num++
                        this.getBooksList(this.use_all)
                    }
                }, 500)
            },
            // 跳转到详情页
            toDetail(id) {
                uni.navigateTo({
                    url: `../journalDetailsPage/journalDetailsPage?id=${id}`
                })
            }

        },
        watch: {
            inputVal(newVal) {
                if(newVal === ""){
                this.searchFlag = true
                }
            },
            /* historyResult () {
                console.log(this.historyResult)
            } */
        }
    }
</script>

<style lang="less">
    page {
        background-color: #EEEEEE;

        .serach {
            display: block;

            .search-input-box {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10upx 0;
                background-color: #FFFFFF;

                .search-input {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 600upx;
                    border-radius: 33upx;
                    height: 66upx;
                    background-color: #eee;

                    .palceholder {
                        color: #999999;
                        font-size: 26upx;
                    }
                }

                .search-text {
                    font-size: 30upx;
                    padding-left: 30upx;
                }
            }

            .search-recent-box {
                display: flex;
                padding: 50upx 30upx 10upx 30upx;
                justify-content: space-between;
                color: #333333;
                font-size: 32upx;
                font-weight: bold;
            }

            .search-history-btn {
                display: flex;
                flex-wrap: wrap;
                padding: 8upx 30upx 0 30upx;
                box-sizing: border-box;

                .search-botton {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1upx solid #D2D2D2;
                    background-color: #FFFFFF;
                    border-radius: 30upx;
                    height: 60upx;
                    box-sizing: border-box;
                    margin: 10upx 20upx 10upx 0;
                    padding: 18upx 20upx;
                    font-size: 26upx;
                    color: #666666;
                }
            }

            .search-list {
                .search-list-box {
                    display: flex;
                    padding: 20upx 20upx 20upx 0;
                    box-sizing: border-box;

                    .search-dir {
                        display: flex;
                        width: 60%;
                        justify-content: space-around;

                        .search-bar {
                            font-size: 36upx;
                            text-align: center;
                            color: #000;
                            height: 80upx;
                            line-height: 80upx;
                        }

                        .active {
                            color: #E9200F;
                            border-bottom: 6upx solid #E9200F;
                        }
                    }
                }

                /* 文章列表 */
                .article {
                    padding: 0 30upx;

                    .article-result {
                        font-size: 24upx;
                        color: #666666;
                    }

                    .search-art-list {
                        display: block;
                        padding: 40upx 0;
                        line-height: 48upx;
                        font-size: 30upx;
                        color: #333333;
                        border-bottom: 1upx solid #BFBFBF;

                        .red {
                            color: #FF0000;
                        }
                    }

                    .search-art-list:last-child {
                        border: none;
                    }
                }

                /* 期刊列表 */
                .periodical {
                    padding: 0 30upx;

                    .right::-webkit-scrollbar {
                        display: none;
                    }

                    .right {
                        // flex: 1;
                        display: flex;
                        flex-direction: column;
                        overflow-y: auto;

                        ::-webkit-scrollbar {
                            width: 0;
                            height: 0;
                            color: transparent;
                        }

                        .right-item {
                            display: flex;
                            margin: 14upx 0;

                            .img {
                                display: flex;
                                flex: 1;
                                width: 150upx;
                                height: 200upx;
                                border-radius: 10upx;
                                // image {
                                //     width: 150upx;
                                //     height: 200upx;
                                //     box-shadow: 0 4upx 8upx #d0d3d8;
                                // }
                            }

                            .details {
                                height: 200upx;
                                width: 510upx;
                                display: flex;
                                flex-direction: column;
                                // justify-content: center;
                                padding-left: 30upx;

                                .title {
                                    padding-bottom: 30upx;
                                    box-sizing: border-box;
                                    font-family: 'PingFang-SC-Bold';
                                    font-weight: bold;
                                    color: #333333;
                                    font-size: 30upx;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 1;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }

                                .content {
                                    // line-height: 30upx;
                                    color: #999999;
                                    font-size: 20upx;
                                    font-family: 'PingFang-SC-Medium';
                                    font-weight: normal;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 3;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                            }
                        }

                        .none {
                            text-align: center;
                            color: #999999;
                            font-size: 24upx;
                        }
                    }
                }

                .listen-book {
                    .article-result {
                        padding-left: 30upx;
                    }
                    .right {
                        // flex: 1;
                        display: flex;
                        flex-direction: column;
                        margin: 42upx 30upx 42upx 30upx;
                        overflow-y: auto;

                        ::-webkit-scrollbar {
                            width: 0;
                            height: 0;
                            color: transparent;
                        }

                        .right-item {
                            height: 200upx;
                            width: 522upx;
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 28upx;

                            .img {
                                width: 150upx;
                                height: 200upx;
                                background-color: #F0AD4E;
                                border-radius: 10upx;
                                box-shadow: 0 4upx 8upx #d0d3d8;
                                position: relative;

                                .logo {
                                    width: 30upx;
                                    height: 22upx;
                                    position: absolute;
                                    left: 10upx;
                                    bottom: 10upx;
                                }
                            }

                            .details {
                                height: 200upx;
                                width: 345upx;
                                display: flex;
                                flex-direction: column;

                                .title {
                                    height: 29upx;
                                    color: #333333;
                                    font-size: 30upx;
                                }

                                .author {
                                    height: 20upx;
                                    margin-top: 20upx;
                                    font-size: 20upx;
                                    color: #999999;
                                    letter-spacing: 3upx;
                                }

                                .content {
                                    width: 342upx;
                                    height: 80upx;
                                    margin-top: 34upx;
                                    letter-spacing: 3upx;
                                    display: flex;
                                    align-items: flex-end;
                                    justify-content: space-between;

                                    .text {
                                        color: #999999;
                                        line-height: 30upx;
                                        font-size: 20upx;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
