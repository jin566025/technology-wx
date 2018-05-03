<template>
	<div class="content">
		<div class="zanwei2"></div>
		<div class="header">
			
			<div class="header-bottom clearfix">
				<router-link tag="div"  class="header-navs fl" :to="item.path" v-for="(item,index) in navsList">{{ item.name }}</router-link>
			</div>
		</div>
		<div class="service-main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

	export default{
		data(){
			return {
				navsList:[
					{name:"技术",path:"/personal-publish/personal-publish-tech"},
					{name:"需求",path:"/personal-publish/personal-publish-need"}
				]
			}
		}
	}
	
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.content{
		.zanwei2{height: 2.5rem;width: 100%;}
		
		.header{
			height: 2.5rem;position: fixed;width: 100%;z-index: 10;top: 0;background-color:#fff;
			.header-bottom{
				height: 2.5rem;line-height: 2.5rem;color:#969696;font-size: 0.75rem;text-align: center;font-family: Arial;border-bottom:2px solid rgba(255, 255, 255, 1);
				.header-navs{width:50%;}
				.router-link-active{color: #4DB4FF;border-bottom: 2px solid  #4DB4FF;}
			}
		}
	}
	
</style>