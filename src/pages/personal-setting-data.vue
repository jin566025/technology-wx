<template>
	<div class="content">
		<div class="main">
			<div class="section flex-box">
				<div class="section-left">个人头像</div>
				<div class="section-right">
					<img class="head" src="../../static/image/test6.jpeg" />
				</div>
			</div>
			<div class="section2 flex-box">
				<div class="section-left">名字</div>
				<input type="text" class="section-right" placeholder="请输入您的名字" />
			</div>
			<div class="section2 flex-box">
				<div class="section-left">公司名称</div>
				<input type="text" class="section-right" placeholder="请输入您的公司名称" />
			</div>
			<div class="section2 flex-box">
				<div class="section-left">职务</div>
				<input type="text" class="section-right" placeholder="请输入您的职务" />
			</div>
			
			<div class="section2 flex-box">
				<div class="section-left">所在地</div>
				<div class="section-right2">请选择</div>
				<div class="section-right3 fa fa-angle-right"></div>
			</div>
			<div class="section2 flex-box">
				<div class="section-left">联系电话</div>
				<input type="text" class="section-right" placeholder="请输入您的联系电话" />
			</div>
			<div class="section2 flex-box">
				<div class="section-left">联系邮箱</div>
				<input type="text" class="section-right" placeholder="请输入您的联系邮箱" />
			</div>
			<div class="section2 flex-box">
				<div class="section-left">资源涉及行业</div>
				<div class="section-right2">请选择</div>
				<div class="section-right3 fa fa-angle-right"></div>
			</div>
			<div class="section2 flex-box">
				<div class="section-left">关注技术领域</div>
				<div class="section-right2"></div>
			</div>
			<div class="section3 clearfix">
				<div class="btn ib">APP设计</div>
				<div class="btn ib">小程序</div>
				<div class="btn ib">IT服务</div>
				<div class="btn ib">网站构建</div>
				<div class="btn ib">商城服务</div>
				<div class="btn ib">小程序</div>
				<div class="btn ib">IT服务</div>
			</div>
			
		</div>
		<div class="zanwei"></div>
		<div class="footer">保存</div>
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../../static/css/font-awesome.min.css");
.content{
	.main{
		width: 96%;margin: 0 auto;font-family: arial;
		.section{
			align-items: center;padding: 0.3rem 0;
			.section-left{flex: 1;color: #323232;font-size: 0.7rem;}
			.section-right{
				.head{width: 2.5rem;height: 2.5rem;border-radius: 50%;}
			}
		}
		.section2{
			align-items: center;padding: 0.3rem 0;
			.section-left{flex: 1;color: #323232;font-size: 0.7rem;height: 2rem;line-height: 2rem;}
			.section-right{border: none;height: 2rem;font-size: 0.65rem;color: #969696;width:8rem;text-align: right;line-height: 2rem;}
			.section-right2{color: #969696;font-size: 0.65rem;margin-right: 0.3rem;}
			.section-right3{font-size: 1.2rem;color: #969696;}
		}
		.section3{
			font-size: 0;
			.btn{margin-right:3%;margin-top: 0.5rem;width: 17.6%;height: 1.3rem;line-height: 1.3rem;border-radius: 0.2rem;background-color:#1F93FF;color: #FFFFFF;font-size: 0.6rem;text-align: center;font-family: Arial;}
			.btn:nth-child(5n+5){margin-right:0 ;}
		}
		
	}
	.zanwei{height: 5rem;width: 100%;}
	.footer{line-height: 2.5rem;height: 2.5rem;color: #4DB4FF ;font-size: 0.8rem;text-align: center;font-family: Microsoft Yahei;line-height: 2.5rem;position: fixed;bottom: 0;background-color: #FFFFFF;width: 100%;border-top: 1px solid gainsboro;}
}
</style>