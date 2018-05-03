<template>
	<div class="content">
		<div class="content-login" v-if="isLogin">
			<div class="content-login-top flex-box">
				<div class="content-login-top-left">
					<img class="img" src="../../static/image/test6.jpeg" />
				</div>
				<div class="content-login-top-mid"> 
					<p>名字：x小明</p>
					<p>13677778888</p>
				</div>
			</div>
			<div class="content-login-nav clearfix">
				<div class="content-login-navs fl" @click="toMsg()">
					<p class="content-login-navs-p2">23</p>
					<p class="content-login-navs-p1">我的消息</p>
				</div>
				<div class="content-login-navs fl" @click="toSub()">
					<p class="content-login-navs-p2">23</p>
					<p class="content-login-navs-p1">我的订阅</p>
				</div>
				<div class="content-login-navs fl" @click="toCollect()">
					<p class="content-login-navs-p2">23</p>
					<p class="content-login-navs-p1">我收藏的</p>
				</div>
				<div class="content-login-navs fl" @click="toEnroll()">
					<p class="content-login-navs-p2">23</p>
					<p class="content-login-navs-p1">我报名的</p>
				</div>
			</div>
			<div class="login-section">
				<p class="section-title">我咨询的</p>
				<div class="sections clearfix">
					<div class="sections-part fl" @click="toConsultTech()">
						<p class="content-login-navs-p3">15</p>
						<p class="content-login-navs-p1">技术</p>
					</div>
					<div class="sections-part fl" @click="toConsultNeed()">
						<p class="content-login-navs-p3">16</p>
						<p class="content-login-navs-p1">需求</p>
					</div>
				</div>
			</div>
			<div class="login-section">
				<p class="section-title">我发布的</p>
				<div class="sections clearfix">
					<div class="sections-part fl" @click="toPublishTech()">
						<p class="content-login-navs-p3">15</p>
						<p class="content-login-navs-p1">技术</p>
					</div>
					<div class="sections-part fl" @click="toPublishNeed()">
						<p class="content-login-navs-p3">16</p>
						<p class="content-login-navs-p1">需求</p>
					</div>
				</div>
			</div>
			<div class="login-section2 flex-box" @click="toAbout()">
				<div class="section2-icon fa fa-user-o"></div>
				<div class="section2-title">关于我们</div>
				<div class="section2-right fa fa-angle-right"></div>
			</div>
			<div class="login-section2 flex-box" @click="toSetting()">
				<div class="section2-icon fa fa-cog"></div>
				<div class="section2-title">个人设置</div>
				<div class="section2-right fa fa-angle-right"></div>
			</div>
		</div>
		<div class="content-login" v-else>
			<div class="content-login-top flex-box" @click="toLogin()">
				<div class="content-login-top-left"></div>
				<div class="content-login-top-mid">点击登录</div>
			</div>
			<div class="content-login-nav clearfix">
				<div class="content-login-navs fl">
					<p class="content-login-navs-p1">...</p>
					<p class="content-login-navs-p1">我的消息</p>
				</div>
				<div class="content-login-navs fl">
					<p class="content-login-navs-p1">...</p>
					<p class="content-login-navs-p1">我的消息</p>
				</div>
				<div class="content-login-navs fl">
					<p class="content-login-navs-p1">...</p>
					<p class="content-login-navs-p1">我的消息</p>
				</div>
				<div class="content-login-navs fl">
					<p class="content-login-navs-p1">...</p>
					<p class="content-login-navs-p1">我的消息</p>
				</div>
			</div>
			<div class="login-section">
				<p class="section-title">我咨询的</p>
				<div class="sections clearfix">
					<div class="sections-part fl">
						<p class="content-login-navs-p1">...</p>
						<p class="content-login-navs-p1">技术</p>
					</div>
					<div class="sections-part fl">
						<p class="content-login-navs-p1">...</p>
						<p class="content-login-navs-p1">需求</p>
					</div>
				</div>
			</div>
			<div class="login-section">
				<p class="section-title">我发布的</p>
				<div class="sections clearfix">
					<div class="sections-part fl">
						<p class="content-login-navs-p1">...</p>
						<p class="content-login-navs-p1">技术</p>
					</div>
					<div class="sections-part fl">
						<p class="content-login-navs-p1">...</p>
						<p class="content-login-navs-p1">需求</p>
					</div>
				</div>
			</div>
			<div class="login-section2 flex-box">
				<div class="section2-icon fa fa-user-o"></div>
				<div class="section2-title">关于我们</div>
			</div>
			<div class="login-section2 flex-box">
				<div class="section2-icon fa fa-cog"></div>
				<div class="section2-title">个人设置</div>
			</div>
		</div>
		<m-footer></m-footer>
	</div>
</template>

<script>
	import MFooter from '../components/m-footer'
	export default{
		data(){
			return {
				isLogin:true
			}
		},
		methods:{
			toLogin:function(){
				this.$router.push({path:'/login'});
//				this.$store.commit('tabFooter')
			},
			toMsg:function(){
				this.$router.push({path:'/personal-msg'});
			},
			toSub:function(){
				this.$router.push({path:'/personal-sub'});
			},
			toCollect:function(){
				this.$router.push({path:'/personal-collect'});
			},
			toEnroll:function(){
				this.$router.push({path:'/personal-enroll'});
			},
			toConsultTech:function(){
				this.$router.push({path:'/personal-consult'})
			},
			toConsultNeed:function(){
				this.$router.push({path:'/personal-consult/personal-consult-need'})
			},
			toPublishTech:function(){
				this.$router.push({path:'/personal-publish'})
			},
			toPublishNeed:function(){
				this.$router.push({path:'/personal-publish/personal-publish-need'})
			},
			toAbout:function(){
				this.$router.push({path:'/personal-about'})
			},
			toSetting:function(){
				this.$router.push({path:'/personal-setting'})
			}
		},
		components:{
		   MFooter
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	@import url("../../static/css/font-awesome.css");
	.content-login{
		.content-login-top{
			align-items: center;width: 100%;height: 6rem;background-color: #4DB4FF ;color:#FFFFFF;
			.content-login-top-left{
				width: 2.5rem;height: 2.5rem;border-radius: 50%;background-color: gainsboro;margin-left: 0.5rem;
				img{width:100%;height: 100%;border-radius: 50%;}
			}
			.content-login-top-mid{
				flex: 1;font-size: 0.7rem;font-family: Arial;margin-left: 0.6rem;margin-right: 0.5rem;
				p{height: 1.2rem;line-height: 1.2rem;}
			}
		}
		.content-login-nav{
			width: 100%;height: 3.5rem;
			.content-login-navs{
				width: 25%;font-size: 0.7rem;font-family: arial;color: #646464;text-align: center;
				.content-login-navs-p1{height:1.7rem ;line-height: 1.7rem;}
				.content-login-navs-p2{color: #4DB4FF;height: 1.2rem;line-height: 1.2rem;margin-top: 0.5rem;}
			}
		}
		.login-section{
			width: 96%;margin: 0 auto;margin-top: 0.55rem;
			.section-title{font-size: 0.7rem;color: #323232;font-family: arial;}
			.sections{
				width: 100%;
				.sections-part{
					width: 50%;font-size: 0.7rem;font-family: arial;color: #646464;text-align: center;
					.content-login-navs-p1{height:1.7rem ;line-height: 1.7rem;}
					.content-login-navs-p3{color: #323232;height: 1.2rem;line-height: 1.2rem;margin-top: 0.5rem;font-weight: bold;}
				}
			}
		}
		.login-section2{
			width:96%;margin: 0 auto;align-items: center;margin-top: 1.55rem;
			.section2-icon{width: 1rem;height: 1rem;font-size: 1rem;color: #4DB4FF;margin-right: 0.55rem;}
			.section2-title{font-size: 0.7rem;font-family: arial;color: #323232;flex: 1;}
			.section2-right{font-size: 1rem;color: #646464 ;}
		}
	}
</style>