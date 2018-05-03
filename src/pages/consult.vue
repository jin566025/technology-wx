<template>
	<div class="content">
		<div class="header">
			<p class="header-title">有需求   问专家</p>
			<div class="header-btn" @click="toSearch()">
				<i class="header-icon fa fa-search"></i>
				<a>寻找你的专家顾问</a>
			</div>
		</div>
		<div class="lg-section">
			<div class="section-title flex-box">
				<div class="section-title-left">合作机构</div>
				<div class="section-title-right" @click="readMore1()">
					<a class="to-right-text">查看更多</a>
					<i class="to-right fa fa-angle-double-right"></i>
				</div>
			</div>
			<div class="section-main flex-box">
				<img class="section-main-left" src="../../static/image/test7.jpeg" />
				<div class="section-main-right">
					<p class="section-name">上海第二科技大学</p>
					<p class="section-desc">前端设计技术与工程、互联网电子产品检测与电力</p>
				</div>
			</div>
			<div class="section-main flex-box">
				<img class="section-main-left" src="../../static/image/test8.jpeg" />
				<div class="section-main-right">
					<p class="section-name">大连理工大学高邮研究院</p>
					<p class="section-desc">Java技术与工程、web前端搭建与设计</p>
				</div>
			</div>
			<div class="section-main flex-box">
				<img class="section-main-left" src="../../static/image/test9.jpeg" />
				<div class="section-main-right">
					<p class="section-name">大连理工大学网络研究院</p>
					<p class="section-desc">Java技术与工程、船舶电子产品检测与电力推</p>
				</div>
			</div>
		</div>
		<div class="lg-section">
			<div class="section-title flex-box">
				<div class="section-title-left">政策</div>
				<div class="section-title-right" @click="readMore2()">
					<a class="to-right-text">查看更多</a>
					<i class="to-right fa fa-angle-double-right"></i>
				</div>
			</div>
			<div class="section-main flex-box">
				<img class="section-main-left" src="../../static/image/test6.jpeg" />
				<div class="section-main-right">
					<p class="section-name">高新技术企业认证</p>
					<p class="section-desc section-desc2">1.促进企业科技转型创新是企业发展的根本动力…</p>
					<div class="desc-detail flex-box">
						<div class="desc-detail-left">现金补助</div>
						<div class="desc-detail-mid">10万起补贴</div>
						<div class="desc-detail-right">上海</div>
					</div>
				</div>
			</div>
			<div class="section-main flex-box">
				<img class="section-main-left" src="../../static/image/test5.jpeg" />
				<div class="section-main-right">
					<p class="section-name">大连理工大学高邮研究院</p>
					<p class="section-desc section-desc2">1.促进企业科技转型创新是企业发展的根本动力…</p>
					<div class="desc-detail flex-box">
						<div class="desc-detail-left">现金补助</div>
						<div class="desc-detail-mid">10万起补贴</div>
						<div class="desc-detail-right">上海</div>
					</div>
				</div>
			</div>
			<div class="section-main flex-box">
				<img class="section-main-left" src="../../static/image/test4.jpeg" />
				<div class="section-main-right">
					<p class="section-name">大连理工大学网络研究院</p>
					<p class="section-desc section-desc2">1.促进企业科技转型创新是企业发展的根本动力…</p>
					<div class="desc-detail flex-box">
						<div class="desc-detail-left">现金补助</div>
						<div class="desc-detail-mid">10万起补贴</div>
						<div class="desc-detail-right">上海</div>
					</div>
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
			toSearch:function(){
				this.$router.push({path:"/search"})
			},
			readMore1:function(){
				this.$router.push({path:"/consult-list1"})
			},
			readMore2:function(){
				this.$router.push({path:"/consult-list2"})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	@import url("../../static/css/font-awesome.css");
	.header{
		height: 6rem;background-color:#4DB4FF;text-align: center;
		.header-title{font-family:Arial;color:#fff;font-size:0.8rem;padding-top:1rem;padding-bottom:0.65rem;font-weight:bold;}
		.header-btn{
			width: 92%;height: 2rem;line-height:2rem;border-radius: 0.25rem;text-align: center;background-color: #fff;margin: 0 auto;font-size: 0.6rem;font-family: arial;color: #323232 ;
			.header-icon{color:#4DB4FF;font-size:0.8rem}
		}
	}
	.lg-section{
		width:96%;height:17rem;margin:0 auto;padding:0.2rem;
		.section-title{
			align-items: center;margin-bottom:0.8rem;
			.section-title-left{width: 50%;color: rgba(77, 180, 255, 1);font-size: 0.8rem;font-family: Arial;font-weight: bold;}
			.section-title-right{
				width: 50%;text-align: right;
				.to-right-text{font-size: 0.6rem;color: #969696;font-family: arial;vertical-align: middle;}
				.to-right{font-size: 1rem;color: #969696;vertical-align: middle;}
			}
		}
		.section-main{
			align-items: center;margin-bottom: 1.05rem;width: 100%;
			.section-main-left{width: 4rem;height: 4rem;margin-right: 0.55rem;}
			.section-main-right{
				width: 70%;
				.section-name{font-size: 0.8rem;color: #323232;font-family: arial;}
				.section-desc{font-size: 0.6rem;color: #C8C8C8;font-family: arial;margin-top: 0.7rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;width: 100%;}
				.section-desc2{margin: 0.4rem 0;}
				.desc-detail{
					font-size: 0.5rem;color: #1F93FF ;font-family: arial;
					.desc-detail-left{text-align: left;}
					.desc-detail-mid{text-align: center;flex: 1;}
					.desc-detail-right{color: #C8C8C8 ;}
				}
			}
		}
	}
	
</style>