<template>
    <div class="pageWrapper">
        <!--左侧-->
        <div class="left" >
            <!--banner-->
            <div class="bannerBox panel">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide class="swiper-slide games">
                        <img src="../../../assets/images/banner01.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide class="swiper-slide games">
                        <img src="../../../assets/images/banner02.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide class="swiper-slide games">
                        <img src="../../../assets/images/banner03.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide class="swiper-slide games">
                        <img src="../../../assets/images/banner04.jpg" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <!--置顶-->
            <div class="stick panel">
                <div class="stick-title">博主置顶</div>
                <div class="stick-content">
                    <a href="javascript:void(0);">
                        <h1>快落の秃头女孩</h1>
                        <p>个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中。</p>
                    </a>
                </div>
            </div>
            <!--最新发布-->
            <div class="latestRelease panel">
                <div class="latestRelease-head">
                    <h3>最新发布</h3>
                </div>
                <div class="latestRelease-content">
                    <div v-for="(item,index) in latestReleaseList" class="latestReleaseList panel">
                        <a href="javascript:void(0);">{{ item.title }}</a>
                        <div class="latestReleaseList-tag">
                            <span v-for="(tag,index) in item.tag.split(',')">{{ tag }}</span>
                        </div>
                        <div class="latestReleaseList-content">
                            <p>{{ item.content }}</p>
                        </div>
                        <div class="latestReleaseList-foot">
                            <p><span class="publisher"></span><span>{{ item.publisher }}</span></p>
                            <p><span class="readNum"></span><span>阅读:{{ item.readNum }}</span></p>
                            <p><span class="comment"></span><span>评论:{{ item.comment }}</span></p>
                            <p><span class="releaseTime"></span><span>{{ item.publishTime }}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--右侧-->
        <div class="right" >
            <!--站点公告-->
            <div class="announcement panel">
                <div class="announcement-head">站点公告</div>
                <div class="announcement-content">
                    <a href="javascript:void(0);">
                        <h1>快落の秃头女孩</h1>
                        <p>个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中。</p>
                    </a>
                </div>
            </div>
            <!--热门标签-->
            <div class="hotLabel panel">
                 <div class="hotLabel-head">
                     <h3>热门标签</h3>
                 </div>
                <div class="hotLabel-content">
                     <a v-for="(item,index) in labelList" href="javascript:void(0);">{{ item.label }}</a>
                </div>
            </div>
            <!--热文推荐-->
            <div class="hotRecommended panel">
                <div class="hotRecommended-head">
                    <h3>热文推荐</h3>
                </div>
                <div class="hotRecommended-content">
                    <ul class="hotRecommendedList">
                        <li v-for="(item,index) in hotRecommendedList">
                            <a href="javascript:void(0);">{{ item.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--友情链接-->
            <div class="link panel">
                <div class="link-head">
                    <h3>友情链接</h3>
                </div>
                <div class="link-content">
                    <ul class="linkList">
                        <li v-for="(item,index) in linkList">
                            <a href="javascript:void(0);">{{ item.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--关注微信公众号-->
            <div class="link panel">
                <div class="link-head">
                    <h3>友情链接</h3>
                </div>
                <div class="link-content">
                    <img src="../../../assets/images/weixin.jpg" alt="小十一的微信号" title="关注微信么么哒">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import {ajaxUtil} from "../../../common/AjaxUtil";
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: "indexpage",
        data(){
            return{
                swiperOption: {
                    autoplay : {
                        disableOnInteraction: false, //用户操作后是否禁止自动循环
                        delay: 3000 //自动循环时间
                    }, //可选选项，自动滑动
                    speed: 2000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
                    loop:true, //循环切换
                    autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
                    scrollbar: '.swiper-scrollbar',
                    observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true, //点击分页器的指示点分页器会控制Swiper切换
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                latestReleaseList:[],
                labelList:[],
                hotRecommendedList: [],
                linkList: [
                    { title: '百度' },
                    { title: '开源中国' },
                    { title: '有乐网' },
                    { title: '新浪网' },
                    { title: '腾讯网' }
                ],
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        created() {
            this.getLatestRelease();
            this.getHotLabel();
            this.getHotRecommended();
        },
        methods: {
            //请求最新发布的数据
            getLatestRelease(){
                var sql = 'SELECT * FROM article ORDER BY publishTime desc LIMIT 6 ';
                var url = '/php/select.php?sql='+sql;
                ajaxUtil.ajaxJson(url,null,"GET",((data)=>{
                    this.latestReleaseList = data;
                }),null)
            },

            //请求热门标签
            getHotLabel(){
                var sql = 'SELECT * FROM hot_label';
                var url = '/php/select.php?sql='+sql;
                ajaxUtil.ajaxJson(url,null,"GET",((data)=>{
                    this.labelList = data;
                }),null)
            },

            //请求热门文章数据
            getHotRecommended(){
                var sql = 'SELECT * FROM article ORDER BY readNum desc LIMIT 8';
                var url = '/php/select.php?sql='+sql;
                ajaxUtil.ajaxJson(url,null,"GET",((data)=>{
                    this.hotRecommendedList = data;
                }),null)
            },
        },
    }
</script>

<style scoped lang="sass">
    .pageWrapper
        width: 100%
        height: auto
        display: flex
        justify-content: space-between
        .left
            width: 74%
            text-align: left
            .bannerBox
                .swiper-button-prev
                    background-image: url("../../../assets/images/prev.png")
                .swiper-button-next
                    background-image: url("../../../assets/images/next.png")
                img
                    width: 100%
                    height: 350px

            .stick
                width: 100%
                border: 1px solid #ddd
                position: relative
                &:hover
                    border: 1px solid  #FF5E52
                .stick-title
                    width: 86px
                    background-color: #FF5E52
                    margin: -5px 0 0 20px
                    padding: 4px 15px
                    color: #fff
                    font-size: 14px
                    border-radius: 3px
                .stick-content
                    &>a
                        display: block
                        padding: 0px 15px 15px 20px
                        text-decoration: none
                        color: #333
                        h1
                            color: #FF5E52
                            font-size: 20px
                            margin-top: 14px
                        p
                            display: -webkit-box
                            -webkit-box-orient: vertical
                            -webkit-line-clamp: 2
                            overflow: hidden
                            color: #999
            .latestRelease
                border: 1px solid #ddd
                padding-bottom: 20px
                margin-bottom: 0px !important
                .latestRelease-head
                    color: #333
                    background-color: rgba(211,211,211,0.5)
                    padding: 0px 20px
                    border-bottom: 1px solid #ddd
                    border-top-left-radius: 3px
                    border-top-right-radius: 3px
                    h3
                        line-height: 38px
                        font-size: 16px
                .latestRelease-content
                    padding: 20px 20px 0px
                    &>div
                        border: 1px solid #ddd
                        box-shadow: 0px 8px 18px rgba(0,0,0,0.06)
                        transition: all .2s ease-out
                        padding: 15px
                        &:hover
                            border: 1px solid  #FF5E52
                    .latestReleaseList
                        a
                            display: block
                            font-size: 16px
                            margin-top: 10px
                            margin-bottom: 10px
                            font-weight: 600
                            color: #333
                            background-color: transparent
                            &:hover
                                color: #337ab7
                        .latestReleaseList-tag
                            margin: 0 0 10px
                            span
                                margin-right: 10px
                                background-color: #777
                                padding: .2em .6em .3em
                                font-size: 75%
                                font-weight: 700
                                color: #fff
                                text-align: center
                                white-space: nowrap
                                vertical-align: baseline
                                border-radius: .25em
                        .latestReleaseList-content
                            p
                                line-height: 1.5
                                color: #5f5f5f
                                margin: 0 0 10px
                                display: -webkit-box
                                -webkit-box-orient: vertical
                                -webkit-line-clamp: 3
                                overflow: hidden
                        .latestReleaseList-foot
                            margin: 0 0 10px
                            font-size: 12px !important
                            p
                                display: inline-block
                                margin-right: 10px
                                span
                                    display: inline-block
                                .publisher, .readNum, .comment, .releaseTime
                                    width: 26px
                                    height: 16px
                                    background: url("../../../assets/images/user.png") no-repeat 6px 2px
                                .readNum
                                    background: url("../../../assets/images/readNum.png") no-repeat 6px 2px
                                .comment
                                    background: url("../../../assets/images/comment.png") no-repeat 6px 2px
                                .releaseTime
                                    background: url("../../../assets/images/releaseTime.png") no-repeat 6px 2px
        .right
            width: 23%
            min-height: 1px
            text-align: left
            padding-right: 1px
            &> div
                width: 100%
                height: auto
                border: 1px solid #ddd
            .announcement
                position: relative
                padding: 15px
                &:hover
                    border: 1px solid  #8EC55F
                .announcement-head
                    width: 86px
                    background-color: #8EC55F
                    margin: -20px 0 0 0
                    padding: 4px 15px
                    color: #fff
                    font-size: 14px
                    border-radius: 3px
                .announcement-content
                    &>a
                        display: block
                        text-decoration: none
                        color: #333
                        h1
                            color: #8EC55F
                            font-size: 20px
                            margin-top: 14px
                        p
                            display: -webkit-box
                            -webkit-box-orient: vertical
                            -webkit-line-clamp: 6
                            overflow: hidden
                            color: #999

            .hotLabel
                width: 100%
                .hotLabel-head
                    padding: 0 15px
                    color: #333
                    background-color: rgba(211,211,211,0.5)
                    border-bottom: 1px solid #ddd
                    border-top-left-radius: 3px
                    border-top-right-radius: 3px
                    h3
                        line-height: 38px
                        font-size: 16px
                .hotLabel-content
                    padding: 20px 15px 10px 15px
                    display: flex
                    flex-wrap: wrap
                    a
                        display: inline-block
                        margin-right: 10px
                        margin-bottom: 10px
                        background-color: #777
                        padding: .2em .6em .3em
                        font-size: 75%
                        font-weight: 700
                        color: #fff
                        border-radius: .25em
                        transition: background-color .5s
                        &:hover
                            background-color: #555
            .hotRecommended,.link
                border: 1px solid #ddd
                padding-bottom: 20px
                .hotRecommended-head,.link-head
                    color: #333
                    background-color: rgba(211,211,211,0.5)
                    padding: 0px 20px
                    border-bottom: 1px solid #ddd
                    border-top-left-radius: 3px
                    border-top-right-radius: 3px
                    h3
                        line-height: 38px
                        font-size: 16px
                .hotRecommended-content,.link-content
                    padding: 20px 15px 10px
                    .hotRecommendedList,.linkList
                        li
                            border-bottom: 1px solid #d8e6f8
                            padding: 5px 0px
                        a
                            font-size: 14px
                            color: #000
                            background-color: transparent
                            &:hover
                                color: #337ab7
            .link-content
                .linkList
                    li
                        background: #F3F3F3
                        border-radius: 50%
                        text-align: center
        .panel
            margin-bottom: 20px
            background-color: #fff
            border-radius: 4px
            -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05)
            box-shadow: 0 1px 1px rgba(0,0,0,.05)
</style>