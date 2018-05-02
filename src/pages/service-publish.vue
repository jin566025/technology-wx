<template>
	<div class="content">
		<div class="main">
			<div class="section flex-box">
				<div class="section-left">发布类型：</div>
				<div class="section-right clearfix">
					<router-link tag="div" :to="item.path" class="section-part ib clearfix" v-for="(item,index) in navList">
						<a class="circle-a1 ib">{{ item.name }}</a>
						<a class="circle-a2 ib"></a>
					</router-link>

				</div>
				
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navList:[
					{name:"技术",path:'/service-publish/publish-tech'},
					{name:"需求",path:'/service-publish/publish-need'},
				]
			}
		}
		
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.main{
		width: 18rem;margin: 0 auto;
		.section{
			height: 3rem;align-items: center;font-size: 0.7rem;color: #323232;font-family: arial;
			.section-left{width: 3.6rem;}
			.section-right{
				.section-part{
					margin-right:1.8rem ;
					.circle-a1{color:#323232;}
					.circle-a2{width: 1rem;height: 1rem;border-radius: 50%;border: 1px solid darkgray;vertical-align: middle;margin-left: 0.4rem;}
				}
				.router-link-active{
					.circle-a1{color:#4DB4FF;}
					.circle-a2{border: 0.3rem solid #4DB4FF;}
				}
			}
		}
	}
</style>