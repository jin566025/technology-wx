<template>
	<div class="content">
		<div class="section" @click="toDetail()">
			<img class="section-img" src="../../static/image/test10.jpeg" />
			<div class="section-content">
				<div class="section-content-title">领跑国内技术转移服务，科技服务平台模式获各地方科技局关注认可</div>
				<div class="section-content-detail">科技服务平台第三期合伙人培训成功举办，新增市级合作站，同时吸引了各方科技局关注并获得认可，共同推进区域创新！</div>
			</div>
		</div>
		
		<div class="section">
			<img class="section-img" src="../../static/image/test10.jpeg" />
			<div class="section-content">
				<div class="section-content-title">领跑国内技术转移服务，科技服务平台模式获各地方科技局关注认可</div>
				<div class="section-content-detail">科技服务平台第三期合伙人培训成功举办，新增市级合作站，同时吸引了各方科技局关注并获得认可，共同推进区域创新！</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		methods:{
			toDetail:function(){
				this.$router.push({path:'/msg-detail'})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.textover{text-overflow: ellipsis;overflow: hidden;}
	.section{
		width: 96%;height: 17.6rem;margin: 0 auto;margin-top: 0.55rem;margin-bottom: 0.85rem;
		.section-img{width: 100%;height: 11.8rem;border-radius: 0.25rem;}
		.section-content{
			width: 92%;margin: 0 auto;margin-top: 0.4rem;
			.section-content-title{height: 2.2rem;line-height: 1rem;color: #323232 ;font-size: 0.7rem;font-family: Arial;.textover}
			.section-content-detail{line-height: 0.8rem;color: #969696;font-size: 0.55rem;font-family: Arial;.textover;margin-top: 0.6rem;}
		}
	}
</style>