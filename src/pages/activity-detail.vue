<template>
	<div class="content">
		<div class="banner"></div>
		<div class="main">
			<p class="title">2018年全国互联网发展趋势探讨会</p>
			<p class="detail">
				<a>活动时间：</a>
				<a class="detail-a1">2018.03.27-2018.03.30</a>
			</p>
			<p class="detail">
				<a>活动地点：</a>
				<a class="detail-a2">上海中环国际酒店</a>
			</p>
			<p class="detail">
				<a>活动费用：</a>
				<a class="detail-a3">免费</a>
			</p>
			<div class="desc desc1">
				<p class="desc-title">活动简介</p>
				<p class="desc-detail">行业顶级会议，共谋互联网+行业新发展，打造超高产业新高度！</p>
			</div>
			<div class="desc">
				<p class="desc-title">活动详情</p>
				<p class="desc-detail">一、活动概况</p>
				<p class="desc-detail">活动时间：2018年3月27日-3月29日</p>
				<p class="desc-detail">活动地点：上海中环国际酒店</p>
				<p class="desc-detail">指导单位：中国石油和化学工业联合会、上海市科学技术委员会</p>
				<p class="desc-detail">主办单位：全国互联网+创业产业技术创新中心、全国信息科技产业技术创新战略联盟、上海张江高新区普陀长风科技园、上海科技研究院有限公司、</p>
				<p class="desc-detail">媒体支持：迈科技一站式技术创新服务平台</p>
				<p class="desc-detail">二、会议议程</p>
				<p class="desc-detail">2018.03.27   上午     主持人介绍嘉宾、致辞</p>
				<p class="desc-detail">2018.03.27   下午     论坛报告</p>
				<p class="desc-detail">2018.03.27   上午     主持人介绍嘉宾、致辞</p>
				<p class="desc-detail">2018.03.27   下午     论坛报告</p>
				<p class="desc-detail">2018.03.27   上午     主持人介绍嘉宾、致辞</p>
				<p class="desc-detail">2018.03.27   下午     论坛报告</p>

			</div>
		</div>
		<div class="zanwei"></div>
		<div class="footer clearfix">
			<div class="footer-nav ib navActive" @click="toEnroll()">报名参加</div>
			<div class="footer-nav ib" >收藏</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toEnroll:function(){
				this.$router.push({path:'/activity-enroll'})
			}
		}
		
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	.banner{width: 100%;height: 11.8rem;background-repeat: no-repeat;background-position: center;background-size: cover;background-image: url(../../static/image/test1.jpeg);}
	.main{
		width: 96%;margin: 0 auto;font-family: arial;
		.title{color: #323232;font-size: 0.9rem;font-weight: bold;padding: 0.5rem 0}
		.detail{
			font-size: 0.6rem;color: #969696;padding: 0.5rem 0;
			.detail-a2{color: #323232;}
			.detail-a3{color: limegreen}
		}
		.desc{
			margin-bottom: 0.55rem;
			.desc-title{color: #323232;font-size: 0.8rem;height: 1.4rem;line-height: 1.4rem;}
			.desc-detail{font-size: 0.65rem;color: #969696;padding: 0.2rem 0;}
		}
		.desc1{margin-top: 1.85rem;}
	}
	.zanwei{width: 100%;height: 2.4rem;}
	.footer{
		width: 100%;height: 2.25rem;position: fixed;bottom: 0;background-color: #FFFFFF;border-top: 1px solid gainsboro;font-size: 0;text-align: center;font-family: Microsoft Yahei;color: #4DB4FF;
		.footer-nav{width: 46%;height: 1.6rem;line-height: 1.6rem;border-radius: 5px;border: 1px solid #4DB4FF;font-size: 0.7rem;margin :0 2%;margin-top: 0.32rem;}
		.navActive{background-color: #1F93FF;color: #FFFFFF;}
	}
}
</style>