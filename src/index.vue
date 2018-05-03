<template>
	<div id="main">
		
		<keep-alive>
			<router-view v-wechat-title='$route.meta.title'></router-view>
		</keep-alive>
		
	</div>
</template>

<script>
	import MFooter from './components/m-footer'

	export default{
		components:{
		   MFooter
		}
	}
</script>

<style>
@import url("../static/css/common.css");
body{overflow-x: hidden;}
#main{width: 100%;overflow-x: hidden;}
</style>