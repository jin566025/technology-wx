<template>
	<div class="content">
		<div class="search clearfix">
			<div class="search-left fl">
				<i class="search-icon fa fa-search"></i>
				<input class="search-input" placeholder="请输入你想找的专家" />
			</div>
			<div class="search-right fr">搜索</div>
		</div>
		<div class="search-nav clearfix">
			<router-link tag="div" :to="item.path" class="search-navs" v-for="(item,index) in navsList">
				<div class="navs-icon fa" :class="item.icon" :style="{'background-color':item.color}"></div>
				<p class="navs-name">{{ item.name }}</p>
			</router-link>
		
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navsList:[
					{name:"蓝牙技术",icon:"fa-bluetooth-b",path:"/search-list",color:"#1F93FF"},
					{name:"wifi技术",icon:"fa-feed",path:"/search-list",color:"#1BD1A5"},
					{name:"软件需求",icon:"fa-sliders",path:"/search-list",color:"#FFAC4A"},
					{name:"硬件技术",icon:"fa-plug",path:"/search-list",color:"#21AFDB"},
				]
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../../static/css/font-awesome.css");
.content{
	.search{
		width:96%;margin:0 auto;margin-top:0.5rem;
		.search-left{
			width:85%;border:1px solid #DCDCDC;padding-left:0.5rem;border-radius:5px;
			.search-icon{font-size:0.8rem;color:#969696;}
			.search-input{border: none;width: 90%;color: #C8C8C8;font-size: 0.6rem;font-family: arial;height: 1.4rem;}
		}
		.search-right{color: #4DB4FF;font-size: 0.7rem;font-family: arial;height: 1.6rem;line-height: 1.6rem;}
	}
	.search-nav{
		margin-top: 1rem;
		.search-navs{
			width: 25%;float: left;text-align: center;
			.navs-icon{width: 1.5rem;height: 1.5rem;border-radius: 50%;color: #FFFFFF;font-size: 0.8rem;line-height: 1.5rem;}
			.navs-name{font-size: 0.65rem;color: #969696 ;font-family: arial;height: 1.4rem;line-height: 1.4rem;}
		}
	}
}
</style>