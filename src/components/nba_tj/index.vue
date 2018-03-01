<template>
   <div class="wrap">
   	   <ul class="list" v-for="(item,index) in nbaTongj">
   	   	  <li class="datatype">{{shujuList[index].name}}</li>
   	   	  <ul class="xbox">
	   	   	  	<li class="detail" v-for="(items,i) in item" v-if="i<3">
	   	   	  	   <div class="pm type" :class="{active:items['排名']<4}">{{items["排名"]}}</div>
	       	   	   <div class="qy type">{{items["球员"]}}</div>
	       	   	   <div class="qd type">{{items["球队"]}}</div>
	       	   	   <div class="cj type">{{items["场均"]}}</div>
	   	   	    </li>
   	   	  </ul>
   	   	  
   	   </ul>
   	
   </div>
		
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>