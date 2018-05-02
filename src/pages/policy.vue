<template>
	<div class="content">
		<div class="zanwei"></div>
		<div class="header">
			<div class="header-top clearfix">
				<div class="header-top-content clearfix">
					<div class="header-top-left fl">
						<input type="text" placeholder="输入行业或项目关键字搜索" class="header-top-input box-sizing" />
						<button class="header-top-btn fa fa-search box-sizing"></button>
					</div>
					<div class="header-top-right  fr">
						<div class="fa fa-sort-amount-desc"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="lg-section">
			
			<div class="section-main flex-box" @click="toDetail()">
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
		
	</div>
</template>

<script>
	export default{
		methods:{
			toDetail:function(){
				this.$router.push({path:'/policy-detail'})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	@import url("../../static/css/font-awesome.css");
	.zanwei{height: 2.6rem;width: 100%;}
	.header{
			height: 2.25rem;position: fixed;width: 100%;z-index: 10;top: 0;background-color:#fff;
			.header-top{
				height: 2.25rem;line-height: 2.25rem;background-color: rgba(77, 180, 255, 1);
				.header-top-content{
					width: 18rem;margin: 0 auto;
					.header-top-left{
						font-family: Arial;color: #969696;font-size: 0.5rem;vertical-align: middle;font-size:0;
						.header-top-input{font-size: 0.5rem;vertical-align: middle;width: 13rem;padding-left: 0.4rem;height: 1.2rem;line-height: 1.2rem;border-bottom-left-radius: 1.2rem;border-top-left-radius: 1.2rem;border: none;}
						.header-top-btn{color: #969696;font-size:0.8rem;vertical-align: middle;width: 2rem;height: 1.2rem;text-align: center;line-height: 1.2rem;border-top-right-radius: 1.2rem;border-bottom-right-radius: 1.2rem;border: none;background-color: #FFFFFF;}
					}
					.header-top-right{color: #FFFFFF;vertical-align:middle;font-size: 0.9rem;}
				}
			}
			.header-bottom{
				height: 2.5rem;line-height: 2.5rem;color:#969696;font-size: 0.75rem;text-align: center;font-family: Arial;border-bottom:2px solid rgba(255, 255, 255, 1);
				.header-navs{width:50%;}
				.router-link-active{color: #4DB4FF;border-bottom: 2px solid  #4DB4FF;}
			}
		}
	.lg-section{
		width:18rem;height:17rem;margin:0 auto;padding:0.2rem;
		
		.section-main{
			align-items: center;margin-bottom: 1.05rem;
			.section-main-left{width: 4rem;height: 4rem;margin-right: 0.55rem;}
			.section-main-right{
				flex: 1;
				.section-name{font-size: 0.8rem;color: #323232;font-family: arial;}
				.section-desc{font-size: 0.6rem;color: #C8C8C8;font-family: arial;margin-top: 0.7rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
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