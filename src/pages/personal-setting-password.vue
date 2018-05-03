<template>
	<div class="content">
		<div class="section flex-box">
			<div class="section-left">手机号码</div>
			<input class="section-right" type="text" placeholder="请输入您的手机号" />
			<div class="send2"></div>
		</div>
		<div class="section flex-box">
			<div class="section-left">验证码</div>
			<input class="section-right" type="text" placeholder="请输入验证码" />
			<div class="send">发送验证码</div>
		</div>
		<div class="section flex-box">
			<div class="section-left">新密码</div>
			<input class="section-right" type="text" placeholder="请输入新密码" />
			<div class="send2"></div>
		</div>
		<div class="section flex-box">
			<div class="section-left">确认密码</div>
			<input class="section-right" type="text" placeholder="请再次输入新密码" />
			<div class="send2"></div>
		</div>
		<div class="save">确认修改</div>
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	font-family: arial;
	.section{
		width:96%;margin:0 auto;height:2.5rem;line-height:2.5rem;align-items: center;
		.section-left{color: #323232 ;font-size: 0.7rem;width: 4rem;}
		.section-right{border: none;flex: 1;color: #969696;font-size: 0.65rem;}
		.send{background-color: #FF3838;color: #FFFFFF;font-size: 0.6rem;font-family: Microsoft Yahei;width: 4rem;height: 1.4rem;line-height: 1.4rem;text-align: center;border-radius: 4px;}
		.send2{width: 4rem;height: 1.4rem;line-height: 1.4rem;}
	}
	.save{width:96%;margin:0 auto;height: 2rem;line-height: 2rem;font-size: 0.8rem;color: #FFFFFF;background-color: #4DB4FF;font-family: Microsoft Yahei;margin-top: 0.5rem;text-align: center;border-radius: 5px;}
}
</style>