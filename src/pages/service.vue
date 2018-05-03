<template>
	<div class="content">
		<div class="zanwei2"></div>
		<div class="header">
			<div class="header-top clearfix">
				<div class="header-top-content clearfix">
					<div class="header-top-left fl">
						<input type="text" placeholder="输入行业或项目关键字搜索" class="header-top-input box-sizing" />
						<button class="header-top-btn fa fa-search box-sizing"></button>
					</div>
					<div class="header-top-right  fr">
						<div class="fa fa-sort-amount-desc"></div>
					</div>
				</div>
				
			</div>
			<div class="header-bottom clearfix">
				<router-link tag="div"  class="header-navs fl" :to="item.path" v-for="(item,index) in navsList">{{ item.name }}</router-link>
			</div>
		</div>
		<div class="service-main">
			<router-view></router-view>
		</div>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import MFooter from '../components/m-footer'
	export default{
		data(){
			return {
				navsList:[
					{name:"技术",path:"/service/service-tech"},
					{name:"需求",path:"/service/service-need"}
				]
			}
		},
		components:{
		   MFooter
		}
	}
	
</script>

<style lang="less" rel="stylesheet/less" scoped>
	@import url("../../static/css/font-awesome.css");
	.content{
		.zanwei2{height: 4.75rem;width: 100%;}
		
		.header{
			height: 4.75rem;position: fixed;width: 100%;z-index: 10;top: 0;background-color:#fff;
			.header-top{
				height: 2.25rem;line-height: 2.25rem;background-color: rgba(77, 180, 255, 1);
				.header-top-content{
					width: 96%;margin: 0 auto;
					.header-top-left{
						font-family: Arial;color: #969696;font-size: 0.5rem;vertical-align: middle;font-size:0;width:90%;
						.header-top-input{font-size: 0.5rem;vertical-align: middle;width: 80%;padding-left: 0.4rem;height: 1.2rem;line-height: 1.2rem;border-bottom-left-radius: 1.2rem;border-top-left-radius: 1.2rem;border: none;}
						.header-top-btn{color: #969696;font-size:0.8rem;vertical-align: middle;width: 2rem;height: 1.2rem;text-align: center;line-height: 1.2rem;border-top-right-radius: 1.2rem;border-bottom-right-radius: 1.2rem;border: none;background-color: #FFFFFF;}
					}
					.header-top-right{color: #FFFFFF;vertical-align:middle;font-size: 0.8rem;width: 10%;text-align: right;}
				}
			}
			.header-bottom{
				height: 2.5rem;line-height: 2.5rem;color:#969696;font-size: 0.75rem;text-align: center;font-family: Arial;border-bottom:2px solid rgba(255, 255, 255, 1);
				.header-navs{width:50%;}
				.router-link-active{color: #4DB4FF;border-bottom: 2px solid  #4DB4FF;}
			}
		}
	}
	
</style>