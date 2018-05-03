<template>
	<div class="content">
		<div class="section" @click="toDetail()">
			<p class="section-title">【面议】智能开门</p>
			<div class="section-content flex-box">
				<div class="section-content-left bg1">猪</div>
				<div class="section-content-right">由于信息科学技术的不断创新，互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经势不可挡</div>
			</div>
			<div class="section-desc clearfix">
				<div class="section-descs fl">浙江</div>
				<div class="section-descs fl">咨询量：6</div>
				<div class="section-descs fl">浏览量：66</div>
				<div class="section-descs fl">2018-03-06</div>
			</div>
		</div>
		<div class="section">
			<p class="section-title">【面议】室内低功耗蓝牙</p>
			<div class="section-content flex-box">
				<div class="section-content-left bg2">猪</div>
				<div class="section-content-right">由于信息科学技术的不断创新，互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经势不可挡</div>
			</div>
			<div class="section-desc clearfix">
				<div class="section-descs fl">浙江</div>
				<div class="section-descs fl">咨询量：6</div>
				<div class="section-descs fl">浏览量：66</div>
				<div class="section-descs fl">2018-03-06</div>
			</div>
		</div>
		<div class="section">
			<p class="section-title">【面议】线上租赁系统</p>
			<div class="section-content flex-box">
				<div class="section-content-left bg3">猪</div>
				<div class="section-content-right">由于信息科学技术的不断创新，互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经势不可挡</div>
			</div>
			<div class="section-desc clearfix">
				<div class="section-descs fl">浙江</div>
				<div class="section-descs fl">咨询量：6</div>
				<div class="section-descs fl">浏览量：66</div>
				<div class="section-descs fl">2018-03-06</div>
			</div>
		</div>
		<div class="section">
			<p class="section-title">【面议】室内低功耗蓝牙</p>
			<div class="section-content flex-box">
				<div class="section-content-left bg2">猪</div>
				<div class="section-content-right">由于信息科学技术的不断创新，互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经势不可挡</div>
			</div>
			<div class="section-desc clearfix">
				<div class="section-descs fl">浙江</div>
				<div class="section-descs fl">咨询量：6</div>
				<div class="section-descs fl">浏览量：66</div>
				<div class="section-descs fl">2018-03-06</div>
			</div>
		</div>
		<div class="section">
			<p class="section-title">【面议】线上租赁系统</p>
			<div class="section-content flex-box">
				<div class="section-content-left bg3">猪</div>
				<div class="section-content-right">由于信息科学技术的不断创新，互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热互联网+的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经的热潮兴起，人们对智能产品的喜爱，手机代替传统钥匙已经势不可挡</div>
			</div>
			<div class="section-desc clearfix">
				<div class="section-descs fl">浙江</div>
				<div class="section-descs fl">咨询量：6</div>
				<div class="section-descs fl">浏览量：66</div>
				<div class="section-descs fl">2018-03-06</div>
			</div>
		</div>

	</div>
</template>

<script>
	
	export default{
		methods:{
			toDetail:function(){
				this.$router.push({path:'/service-need-detail'})
			}
		}
		
	}
</script>

<style  lang="less" rel="stylesheet/less" scoped>
	.section{
		width: 96%;height: 7.6rem;padding: 0.4rem;margin: 0 auto;margin-top:0.5rem;
		.section-title{
			color: #323232;font-family: arial;font-size: 0.7rem;margin-bottom: 0.5rem;
		}
		.section-content{
			height: 2.5rem;
			.bg1{background-color: #1F93FF;}
			.bg2{background-color: #4CC7A9;}
			.bg3{background-color: #EDD70E;}
			.section-content-left{margin-right:0.5rem;width: 2.5rem;height: 2.5rem;line-height: 2.5rem;border-radius: 50%;color: rgba(255, 255, 255, 1);font-size: 0.7rem;text-align: center;font-family: Arial;}
			.section-content-right{flex: 1;color: rgba(150, 150, 150, 1);font-size: 0.6rem;font-family: Arial;height: 2.1rem;margin-top: 0.2rem;overflow: hidden;text-overflow: ellipsis;line-height: 1rem;}
		}
		.section-desc{
			margin-top: 1.65rem;
			.section-descs{width: 25%;height: 1.15rem;line-height: 1.15rem;color: rgba(120, 120, 120, 1);font-size: 0.6rem;font-family: Arial;text-align: center;}
			.section-descs:nth-child(1){width: 15%;}
			.section-descs:nth-child(2){width: 30%;}
			.section-descs:nth-child(3){width: 30%;}
		}
	}
</style>