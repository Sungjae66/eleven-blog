<template>
    <div class="article">
        <!--头部-->
        <div class="article-head">
            <ol class="article-head-left">
                <li><a @click="toIndex">首页</a></li>
                <li class="active">文章</li>
            </ol>
            <div class="article-head-right">我们长路漫漫，只因学无止境。</div>
        </div>
        <!--中间内容-->
        <div class="article-content">
            <!--左侧-->
            <div class="left" >
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
                                <p><span class="releaseTime"></span><span>{{ item.releaseTime }}</span></p>
                            </div>
                        </div>
                    </div>
                    <!--底部分页-->
                    <div class="latestRelease-foot">
                        <page></page>
                    </div>
                </div>
            </div>
            <!--右侧-->
            <div class="right" >
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
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../../../store/store'
    import page from '../../page'
    export default {
        name: "technicalarticles",
        components:{
            page,
        },
        data(){
            return{
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
                        releaseTime: '2018-09-12',
                    },
                    {
                        title: 'Java 工具类--学习篇',
                        tag: 'java',
                        content: '链接一：http://www.open-open.com/lib/view/open1403600391905.html链接二：http://www.360doc.com/content/13/0520/11/1722212_286734557.shtml链接三：https://my.oschina.net/u/1453975/blog/529521链接四：http://blog.csdn.net/u/1453975/blog/529521',
                        publisher: 'admin',
                        readNum: '621',
                        comment: '89',
                        releaseTime: '2018-05-25',
                    },
                ],
                hotRecommendedList: [
                    { title: '排序算法之冒泡排序 － java实现' },
                    { title: '快速搭建基于二进制日志文件的 mysql 复制' },
                    { title: 'web 服务器负载均衡教程，快速搭建高可用服务器集群' },
                    { title: '使用 redis 和 spring-session 实现 tomcat、glassfish 等 web 服务器集群 session 共享' },
                    { title: '使用 Nginx 实现 tomcat、glassfish 等 web 服务器负载均衡' },
                    { title: 'mysql 复制（replication）基础概念和应用场景简介' },
                    { title: 'redis 单节点在 Linux 生产环境的安装和简单配置' },
                    { title: '使用 jQuery 的 val() 方法来获取以及设置表单元素值' },
                    { title: '使用 jQuery 的 removeProp() 方法来删除元素的特性（property）' },
                    { title: '使用 jQuery 的 prop() 方法来获取以及设置元素的特性（property）' }
                ],
                linkList: [
                    { title: '百度' },
                    { title: '开源中国' },
                    { title: '有乐网' },
                    { title: '新浪网' },
                    { title: '腾讯网' }
                ],
            }
        },
        methods: {
            //跳转至首页
            toIndex(){
                this.$router.push({ path: '/' });
            },
        },
    }
</script>

<style scoped lang="sass">
.article
    width: 100%
    .article-head
        display: flex
        justify-content: space-between
        height: 40px
        border-bottom: 1px solid #337ab7
        padding: 8px 15px
        margin-bottom: 20px
        background-color: #f5f5f5
        border-radius: 4px
        .article-head-left
            &> li
                display: inline-block
                cursor: pointer
                a
                    color: #333
                    background-color: transparent
            .active
                color: #777
            &>li+li:before
                padding: 0 5px
                color: #ccc
                content: "/\00a0"
            &>li+li:before,&>li+li:after
                -webkit-box-sizing: border-box
                -moz-box-sizing: border-box
                box-sizing: border-box
        .article-head-right
            color: #999
            font-size: 12px
            line-height: 40px
            height: 40px

    .article-content
        width: 100%
        height: auto
        display: flex
        justify-content: space-between
        .left
            width: 74%
            text-align: left
            .latestRelease
                border: 1px solid #ddd
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
                .latestRelease-foot
        .right
            width: 23%
            min-height: 1px
            text-align: left
            padding-right: 1px
            &> div
                width: 100%
                height: auto
                border: 1px solid #ddd
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