<template>
    <div class="section">
        <!--头部-->
        <div class="head">
            <div class="headSection">
                <div class="logo">
                    <img src="../../assets/images/logo.png" alt="logo">
                </div>
                <ul>
                    <router-link
                            :key="index" v-for="(navItem,index) in menu"
                            :to="navItem.path" tag="li"
                            :class=" activeRouteName == navItem.name ? 'actived' : '' "
                            @click.native="changeActiveRouteName(navItem.name,index)">
                        {{navItem.name}}
                    </router-link>
                </ul>
                <div class="searchBox">
                     <div class="search">
                         <input type="text" placeholder="search">
                         <button>搜索</button>
                     </div>
                </div>
            </div>
        </div>
        <!--主体内容-->
        <div class="content">
            <router-view></router-view>
        </div>
        <!--底部-->
        <div class="foot">
            <div>
                <p>Copyright © 2017-2020, www.wfyvv.com. All Rights Reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        name: 'index',
        data () {
            return {
                menu:[
                    { name: '首页', path: '/indexpage'},
                    { name: '技术文章', path: '/technicalarticles'},
                    { name: '生活日记', path: '/lifediary'},
                    { name: '关于', path: '/about'},
                ],
                activeRouteName: '首页',
            }
        },
        mounted(){
            $(function(){
                var ActiveRouteIndex = sessionStorage.getItem("ActiveRouteIndex");
                $(".head ul li").eq(ActiveRouteIndex).addClass("actived").siblings().removeClass("actived");
            })
        },
        methods:{
            changeActiveRouteName(name,idx){
                this.activeRouteName = name;
                sessionStorage.setItem('ActiveRouteIndex',idx);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    .section
        min-width: 1200px
        min-height: 757px
        position: relative
        .head
            width: 100%
            min-width: 1200px
            height: 55px
            position: fixed
            z-index: 999
            background: #222
            .headSection
                width: 75%
                margin: 0 auto
                display: flex
                justify-content: space-between
                align-items: center
                .logo
                    width: 160px
                ul
                    width: 60%
                    height: 55px
                    display: flex
                    color: #eee
                    li
                        flex: 1
                        line-height: 55px
                        font-size: 16px
                        cursor: pointer
                        &:hover
                            background-color: #804040
                            opacity: 0.4
                            color: #ffffff
                            font-weight: bolder

                    .actived
                        color: #009393
                        font-weight: bolder
                .searchBox
                    width: 250px
                    .search
                        display: flex
                        justify-content: center
                        input
                            width: 200px
                            height: 30px
                            border: 1px solid #ddd
                            border-top-left-radius: 3px
                            border-bottom-left-radius: 3px
                        button
                            width: 60px
                            height: 30px
                            border: 1px solid #ddd
                            border-top-right-radius: 3px
                            border-bottom-right-radius: 3px
                            background-color: #DEDBDB
                            font-size: 14px
        .content
            width: 75%
            min-height: 707px
            padding: 75px 0 0
            margin: 0 auto 20px
            background-color: rgba(240,240,240,1)
            border-bottom-left-radius: 6px
            border-bottom-right-radius: 6px
        .foot
            width: 100%
            min-width: 1200px
            height: 50px
            text-align: center
            background: #414141
            color: #b2bcc5
            font-size: 14px
            &> div
                width: 75%
                height: 100%
                line-height: 50px
                margin: 0 auto
</style>
