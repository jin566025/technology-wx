<template>
	<div class="content">
		<div class="banner"></div>
		<div class="navs clearfix">
			<div class="nav fl" @click="toService()">
				<div class="nav-icon nav-icon1 fa fa-cubes"></div>
				<div class="nav-name">找技术</div>
			</div>
			<div class="nav fl" @click="toConsult()">
				<div class="nav-icon nav-icon2 fa fa-mortar-board"></div>
				<div class="nav-name">问专家</div>
			</div>
			<div class="nav fl" @click="toPolicy()">
				<div class="nav-icon nav-icon3 fa fa-map"></div>
				<div class="nav-name">申政策</div>
			</div>
			<div class="nav fl" @click="toActivity()">
				<div class="nav-icon nav-icon4 fa fa-files-o"></div>
				<div class="nav-name">报活动</div>
			</div>
			<div class="nav fl" @click="toMsg()">
				<div class="nav-icon nav-icon5 fa fa-file-text-o"></div>
				<div class="nav-name">看资讯</div>
			</div>
		</div>
		<div class="section">
			<div class="section-title clearfix">
				<div class="section-title-left fl">他山之石  可以攻玉</div>
				<div class="section-title-right fr clearfix">
					<a class="to-right-text">学习技术创新如何帮企业赚钱</a>
					<i class="to-right fa fa-angle-double-right"></i>
				</div>
			</div>
			<div class="section-content clearfix">
				<div class="sections fl">
					<div class="sections-content">
						<img src="../../static/image/test2.jpeg" />
					</div>
					<p class="sections-text">德国小企业为何称霸全球…</p>
				</div>
				<div class="sections fl">
					<div class="sections-content">
						<img src="../../static/image/test3.jpeg" />
					</div>
					<p class="sections-text">德国小企业为何称霸全球…</p>
				</div>
				<div class="sections fl">
					<div class="sections-content">
						<img src="../../static/image/test4.jpeg" />
					</div>
					<p class="sections-text">德国小企业为何称霸全球…</p>
				</div>
				<div class="sections fl">
					<div class="sections-content">
						<img src="../../static/image/test5.jpeg" />
					</div>
					<p class="sections-text">德国小企业为何称霸全球…</p>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="section-title clearfix">
				<div class="section-title-left fl">全球科技  为你所用</div>
				<div class="section-title-right fr clearfix">
					<a class="to-right-text">学习技术创新如何帮企业赚钱</a>
					<i class="to-right fa fa-angle-double-right"></i>
				</div>
			</div>
			<div class="section-content clearfix">
				<div class="sections fl">
					<div class="sections-content">
						<img src="../../static/image/test2.jpeg" />
					</div>
					<p class="sections-text">德国小企业为何称霸全球…</p>
				</div>
				<div class="sections fl">
					<div class="sections-content">
						<img src="../../static/image/test3.jpeg" />
					</div>
					<p class="sections-text">德国小企业为何称霸全球…</p>
				</div>
				<div class="sections fl">
					<div class="sections-content">
						<img src="../../static/image/test4.jpeg" />
					</div>
					<p class="sections-text">德国小企业为何称霸全球…</p>
				</div>
				<div class="sections fl">
					<div class="sections-content">
						<img src="../../static/image/test5.jpeg" />
					</div>
					<p class="sections-text">德国小企业为何称霸全球…</p>
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
			toPolicy:function(){
				this.$router.push({path:'/policy'})
			},
			toService:function(){
				this.$router.push({path:'/service'})
			},
			toConsult:function(){
				this.$router.push({path:'/consult'})
			},
			toActivity:function(){
				this.$router.push({path:'/activity'})
			},
			toMsg:function(){
				this.$router.push({path:'/msg'})
			}
			
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import url("../../static/css/font-awesome.css");
	.arial{font-family: Arial;}
	.bg-cover{background-repeat: no-repeat;background-position: center;background-size: cover;}
	.textover{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
	.content{
		.banner{width: 100%;height: 8.75rem;background-image: url(../../static/image/test1.jpeg);background-size: cover;background-position: center;background-repeat: no-repeat;}
		.navs{
			margin-top: 0.4rem;
			.nav{
				width: 20%;height: 2.9rem;text-align: center;padding: 0.3rem 0;
				.nav-icon{width: 1.5rem;height: 1.5rem;border-radius: 50%;margin: 0 auto;text-align:center;font-size: 0.7rem;line-height:1.5rem;color:#ffffff;}
				.nav-name{.arial;font-size: 0.65rem;color: #323232;}
				.nav-icon1{background-color: #1BD1A5;}
				.nav-icon2{background-color: #FFAC4A;}
				.nav-icon3{background-color: #8300D4;}
				.nav-icon4{background-color: #1F93FF;}
				.nav-icon5{background-color: #12C8E0;}
			}
		}
		.section{
			width: 17.75rem;margin: 0 auto;margin-top: 1.4rem;
			.section-title{
				.section-title-left{width: 8.4rem;font-size: 0.8rem;.arial;font-weight: bold;height: 1.2rem;line-height: 1.2rem;}
				.section-title-right{
					width: 8.8rem;color: #969696;.arial;font-size: 0.6rem;height: 1.2rem;line-height: 1.2rem;
					.to-right,.to-right-text{vertical-align: middle;}
					.to-right{font-size: 1rem;margin-right: 0.2rem;}
				}
			}
			.section-content{
				.sections{
					width: 8.5rem;height: 7.6rem;margin-right:0.75rem;margin-top: 0.75rem;
					.sections-content{
						width: 8.5rem;height: 6.4rem;
						img{width: 100%;height: 100%;}
					}
					.sections-text{height: 1.15rem;line-height: 1.15rem;color: rgba(16, 16, 16, 1);font-size: 0.7rem;font-family: Arial;.textover}
				}
				.sections:nth-child(2n+2){margin-right: 0;}
			}
			
		}
	}
	
</style>
