<template>
	<div class="content">
		<div class="section flex-box">
			<div class="section-left">姓名</div>
			<input class="section-right" placeholder="请输入您的姓名" />
		</div>
		<div class="section flex-box">
			<div class="section-left">公司名称</div>
			<input class="section-right" placeholder="请输入您的公司名称" />
		</div>
		<div class="section flex-box">
			<div class="section-left">职务</div>
			<input class="section-right" placeholder="请输入您的职务" />
		</div>
		<div class="section flex-box">
			<div class="section-left">邮箱</div>
			<input class="section-right" placeholder="请输入您的邮箱" />
		</div>
		<div class="section flex-box">
			<div class="section-left">联系电话</div>
			<input class="section-right" placeholder="请输入您的联系电话" />
		</div>
		<div class="finish-btn">我要报名</div>
	</div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" scoped>
.section{
	width: 96%;margin: 0 auto;font-size: 0.7rem;font-family: arial;color: #323232;align-items: center;
	.section-left{width: 6rem;text-align: left;}
	.section-right{flex: 1;text-align: right;border: none;height: 2.5rem;line-height: 2.5rem;}
}
.finish-btn{width: 96%;height: 2rem;background-color: #1F93FF;color: #FFFFFF;font-family: Microsoft Yahei;font-size: 0.7rem;border-radius: 5px;text-align: center;margin: 0 auto;line-height: 2rem;margin-top: 0.5rem;}
</style>