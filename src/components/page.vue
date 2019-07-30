<template>
    <div class="page">
       <div class="next fr">»</div>
        <div class="last fr">末页</div>
        <ul class="pagingUl">
            <li>
                <a href="javascript:" class="activP">1</a>
            </li>
            <li>
                <a href="javascript:">2</a>
            </li>
            <li>
                <a href="javascript:">3</a>
            </li>
            <li>
                <a href="javascript:">4</a>
            </li>
            <li>
                <a href="javascript:">5</a>
            </li>
        </ul>
        <div class="first fr">首页</div>
        <div class="prv fr">«</div>
    </div>
</template>

<script>
    export default {
        name: "page"
    }
</script>

<style scoped lang="sass">
.page
    height: 50px
    display: table
    margin: 0 auto
    .prv:hover, .next:hover, .first:hover, .last:hover, .pagingUl li a:hover, .activP
        background-color: #000!important
        color: #fff!important
    .prv, .next
        width: 30px
        height: 30px
        text-align: center
        line-height: 30px
        cursor: pointer
        background: #fff
        padding: 0 5px
        border-radius: 5px
    .first,.last
        height: 30px
        font-size: 12px
        text-align: center
        line-height: 30px
        cursor: pointer
        background: #fff
        padding: 0 5px
        border-radius: 5px
        margin-right: 10px
    .pagingUl
        float: right
        padding: 0
        margin: 0
        list-style: none
        height: 30px
        li
            float: left
            width: 30px
            height: 30px
            background: #fff
            text-align: center
            margin-right: 5px
            border-radius: 5px
            a
                display: inline-block
                width: 30px
                height: 30px
                text-align: center
                line-height: 28px
                color: #666
                font-size: 12px
                border-radius: 5px

    .fr
        float: right

</style>