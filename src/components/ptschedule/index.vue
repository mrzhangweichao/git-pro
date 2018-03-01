<template>
  <div class="ptschedule" >
       <div class="baskeball xbox">
       	  <p class="titleName">{{name1}}</p>
       	  <ul class="bList list">
       	  	 <router-link v-for="(item,index) in basketball" :to="{name:'saishi',params:{saishiID:item.id,name:item.name,num:item.liveNum}}" tag="li" :key="index">
       	  	 	   <div class="logo"><img :src="basketImg[index]" alt="" /></div>
       	  	 	   <div class="name">{{item.name}}</div>
       	  	 	   <div class="num">
       	  	 	   	   今日<span>{{item.liveNum}}</span>场直播&nbsp;>
       	  	 	   </div>
       	  	 </router-link>
       	  </ul>
       </div>
       <div class="football xbox">
       	   <p class="titleName">{{name2}}</p>
       	   <ul class="fList list">
       	   	  <router-link v-for="(item,index) in football" :key="index" :to="{name:'saishi',params:{saishiID:item.id,name:item.name,num:item.liveNum}}" tag="li">
       	   	  	   <div class="logo"><img :src="footImg[index]" alt="" /></div>
	       	  	 	   <div class="name">{{item.name}}</div>
	       	  	 	   <div class="num" v-if="item.liveNum > 0">
	       	  	 	   	   今日<span>{{item.liveNum}}</span>场直播&nbsp;>
	       	  	 	   </div>
	       	  	 	   <div class="num" v-if="item.liveNum == 0">
	       	  	 	   	   今日无直播
	       	  	 	   </div>
       	   	  </router-link>
       	   </ul>
       </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>