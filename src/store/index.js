import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        show:true
    },
    mutations:{
    	tabFooter(state){
    		state.show = !state.show;
    	}
    }
})