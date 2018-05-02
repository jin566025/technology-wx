<template>
	<div>
		<div class="zanwei"></div>
		<div class="footer clearfix">
			<router-link tag="div" class="footer-nav fl" v-for="(item,index) in navList" :to="item.path">
				<div class="nav-icon fa" :class="item.icon"></div>
				<p class="nav-text">{{ item.name }}</p>
			</router-link>

		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navList:[
					{name:"首页",icon:"fa-home",path:"/index"},
					{name:"服务",icon:"fa-th-large",path:"/service"},
					{name:"咨询",icon:"fa-mortar-board",path:"/consult"},
					{name:"活动",icon:"fa-map",path:"/activity"},
					{name:"我的",icon:"fa-user-circle",path:"/personal"}
				],
				
			}
		},
		computed:{
			footerShow(){
				return this.$store.state.show 
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	@import url("../../static/css/font-awesome.css");
	.zanwei{width: 100%;height: 2.4rem;}
	.footer{position: fixed;width: 100%;bottom: 0;height: 2.2rem;background-color: #FFFFFF;border-top: 1px solid gainsboro;z-index: 10;}
	.footer-nav{width:20%;height:2.2rem;font-size: 0.5rem;text-align: center;}
	.nav-icon{width:1rem;height: 1rem;color: #969696;font-size: 1rem;margin-top: 5px;}
	.nav-text{font-family: Microsoft Yahei;font-size: 0.6rem;color: #969696;}
	.router-link-active .nav-icon,.router-link-active .nav-text{color: #4DB4FF;}
</style>
