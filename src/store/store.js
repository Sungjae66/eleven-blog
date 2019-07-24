import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count:1,
}

const mutations={
    add(state,n){
        state.count += n;
    },

    reduce(state,n){
        state.count -= n;
    },
}
export default new Vuex.Store({
    state,  //状态对象
    mutations, //改变状态的一组方法（同步）
});