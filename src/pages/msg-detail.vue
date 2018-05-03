<template>
	<div class="content">
		<div class="banner"></div>
		<div class="main">
			<p class="title">领跑国内技术转移服务，科技服务平台模式获各地方科技局关注认可</p>
			<p class="desc">一、资讯概况资讯时间：2018年3月27日-3月29日资讯地点：上海中环国际酒店指导单位：中国石油和化学工业联合会、上海市科学技术委员会主办单位：全国互联网+创业产业技术创新中心、全国信息科技产业技术创新战略联盟、上海张江高新区普陀长风科技园、上海科技研究院有限公司、科技服务平台第三期合伙人培训成功举办，新增市级合作站，同时吸引了各方科技局关注并获得认可，共同推进区域创新！</p>
			<p class="read-num">浏览量（266）</p>
		</div>
		<div class="zanwei"></div>
		<div class="footer clearfix">
			<div class="footer-btn ib" v-for="(item,index) in footerBtns" :class="index==footerActive ? 'footer-active':''" @click="changeActive(index)">{{ item }}</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				footerBtns:["报名参加","收藏"],
				footerActive:"0"
			}
		},
		methods:{
			changeActive:function(index){
				this.footerActive = index
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.content{
		.banner{width: 100%;height: 11.8rem;background-image: url(../../static/image/test10.jpeg);background-repeat: no-repeat;background-position: center;background-size: cover;}
		.main{
			width: 96%;margin: 0 auto;
			.title{font-size: 0.9rem;color: #323232;font-family: arial;font-weight: bold;padding: 0.8rem 0;}
			.desc{font-size: 0.6rem;color: #969696;font-family: arial;}
			.read-num{color: #4DB4FF;font-size: 0.6rem;font-family: arial;text-align: center;margin-top: 1.25rem;margin-bottom: 1.18rem;}
		}
		.zanwei{height: 2.3rem;width: 100%;}
		.footer{
			width: 100%;height: 2.25rem;position: fixed;bottom: 0;background-color: #FFFFFF;text-align: center;border-top:1px solid gainsboro;
			.footer-btn{font-family: Microsoft Yahei;font-size: 0.7rem;color: #4DB4FF;border: 1px solid #4DB4FF;width: 46%;height: 1.6rem;line-height: 1.6rem;margin: 0 2%;margin-top: 0.38rem;border-radius:5px ;}
			.footer-active{color: #FFFFFF;background-color: #1F93FF ;}
		}
	}
</style>