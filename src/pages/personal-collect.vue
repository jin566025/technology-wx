<template>
	<div class="content">
		<div class="section">
			<img @click="toDetail()" class="section-img" src="../../static/image/test10.jpeg" />
			<div class="section-content">
				<div class="section-head flex-box">
					<div class="section-head-left">会员优惠</div>
					<div class="section-head-right">2018年全国互联网发展趋势研讨会</div>
				</div>
				<p class="section-head-part">活动时间：2018.03.30-2018.03.30</p>
				<p class="section-head-part">活动地点：微信群</p>
				<div class="section-botom flex-box  type1">
					<div class="section-botom-left">进行中</div>
					<div class="section-bottom-mid"></div>
					<div class="section-botom-right" @click="toDetail()">我要报名</div>
				</div>
			</div>
		</div>
		
		<div class="section">
			<img class="section-img" src="../../static/image/test10.jpeg" />
			<div class="section-content">
				<div class="section-head flex-box">
					
					<div class="section-head-right">2018年全国互联网发展趋势研讨会</div>
				</div>
				<p class="section-head-part">活动时间：2018.03.30-2018.03.30</p>
				<p class="section-head-part">活动地点：微信群</p>
				<div class="section-botom flex-box type2">
					<div class="section-botom-left">已结束</div>
					<div class="section-bottom-mid"></div>
					<div class="section-botom-right">截止报名</div>
				</div>
			</div>
		</div>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import MFooter from '../components/m-footer'
	export default{
		components:{
		   MFooter
		},
		methods:{
			toDetail:function(){
				this.$router.push({path:'/activity-detail'})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.section{
		width: 96%;height: 17.75rem;margin: 0 auto;margin-top: 0.55rem;margin-bottom: 0.85rem;
		.section-img{width: 100%;height: 11.8rem;border-radius: 0.25rem;}
		.section-content{
			width: 96%;margin: 0 auto;margin-top: 0.4rem;
			.section-head{
				align-items: center;
				.section-head-left{margin-right: 0.45rem;width: 3.4rem;height: 1rem;line-height:1rem;border-radius: 1rem;background-color:#FF3838;color:#FFFFFF;font-size: 0.55rem;text-align: center;font-family: Arial;}
				.section-head-right{flex: 1;height: 1.15rem;line-height: 1.15rem;color:#323232;font-size: 0.8rem;font-family: Arial;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
			}
			.section-head-part{font-size: 0.55rem;color: #969696;font-family: arial;margin-top: 0.4rem;}
			.section-botom{
				align-items: center;margin-top: 0.3rem;
				.section-botom-left{font-size: 0.5rem;font-family: Microsoft Yahei;width: 2.4rem;height: 1rem;line-height: 1rem;text-align: center;border-radius:0.2rem;}
				.section-botom-right{width: 3.4rem;height: 1.4rem;line-height: 1.4rem;border-radius: 0.25rem;font-size: 0.65rem;text-align: center;font-family: Microsoft Yahei;}
				.section-bottom-mid{flex: 1;}
			}
			.type1{
				.section-botom-left{background-color: #E51C23;color: #FFFFFF;}
				.section-botom-right{background-color:#1F93FF;color: #FFFFFF;}
			}
			.type2{
				.section-botom-left{background-color: #B1CEE3;color: #FFFFFF;}
				.section-botom-right{background-color:#C8C8C8;color: #FFFFFF;}
			}
		}
	}
</style>