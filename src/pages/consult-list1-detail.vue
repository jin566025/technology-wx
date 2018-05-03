<template>
	<div class="content">
		<div class="banner"></div>
		<div class="texts">
			<p class="title">概况</p>
			<p class="desc">      上海海事大学（Shanghai Maritime  University）是一所以航运、物流、海洋为特色学科，具有工学、管理学、经济学、法学、文学、理学和艺术学等学科门类的多科性大学，入选国家卓越工程师教育培养计划和上海市首批深化创新创业教育改革示范高校。       学校设有2个博士后科研流动站，2个一级学科博士点，17个二级学科博士点，13个一级学科硕士学位授权点，57个二级学科硕士学位授权点，5个专业硕士点授权点，45个本科专业，12个高职专业。现有1个国家重点（培育）学科（交通运输规划与管理），5个国家级特色专业，9个部市级重点学科，17个上海市本科教育高地。设有水上训练中心，拥有万吨级“育锋”教学实习船，新造世界最大4.8万吨散货教学实习船“育明”轮，“天鹰”、“天琴”两艘无限航区远洋训练帆艇及29艘水上训练艇。</p>
			<p class="title">优势研发领域</p>
			<p class="desc">航海技术与工程、船舶电子产品检测与电力推进系统、航运物流信息工程技术、集装箱供应链技术、控制系统与实施、港口机械质量监督检验测试、智能交通系统管理、交通规划设计与仿真、海洋材料研究与制备、环境海洋保护技术与工程、邮轮游艇旅游经济、现代物流技术与产业经济</p>
		</div>
		<div class="btns clearfix">
			<div class="btn btn1 ib clearfix">
				<div class="btn-left ib">项</div>
				<div class="btn-right ib">项目</div>
			</div>
			<div class="btn ib clearfix">
				<div class="btn-left ib">技</div>
				<div class="btn-right ib">技术</div>
			</div>
		</div>
		<div class="texts">
			<p class="desc desc2">1.Java技术及应用</p>
			<p class="desc desc2">2高性能氮化硅陶瓷材料及其应用</p>
		</div>
		<div class="zanwei"></div>
		<div class="foot flex-box">
			<a class="foot-a1">点击按钮</a>
			<a class="foot-a2">，和机构方直接对接</a>
			<a class="foot-a4"></a>
			<a class="foot-a3">联系机构方</a>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.content{
		.banner{width: 100%;height: 9.35rem;background-image: url(../../static/image/test1.jpeg);background-repeat: no-repeat;background-size: cover;background-position: center;}
		.texts{
			width:96%;margin: 0 auto;font-family: arial;
			.title{font-size: 0.8rem;color: #323232;padding: 1rem 0 0.4rem 0;}
			.desc{font-size: 0.65rem;color: #969696;}
			.desc2{margin: 0.2rem 0;}
		}
		.btns{
			font-size: 0;width: 100%;font-family: Arial;color: #323232 ;text-align: center;height: 2rem;line-height: 2rem;margin-top: 1rem;
			.btn{
				width: 50%;font-size: 0.7rem;
				.btn-left{background-color: #1F93FF;color: #FFFFFF;font-size: 0.5rem;width: 1rem;height: 1rem;border-radius: 50%;line-height: 1rem;}
			}
			.btn1{border-right: 1px solid gainsboro;}
		}
		.zanwei{width: 100%;height: 3rem;}
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