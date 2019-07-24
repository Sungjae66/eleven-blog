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
                            <span class="publisher">{{ item.publisher }}</span>
                            <span class="readNum">{{ item.readNum }}</span>
                            <span class="comment">{{ item.comment }}</span>
                            <span class="releaseTime">{{ item.releaseTime }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--右侧-->
        <div class="right" >

        </div>
    </div>
</template>

<script>
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
                latestReleaseList:[
                    {
                        title: 'wfyvv.com',
                        tag: 'UUID,java',
                        content: '个人网站正在建设中。。。',
                        publisher: 'admin',
                        readNum: '666',
                        comment: '28',
                        releaseTime: '2019-05-13',
                    },
                    {
                        title: '使用 Nginx 实现 tomcat、glassfish 等 web 服务器负载均衡',
                        tag: 'Nginx,tomcat负载均衡',
                        content: '1.web服务器负载均衡简介web服务器负载均衡是指将多台可用单节点服务器组合成web服务器集群，然后通过负载均衡器将客户端请求均匀的转发到不同的单节点web服务器上，从而增加整个web服务器集群的吞吐量。',
                        publisher: 'admin',
                        readNum: '1003',
                        comment: '2',
                        releaseTime: '2019-03-16',
                    },
                    {
                        title: '32位的UUID生成方法总结',
                        tag: 'UUID,java',
                        content: '在学习过程中，我们常常会用到ID，那么有哪些常用的 ID 生成方式，你知道吗？通过 java.util.UUID（终态类）生成',
                        publisher: 'admin',
                        readNum: '210',
                        comment: '19',
                        releaseTime: '2019-01-15',
                    },
                    {
                        title: 'Java 工具类--学习篇',
                        tag: 'java',
                        content: '链接一：http://www.open-open.com/lib/view/open1403600391905.html链接二：http://www.360doc.com/content/13/0520/11/1722212_286734557.shtml链接三：https://my.oschina.net/u/1453975/blog/529521链接四：http://blog.csdn.net/u/1453975/blog/529521',
                        publisher: 'admin',
                        readNum: '621',
                        comment: '89',
                        releaseTime: '2018-11-06',
                    },
                    {
                        title: '32位的UUID生成方法总结',
                        tag: 'UUID,java',
                        content: '在学习过程中，我们常常会用到ID，那么有哪些常用的 ID 生成方式，你知道吗？通过 java.util.UUID（终态类）生成',
                        publisher: 'admin',
                        readNum: '210',
                        comment: '19',
                        releaseTime: '2019-01-15',
                    },
                    {
                        title: 'Java 工具类--学习篇',
                        tag: 'java',
                        content: '链接一：http://www.open-open.com/lib/view/open1403600391905.html链接二：http://www.360doc.com/content/13/0520/11/1722212_286734557.shtml链接三：https://my.oschina.net/u/1453975/blog/529521链接四：http://blog.csdn.net/u/1453975/blog/529521',
                        publisher: 'admin',
                        readNum: '621',
                        comment: '89',
                        releaseTime: '2018-11-06',
                    },
                ]
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
    }
</script>

<style scoped lang="sass">
    .pageWrapper
        width: 100%
        height: auto
        display: flex
        .left
            width: 70%
            text-align: left
            .bannerBox
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
                    //background-color: rgba(255,245,238,0.5)
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
                            span
                                margin-right: 10px
                                .publisher
                                    display: inline-block
                                    background: url("../../../assets/images/user.png")
        .right
            width: 30%
            background-color: rgba(255,228,225,0.5)

        .panel
            margin-bottom: 20px
            background-color: #fff
            border-radius: 4px
            -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05)
            box-shadow: 0 1px 1px rgba(0,0,0,.05)
</style>