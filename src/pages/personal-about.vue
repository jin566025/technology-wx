<template>
	<div class="content">
		<div class="header clearfix">
			<div class="header-nav fl" @click="changIndex(index)" v-for="(item,index) in navList" :class="index==navIndex ? 'header-nav-active':''">{{ item }}</div>
		</div>
		<div class="main">
			<div class="section" v-if="navIndex==0">
				<p class="title">公司简介</p>
				<p class="desc">      公司自2018年3月30日创造以来，为广大客户提供商城系统、微商系统、微信应用、APP系统、小程序系统、O2O系统的一站式SaaS服务，是帮助创业者快速验证商业模式、减少开发投入、持续优化运营的专家级解决方案。       路普达网络科技(北京)有限公司公司由清华北大科技精英和商业领域营销专家于2007年创立，一直致力于互联网领域的研究和产品开发，成功开发上百个互联网应用，服务过众多大型企业，是全球领先的互联网解决方案提供商。</p>
			</div>
			<div class="section" v-else-if="navIndex==1">
				<p class="title">优势与服务</p>
				<p class="desc">        经过数年耕耘，汇聚10000多名产业技术专家并和150余家研发机构紧密合作。为了更好的服务用户，建立30余人的技术经理团队，他们连接着来自全球30多个国家的3000多项的优质技术项目和500多家科技服务供应商，向企业提供差异化定制化的技术创新服务。
作为技术对接平台，同时汇聚了4万多家大中小型企业，需求企业遍布中国103个城市。通过发达的服务网络和过硬的服务能力，为这些企业用户提供解决方案。通过签约的技术合同达到2.1亿，促成大大小小的项目超过260个，超过1000项“企动力”服务结项。</p>
			</div>
			<div class="section" v-else="navIndex==2">
				<p class="title">发展中心</p>
				<p class="desc">            公司自2018年3月30日创造以来，为广大客户提供商城系统、微商系统、微信应用、APP系统、小程序系统、O2O系统的一站式SaaS服务，是帮助创业者快速验证商业模式、减少开发投入、持续优化运营的专家级解决方案。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navList:["公司简介","优势与服务","发展中心"],
				navIndex:0
			}
		},
		methods:{
			changIndex:function(index){
				this.navIndex = index
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	font-family: arial;
	.header{
		.header-nav{width: 33.3%;height: 2.5rem;border-bottom: 2px solid #FFFFFF;color: #969696 ;font-size: 0.8rem;text-align: center;line-height: 2.5rem;}
		.header-nav-active{border-bottom:2px solid  #4DB4FF;color:#4DB4FF ;}
	}
	.main{
		.section{
			width: 96%;font-family: arial;margin: 0 auto;margin-top: 1.1rem;
			.title{color: #323232;font-size: 0.8rem;margin-bottom: 0.5rem;}
			.desc{color: #969696;font-size: 0.65rem;line-height: 0.95rem;}
		}
	}
}
</style>