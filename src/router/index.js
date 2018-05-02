import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index'
import Service from '../pages/service'
import Consult from '../pages/consult'
import Activity from '../pages/activity'
import Personal from '../pages/personal'
import ServiceTech from '../components/service-tech'
import ServiceTechDetail from '../pages/service-tech-detail'
import ServiceNeed from '../components/service-need'
import ServicePublish from '../pages/service-publish'
import ServiceNeedDetail from '../pages/service-need-detail'
import PublishTech from '../components/publish-tech'
import PublishNeed from '../components/publish-need'
import Login from '../pages/login'
import Policy from '../pages/policy'
import Msg from '../pages/msg'
import PolicyDetail from '../pages/policy-detail'
Vue.use(Router)


export default new Router({
	
  routes: [
    {
      path: '/',
      redirect: '/index',
      meta: {
        title: '首页'
      }
    },
    {
    	path:'/index',
    	component:Index,
        meta: {
          title: '首页'
        }
    },
    {
    	path:'/service',
    	component:Service,
    	redirect:'/service/service-tech',
    	meta:{
	        title: '服务'
	    },
    	children:[
    		{
    			path:'service-tech',
    			component:ServiceTech,
      			meta: {
		        	title: '服务'
		      	}
    		},
    		{
    			path:'service-need',
    			component:ServiceNeed,
    			meta: {
		        	title: '服务'
		      	}
    		}
    		
    	]
    },
    {
    	path:'/service-tech-detail',
    	component:ServiceTechDetail,
      	meta: {
        	title: '技术详情'
      	}
    },
    {
    	path:'/service-publish',
    	component:ServicePublish,
    	redirect:'/service-publish/publish-tech',
      	meta: {
        	title: '发布技术'
      	},
      	children:[
      		{
    			path:'publish-tech',
    			component:PublishTech,
      			meta: {
		        	title: '发布技术'
		      	}
    		},
    		{
    			path:'publish-need',
    			component:PublishNeed,
      			meta: {
		        	title: '发布需求'
		      	}
    		}
      	]
    },
    {
    	path:'/service-need-detail',
    	component:ServiceNeedDetail,
      	meta: {
        	title: '需求详情'
      	}
    },
    {
    	path:'/consult',
    	component:Consult,
      	meta: {
        	title: '咨询'
      	}
    },
    {
    	path:'/policy',
    	component:Policy,
      	meta: {
        	title: '政策'
      	}
    },
    {
    	path:'/policy-detail',
    	component:PolicyDetail,
      	meta: {
        	title: '政策详情'
      	}
    },
    {
    	path:'/activity',
    	component:Activity,
      	meta: {
        	title: '活动'
      	}
    },
    {
    	path:'/msg',
    	component:Msg,
      	meta: {
        	title: '看资讯'
      	}
    },
    {
    	path:'/personal',
    	component:Personal,
      	meta: {
        	title: '我的'
      	}
    },
    {
    	path:'/login',
    	component:Login,
      	meta: {
        	title: '登录'
      	}
    }
  ]
})
