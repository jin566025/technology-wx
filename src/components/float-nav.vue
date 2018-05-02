<template>
	<div class="content" @click="toPublish()">
		发布
	</div>
</template>

<script>
	export default{
		methods:{
			toPublish:function(){
				this.$router.push({path:'/service-publish'})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content{
	position: fixed;right: 0.5rem;bottom: 4rem;width: 2.25rem;height: 2.25rem;text-align: center;line-height: 2.25rem;border-radius: 50%;background-color: #4DB4FF;color: #FFFFFF;font-size: 0.7rem;font-family: Arial;
}
</style>