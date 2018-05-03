<template>
	<div class="content">
		<div class="section flex-box" @click="toData()">
			<div class="section-left">个人资料</div>
			<div class="section-right fa fa-chevron-right"></div>
		</div>
		<div class="section flex-box" @click="toPassword()">
			<div class="section-left">修改密码</div>
			<div class="section-right fa fa-chevron-right"></div>
		</div>
		<div class="logout">退出登录</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toData:function(){
				this.$router.push({path:'/personal-setting-data'})
			},
			toPassword:function(){
				this.$router.push({path:'/personal-setting-password'})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../../static/css/font-awesome.css");
.content{
	.section{
		font-family:arial;align-items: center;width:96%;height:2rem;margin:0 auto;margin-top:0.5rem;
		.section-left{flex: 1;color: #323232;font-size: 0.7rem;}
		.section-right{font-size: 0.7rem;color: #646464;}
	}
	.logout{width: 96%;height: 2rem;line-height: 2rem;border-radius: 0.2rem;background-color: rgba(255, 56, 56, 1);color: rgba(255, 255, 255, 1);font-size: 0.8rem;text-align: center;font-family: Microsoft Yahei;margin: 0 auto;margin-top: 1rem;}
}
</style>