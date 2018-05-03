import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index'
import Service from '../pages/service'
import Consult from '../pages/consult'
import Activity from '../pages/activity'
import ActivityDetail from '../pages/activity-detail'
import ActivityEnroll from '../pages/activity-enroll'
import Personal from '../pages/personal'
import PersonalMsg from '../pages/personal-msg'
import PersonalMsgDetail from '../pages/personal-msg-detail'
import PersonalEnroll from '../pages/personal-enroll'
import PersonalSub from '../pages/personal-sub'
import PersonalCollect from '../pages/personal-collect'
import PersonalAbout from '../pages/personal-about'
import PersonalSetting from '../pages/personal-setting'
import PersonalSettingData from '../pages/personal-setting-data'
import PersonalSettingPassword from '../pages/personal-setting-password'
import PersonalConsult from '../pages/personal-consult'
import PersonalConsultTech from '../components/personal-consult-tech'
import PersonalConsultNeed from '../components/personal-consult-need'
import PersonalPublish from '../pages/personal-publish'
import PersonalPublishTech from '../components/personal-publish-tech'
import PersonalPublishNeed from '../components/personal-publish-need'
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
import MsgDetail from '../pages/msg-detail'
import PolicyDetail from '../pages/policy-detail'
import Search from '../pages/search'
import SearchList from '../pages/search-list'
import SearchListDetail from '../pages/search-list-detail'
import ConsultList1 from '../pages/consult-list1'
import ConsultList1Detail from '../pages/consult-list1-detail'
import ConsultList2 from '../pages/consult-list2'
import ConsultList2Detail from '../pages/consult-list2-detail'


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
    	path:'/consult-list1',
    	component:ConsultList1,
      	meta: {
        	title: '合作单位'
      	}
    },
    {
    	path:'/consult-list1-detail',
    	component:ConsultList1Detail,
      	meta: {
        	title: '合作单位详情'
      	}
    },
    {
    	path:'/consult-list2',
    	component:ConsultList2,
      	meta: {
        	title: '政策'
      	}
    },
    {
    	path:'/consult-list2-detail',
    	component:ConsultList2Detail,
      	meta: {
        	title: '政策详情'
      	}
    },
    {
    	path:'/search',
    	component:Search,
      	meta: {
        	title: '搜索专家'
      	}
    },
    {
    	path:'/search-list',
    	component:SearchList,
      	meta: {
        	title: '搜索专家'
      	}
    },
    {
    	path:'/search-list-detail',
    	component:SearchListDetail,
      	meta: {
        	title: '专家详情'
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
    	path:'/activity-detail',
    	component:ActivityDetail,
      	meta: {
        	title: '活动详情'
      	}
    },
    {
    	path:'/activity-enroll',
    	component:ActivityEnroll,
      	meta: {
        	title: '活动报名'
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
    	path:'/msg-detail',
    	component:MsgDetail,
      	meta: {
        	title: '资讯详情'
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
    	path:'/personal-msg',
    	component:PersonalMsg,
      	meta: {
        	title: '我的消息'
      	}
    },
    {
    	path:'/personal-msg-detail',
    	component:PersonalMsgDetail,
      	meta: {
        	title: '消息详情'
      	}
    },
    {
    	path:'/personal-sub',
    	component:PersonalSub,
      	meta: {
        	title: '我的订阅'
      	}
    },
    {
    	path:'/personal-enroll',
    	component:PersonalEnroll,
      	meta: {
        	title: '我的报名'
      	}
    },
    {
    	path:'/personal-collect',
    	component:PersonalCollect,
      	meta: {
        	title: '我的收藏'
      	}
    },
    {
    	path:'/personal-consult',
    	component:PersonalConsult,
    	redirect:'/personal-consult/personal-consult-tech',
      	meta: {
        	title: '我咨询的'
      	},
      	children:[
      		{
    			path:'personal-consult-tech',
    			component:PersonalConsultTech
    		},
    		{
    			path:'personal-consult-need',
    			component:PersonalConsultNeed
    		},
      	]
    },
    {
    	path:'/personal-publish',
    	component:PersonalPublish,
    	redirect:'/personal-publish/personal-publish-tech',
      	meta: {
        	title: '我发布的'
      	},
      	children:[
      		{
    			path:'personal-publish-tech',
    			component:PersonalPublishTech
    		},
    		{
    			path:'personal-publish-need',
    			component:PersonalPublishNeed
    		},
      	]
    },
    {
    	path:'/personal-about',
    	component:PersonalAbout,
      	meta: {
        	title: '关于我们'
      	}
    },
    {
    	path:'/personal-setting',
    	component:PersonalSetting,
      	meta: {
        	title: '个人设置'
      	}
    },
    {
    	path:'/personal-setting-data',
    	component:PersonalSettingData,
      	meta: {
        	title: '个人资料'
      	}
    },
    {
    	path:'/personal-setting-password',
    	component:PersonalSettingPassword,
      	meta: {
        	title: '修改密码'
      	}
    },
    {
    	path:'/personal-collect',
    	component:PersonalCollect,
      	meta: {
        	title: '我的收藏'
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
