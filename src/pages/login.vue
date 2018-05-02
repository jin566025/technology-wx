<template>
	<div class="content">
		<div class="sections flex-box">
			<div class="sections-left">手机号</div>
			<div class="sections-mid">+86</div>
			<input class="sections-right" type="text" placeholder="请输入手机号" />
		</div>
		<div class="sections2 flex-box">
			<div class="sections-left">验证码</div>
			<input class="sections-mid" type="text" placeholder="请输入验证码" />
			<div class="sections-right">发送验证码</div>
			
		</div>
		<div class="login">登录</div>
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.arial{font-family: arial;}
	.sections{
		width: 17.75rem;align-items: center;margin: 0 auto;margin-top: 1rem;
		.sections-left{width: 2.4rem;font-size: 0.7rem;color: #323232;.arial;}
		.sections-mid{color: #FF3838;font-size: 0.7rem;.arial;width: 2.4rem;text-align: center;border-right: 1px solid gainsboro;}
		.sections-right{border: none;color: #969696;font-size: 0.7rem;.arial;flex:1;padding-left: 0.6rem;}
	}
	.sections2{
		width: 17.75rem;align-items: center;margin: 0 auto;margin-top: 1rem;border-bottom: 1px solid gainsboro;padding-bottom: 0.3rem;
		.sections-left{width: 2.4rem;font-size: 0.7rem;color: #323232;.arial;}
		.sections-mid{border: none;color: #969696;font-size: 0.7rem;.arial;flex:1;padding-left: 0.6rem;}
		.sections-right{background-color: #FF3838;font-size: 0.6rem;color: #FFFFFF;width: 4rem;height: 1.4rem;text-align: center;line-height: 1.4rem;border-radius: 5px;}
	}
	.login{margin: 0 auto;margin-top: 1.4rem;width: 17.75rem;height: 2rem;line-height: 2rem;border-radius: 5px;background-color: rgba(77, 180, 255, 1);color: rgba(255, 255, 255, 1);font-size: 0.7rem;text-align: center;font-family: Arial;}
</style>