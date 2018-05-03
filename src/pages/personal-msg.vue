<template>
	<div class="content">
		<div class="section flex-box" @click="toDetail()">
			<div class="section-left  fa fa-volume-down ">
				<div class="section-active"></div>
			</div>
			<div class="section-right">
				<div class="section-detail flex-box">
					<div class="section-detail-left">恭喜你注册成功</div>
					<div class="section-detail-right">2017-03-25</div>
				</div>
				<p class="tips">你已成为该平台的普通用户。可以免费试用你已成为该平台的普通用户。可以免费试用本平台</p>
			</div>
		</div>
		<div class="section flex-box">
			<div class="section-left  fa fa-volume-down ">
				<div class="section-active"></div>
			</div>
			<div class="section-right">
				<div class="section-detail flex-box">
					<div class="section-detail-left">恭喜你注册成功</div>
					<div class="section-detail-right">2017-03-25</div>
				</div>
				<p class="tips">你已成为该平台的普通用户。可以免费试用你已成为该平台的普通用户。可以免费试用本平台</p>
			</div>
		</div>
		<div class="section flex-box">
			<div class="section-left  fa fa-volume-down ">
				<div class=""></div>
			</div>
			<div class="section-right">
				<div class="section-detail flex-box">
					<div class="section-detail-left">恭喜你注册成功</div>
					<div class="section-detail-right">2017-03-25</div>
				</div>
				<p class="tips">你已成为该平台的普通用户。可以免费试用你已成为该平台的普通用户。可以免费试用本平台</p>
			</div>
		</div>
		<div class="section flex-box">
			<div class="section-left  fa fa-volume-down ">
				<div class=""></div>
			</div>
			<div class="section-right">
				<div class="section-detail flex-box">
					<div class="section-detail-left">恭喜你注册成功</div>
					<div class="section-detail-right">2017-03-25</div>
				</div>
				<p class="tips">你已成为该平台的普通用户。可以免费试用你已成为该平台的普通用户。可以免费试用本平台</p>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		methods:{
			toDetail:function(){
				this.$router.push({path:'/personal-msg-detail'})
			}
		}
		
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../../static/css/font-awesome.css");
.section{
	width: 96%;margin: 0 auto;padding:0.3rem 0;align-items: center;margin-bottom:0.4rem;
	.section-left{font-size: 1.2rem;color: #FFFFFF;background-color: #1F93FF;width:1.5rem;height:1.5rem;line-height:1.5rem;text-align:center;border-radius:5px;margin-right:0.5rem;position: relative;}
	.section-right{
		font-family:arial;flex:1;width:60%;
		.section-detail{
			align-items: center;
			.section-detail-left{font-size: 0.75rem;flex: 1;color: #101010;}
			.section-detail-right{color: #8C8C8C;font-size: 0.6rem;}
		}
		.tips{color: #8C8C8C ;font-size: 0.6rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;width: 100%;height: 1.2rem;line-height: 1.2rem;}
	}

	.section-active{position: absolute;width: 0.5rem;height: 0.5rem;border-radius: 50%;background-color: #E51C23;top: -0.1rem;right: -0.1rem;z-index: 10;}
}
</style>