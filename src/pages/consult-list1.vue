<template>
	<div class="lg-section">
		<div class="section-main flex-box" @click="toDetail()">
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
</template>

<script>
	export default{
		methods:{
			toDetail:function(){
				this.$router.push({path:'/consult-list1-detail'})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.lg-section{
		width:96%;margin:0 auto;padding:0.2rem;
		
		.section-main{
			align-items: center;margin-bottom: 1.05rem;
			.section-main-left{width: 4rem;height: 4rem;margin-right: 0.55rem;}
			.section-main-right{
				flex: 1;width: 70%;
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