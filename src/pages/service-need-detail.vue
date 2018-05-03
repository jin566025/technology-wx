<template>
	<div class="content">
		<p class="title">智能开门</p>
		<div class="msg flex-box">
			<a class="msg-a1">有专利</a>
			<a class="msg-a1">有试点</a>
			<a class="msg-a1">中国</a>
			<a class="msg-a2"></a>
			<a class="msg-a3">咨询：11</a>
			<a class="msg-a3">浏览：9652</a>
		</div>
		<div class="banner"></div>
		<div class="container">
			<div class="desc flex-box">
				<p class="desc-p1">研发经费：面议</p>
				<p class="desc-p2">研发周期：6-23月</p>
				<p class="desc-p3">所在地：浙江</p>
			</div>
			<div class="desc flex-box">
				<p class="desc-p1">需求编号：D2018030027</p>
				<p class="desc-p2"></p>
				<p class="desc-p3">发布时间：2018-03-23</p>
			</div>
			<div class="contract">
				<div class="contract-title">联系需求方可见：</div>
				<div class="contract-sec flex-box">
					<div class="contract-sec-left">联系手机：</div>
					<div class="contract-sec-right">17856321552</div>
				</div>
				<div class="contract-sec flex-box">
					<div class="contract-sec-left">行业方向：</div>
					<div class="contract-sec-right">互联网</div>
				</div>
				<div class="contract-sec flex-box">
					<div class="contract-sec-left">企业名称：</div>
					<div class="contract-sec-right">企业名称企业名称</div>
				</div>
				<div class="contract-sec flex-box">
					<div class="contract-sec-left">营业执照：</div>
					<img class="idimg" src="../../static/image/test6.jpeg">
				</div>
			</div>
			<div class="detail-desc">
				<p class="detail-desc-p1">项目详述</p>
				<p class="detail-desc-p2">因皮革厂的发展出现了很多的环境污染，想寻求治理方案，想寻求治理方案，想寻求治理方案。</p>
			</div>
		</div>
		<div class="foot flex-box">
			<a class="foot-a1">点击按钮</a>
			<a class="foot-a2">，和需求方直接对接</a>
			<a class="foot-a4"></a>
			<a class="foot-a3">联系需求方</a>
		</div>
		<div class="zanwei"></div>
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.arial{font-family: arial;}
	.content{
		.title{font-size: 1rem;color: #323232;font-weight: bold;width: 96%;margin: 0 auto;padding: 0.5rem 0;margin-bottom: 0.5rem;}
		.msg{
			width: 96%;margin: 0 auto;align-items: center;
			.msg-a1{color: #1F93FF;font-size: 0.6rem;.arial;margin-right: 0.5rem;}
			.msg-a2{flex: 1;}
			.msg-a3{color: #C8C8C8;font-size: 0.6rem;.arial;margin-left: 0.5rem;}
		}
		.banner{height: 12.5rem;width: 100%;background-image: url(../../static/image/test3.jpeg);background-repeat: no-repeat;background-position: center;background-size: cover;margin: 1rem 0;}
		.container{
			width: 96%;margin: 0 auto;.arial;
			.desc{
				color: #969696;font-size: 0.6rem;.arial;margin-bottom:0.5rem;
				.desc-p1{text-align: left;}
				.desc-p2{flex: 1;text-align: center;}
				.desc-p3{text-align: right;}
			}
			.contract{
				font-size: 0.7rem;color: #323232;.arial;width:92%;margin:0 auto;margin-top:1.3rem;
				.contract-title{margin-bottom: 0.5rem;}
				.contract-sec{
					margin-bottom: 0.8rem;
					.idimg{width: 7.5rem;height: 5rem;}
				}
			}
			.detail-desc{
				margin: 0.5rem 0;margin-top: 1.6rem;
				.detail-desc-p1{color: #323232;font-size: 0.8rem;.arial;}
				.detail-desc-p2{color: #969696;font-size: 0.65rem;.arial;margin-top: 0.5rem;}
			}
			
		}
		.foot{
			position: fixed;height: 2.25rem;width: 100%;background-color: #FFFFFF;bottom: 0;align-items: center;border-top: 1px solid gainsboro;
			.foot-a1{font-size: 0.7rem;color: #1F93FF ;.arial;margin-left: 0.5rem;}
			.foot-a2{font-size: 0.7rem;color: #ADADAD ;.arial;}
			.foot-a3{font-size: 0.7rem;color: #ffffff;background-color: #1F93FF ;.arial;width: 4.6rem;height: 1.5rem;margin-right: 0.5rem;text-align: center;border-radius: 5px;line-height: 1.5rem;}
			.foot-a4{flex: 1;}
		}
		.zanwei{height: 4rem;width: 100%;}
	}
</style>