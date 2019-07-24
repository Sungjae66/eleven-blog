<template>
    <div>
        <p>技术文章</p>
        <h3>{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="$store.commit('reduce',5)">-</button>
        </p>
    </div>
</template>

<script>
    import store from '@/store/store'
    export default {
        name: "technicalarticles",
        data(){
            return{

            }
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        },
    }
</script>

<style scoped>

</style>