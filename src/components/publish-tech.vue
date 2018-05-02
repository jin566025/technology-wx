<template>
	<div class="content">
		<div class="section flex-box">
			<div class="section-left">技术名称：</div>
			<input class="section-right" type="text" />
		</div>
		<div class="section flex-box">
			<div class="section-left">行业方向：</div>
			<input class="section-right" type="text" />
		</div>
		
		<div class="section flex-box">
			<div class="section-left">试点：</div>
			<div class="section-right2 clearfix">
				<div class="type ib" v-for="(item,index) in typeList" :class="index==typeIndex ? 'typeActive':''" @click="tab(index)">{{ item }}</div>
			
			</div>
		</div>
		
		<div class="section flex-box">
			<div class="section-left">所属机构：</div>
			<input class="section-right" type="text" />
		</div>
		<div class="section flex-box">
			<div class="section-left">地址：</div>
			<input class="section-right" type="text" />
		</div>
		<div class="section flex-box">
			<div class="section-left">交付方式：</div>
			<input class="section-right" type="text" />
		</div>
		<div class="section flex-box">
			<div class="section-left">合作方式：</div>
			<input class="section-right" type="text" />
		</div>
		<div class="section flex-box">
			<div class="section-left">专利：</div>
			<div class="section-right3">
				<img class="up-img"  src="../../static/image/test5.jpeg" />
				<div class="up-btn">浏览</div>
			</div>
		</div>
		<div class="section2 flex-box">
			<div class="section-left">方案详述：</div>
			<textarea class="section-right4"></textarea>
		</div>
		<div class="zanwei"></div>
		<div class="footer-btn">发布</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				typeIndex:0,
				typeList:["有","无"]
			}
		},
		methods:{
			tab:function(index){
				this.typeIndex = index
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.section{
		font-size: 0.7rem;color: #323232;font-family: Arial;align-items: center;margin-top: 1.35rem;
		.section-left{width: 3.6rem;}
		.section-right{width: 10rem;height: 1.5rem;padding-left: 0.2rem;border: 1px solid #DCDCDC ;border-radius: 5px;}
		.section-right2{
			.type{width: 2.45rem;height: 1.2rem;line-height: 1.2rem;text-align: center;background-color: #DCDCDC;border-radius: 5px;color: #FFFFFF;margin-right: 2rem;}
			.typeActive{background-color: #4DB4FF;}
		}
		.section-right3{
			width: 10rem;height: 8rem;
			.up-img{width: 10rem;height: 6rem;}
			.up-btn{font-size: 0.6rem;width: 2.5rem;height: 1.2rem;line-height: 1.2rem;text-align: center;color: #4DB4FF;border: 1px solid #4DB4FF;text-align: center;border-radius: 5px;margin: 0 auto;margin-top: 0.6rem;}
		}

	}
	.section2{
		font-size: 0.7rem;color: #323232;font-family: Arial;margin-top: 1rem;
		.section-left{width: 3.6rem;}
		.section-right4{width: 13rem;height: 13rem;border: 1px solid gainsboro;padding: 0.2rem;font-family: Arial;}
	}
	.zanwei{height: 2.8rem;width: 100%;}
	.footer-btn{width: 100%;position: fixed;height: 2.5rem;font-size: 0.8rem;color: #FFFFFF;background-color: #4DB4FF;bottom: 0;left: 0;text-align: center;line-height: 2.5rem;}
</style>