<template>
	<div class="content">
		<img src="../../static/image/test6.jpeg" class="head-img" />
		<p class="name">冯光明</p>
		<p class="desc">研究员（自然科学）   浙江大学</p>
		<p class="title">概况</p>
		<p class="title-desc">宋光明，男，1974年12月出生，黑龙江省伊春市人，教授，博士生导师。。2004年4月毕业于中国科学技术大学自动化系，获博士学位；2004年4月至2006年4月在东南大学控制科学与工程博士后流动站从事博士后研究工作。2006年4月至今，在东南大学仪器科学与工程学院从事教学与科研工作。2009年5月至11月赴美国乔治华盛顿大学计算机系从事访问研究工作。2006年5月被评为副教授，2010年3月被评为博士生导师，2010年4月被破格评为教授。2007年6月入选东南大学优秀青年教师教学科研资助计划。获2009年度华英文教基金“华英学者”奖。 2010年入选教育部新世纪优秀人才支持计划。</p>
		<p class="title">代表成果</p>
		<p class="title-desc">先后主持完成国家自然科学基金项目1项、中国博士后科学基金项目1项、江苏省博士后科研资助计划项目1项、国家863计划项目1项。目前主持在研国家自然科学基金项目1项、国家863计划项目1项以及有关部委项目2项。发表论文40余篇，其中被Sci收录11篇，Ei收录29篇。已获专利3项。研究成果获省部级科技进步二等奖  1项。 </p>
		<div class="desc2 clearfix">
			<div class="descs fl clearfix">
				<div class="desc3 ib">项</div>
				<div class="desc4 ib">项目</div>
			</div>
			<div class="descs fl clearfix">
				<div class="desc3 ib">论</div>
				<div class="desc4 ib">论文</div>
			</div>
			<div class="descs fl clearfix">
				<div class="desc3 ib">专</div>
				<div class="desc4 ib">专利</div>
			</div>
		</div>
		<div class="desc5">
			<p>1. “移动传感器网络的形态控制”.</p>
			<p>2. “自重构式移动传感器网络系统关键技术”.</p>
			<p>3. “链式自重构机器人的变形控制”.</p>
		</div>
		<div class="zanwei"></div>
		<div class="foot flex-box">
			<a class="foot-a1">点击按钮</a>
			<a class="foot-a2">，和技术方直接对接</a>
			<a class="foot-a4"></a>
			<a class="foot-a3">联系专家</a>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	text-align: center;font-family: arial;
	.head-img{width: 4rem;height: 4rem;border-radius: 50%;margin: 0.5rem 0;}
	.name{font-size: 0.7rem;color: #101010 ;height:1.8rem;line-height: 1.8rem;}
	.desc{color: #646464;font-size: 0.6rem;}
	.title{font-size: 0.8rem;color: #323232;text-align: left;width:96%;margin: 0 auto;height: 1.8rem;line-height: 1.8rem;margin-top: 1rem;}
	.title-desc{font-size: 0.65rem;color: #969696;text-align: left;width:96%;margin: 0 auto;}
	.desc2{
		width: 100%;margin-top: 1.1rem;padding-bottom: 0.2rem;border-bottom: 1px solid #DCDCDC;
		.descs{
			width: 33.3%;text-align: center;vertical-align: middle;font-family:Arial;height:1.4rem;
			.desc3{width: 1rem;height: 1rem;border-radius: 50%;background-color: #1F93FF;color: #FFFFFF;font-size: 0.5rem;line-height: 1rem;text-align: center;vertical-align: middle;margin-right: 0.25rem;}
			.desc4{color: #323232;font-size: 0.7rem;vertical-align: middle;}
		}
	}
	.desc5{
		width:96%;margin: 0 auto;text-align: left;padding: 0.5rem 0 1.2rem 0;
		p{color: #646464 ;font-size: 0.65rem;font-family: arial;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;height: 1.4rem;line-height: 1.4rem;}
	}
	.zanwei{width: 100%;height: 2.25rem;}
	.foot{
		font-family: arial;
		position: fixed;height: 2.25rem;width: 100%;background-color: #FFFFFF;bottom: 0;align-items: center;border-top: 1px solid gainsboro;
		.foot-a1{font-size: 0.7rem;color: #1F93FF ;margin-left: 0.5rem;}
		.foot-a2{font-size: 0.7rem;color: #ADADAD ;}
		.foot-a3{font-size: 0.7rem;color: #ffffff;background-color: #1F93FF ;width: 4.6rem;height: 1.5rem;margin-right: 0.5rem;text-align: center;border-radius: 5px;line-height: 1.5rem;}
		.foot-a4{flex: 1;}
	}
}
</style>