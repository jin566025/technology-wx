<template>
	<div class="content">
		<div class="section flex-box" @click="toDetail()">
			<img class="section-left" src="../../static/image/test6.jpeg" />
			<div class="section-mid">
				<p class="section-name">智能出租房管理系统</p>
				<p class="section-address">来源地：中国</p>
			</div>
			<div class="section-right">中试阶段</div>
		</div>
		<div class="section flex-box">
			<img class="section-left" src="../../static/image/test7.jpeg" />
			<div class="section-mid">
				<p class="section-name">智能出租房管理系统</p>
				<p class="section-address">来源地：中国</p>
			</div>
			<div class="section-right">中试阶段</div>
		</div>
		<div class="section flex-box">
			<img class="section-left" src="../../static/image/test8.jpeg" />
			<div class="section-mid">
				<p class="section-name">智能出租房管理系统</p>
				<p class="section-address">来源地：中国</p>
			</div>
			<div class="section-right">中试阶段</div>
		</div>
		<div class="section flex-box">
			<img class="section-left" src="../../static/image/test9.jpeg" />
			<div class="section-mid">
				<p class="section-name">智能出租房管理系统</p>
				<p class="section-address">来源地：中国</p>
			</div>
			<div class="section-right">中试阶段</div>
		</div>
		<div class="section flex-box">
			<img class="section-left" src="../../static/image/test7.jpeg" />
			<div class="section-mid">
				<p class="section-name">智能出租房管理系统</p>
				<p class="section-address">来源地：中国</p>
			</div>
			<div class="section-right">中试阶段</div>
		</div>
		<div class="section flex-box">
			<img class="section-left" src="../../static/image/test8.jpeg" />
			<div class="section-mid">
				<p class="section-name">智能出租房管理系统</p>
				<p class="section-address">来源地：中国</p>
			</div>
			<div class="section-right">中试阶段</div>
		</div>
		<div class="section flex-box">
			<img class="section-left" src="../../static/image/test9.jpeg" />
			<div class="section-mid">
				<p class="section-name">智能出租房管理系统</p>
				<p class="section-address">来源地：中国</p>
			</div>
			<div class="section-right">中试阶段</div>
		</div>
		<float-nav></float-nav>
	</div>
</template>

<script>
	import FloatNav from './float-nav'
	export default{
		methods:{
			toDetail:function(){
				this.$router.push({path:'/service-tech-detail'})
			}
		},
		components:{
		   FloatNav
		}
	}
</script>

<style  lang="less" rel="stylesheet/less" scoped>
	.content{
		.section{
			width: 18.35rem;height: 4.6rem;padding: 0.3rem;margin: 0 auto;margin-top:0.4rem;
			.section-left{width: 4rem;height: 4rem;}
			.section-mid{
				margin-left: 0.45rem;flex: 1;
				.section-name{font-size: 0.8rem;color: #323232;font-family: Arial;}
				.section-address{font-size: 0.6rem;color: #969696;font-family: Arial;margin-top: 1.4rem;}
			}
			.section-right{margin-top: 2.8rem;width: 2.8rem;height: 1.2rem;border-radius: 0.2rem;line-height: 1.2rem;background-color: rgba(199, 231, 255, 1);color: rgba(31, 147, 255, 1);font-size: 0.5rem;text-align: center;font-family: Microsoft Yahei;}
		}
	}
</style>