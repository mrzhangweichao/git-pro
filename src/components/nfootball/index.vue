<template>
   
		<div class="content">
		     <div class="news">
			  	<ul class="newsList">
			  		<router-link v-for="(item,index) in homeNews6" :key="index" v-if="item.miniimg.length == 3" :to="{name:'newsDetail',params:{newsID:item.rowkey,names:5}}" tag="li">
			  			  <div class="cnt_top">
			  			  	 <p>{{item.topic}}</p>
			  			  </div>
			  			  <div class="cnt_middle" >
			  			  	<img v-for="(items,i) in item.miniimg" :src="items.src" alt="" />
			  			  </div>
			  			  <div class="cnt_bottom">
			  			  	<span>{{item.source}}</span>
			  			  </div>
			  		</router-link>
			  	</ul>
			  </div>
		</div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>