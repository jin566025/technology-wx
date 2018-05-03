<template>
	<div class="content">
		<div class="main">
			<div class="input-contanier flex-box">
				<div class="input-left">邮箱账号</div>
				<input type="text" class="input-right" placeholder="请输入您的邮箱" />
			</div>
			<p class="nav-title">选择订阅项目</p>
			<div class="nav flex-box">
				<div class="navs " v-for="(item,index) in navList" :class="index==navIndex ? 'navs-active':''"  @click="changeIndex(index)">{{ item }}</div>
			</div>
			<div class="save">保存</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navList:["一周技术简报","技术专题"],
				navIndex:0
			}
		},
		methods:{
			changeIndex:function(index){
				this.navIndex=index
			}
		}
		
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	.main{
		font-family: Arial;width:96%;margin:0 auto;
		.input-contanier{
			height: 2.8rem;align-items: center;margin-bottom: 1.2rem;
			.input-left{color: #323232;font-size: 0.7rem;}
			.input-right{border: none;text-align: right;font-size: 0.65rem;color: #969696;flex: 1;}
		}
		.nav-title{color: #323232;font-size: 0.7rem;margin-bottom: 0.5rem;}
		.nav{
			.navs{background-color: #8FB3C2;color: #FFFFFF;font-size: 0.6rem;height: 1.5rem;line-height: 1.5rem;padding: 0 1rem;border-radius: 5px;margin-right: 0.5rem;}
			.navs-active{background-color:#4DB4FF ;}
		}
		.save{width: 100%;height: 2rem;line-height: 2rem;background-color: #4DB4FF;color: #FFFFFF;text-align: center;border-radius: 5px;margin-top: 1.4rem;font-size: 0.7rem;font-family: Microsoft Yahei;}
	}
	
}
</style>