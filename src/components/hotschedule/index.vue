<template>
  <div class="hotschedule" >
       <ul class="hotlist">
       	   <router-link v-for="(item,index) in scheduleList" :key="index" tag="li" :to="{name:'saishiDetail',params:{saishiID:item.saishi_id,matchNum:item.rowkey}}">
       	   	  <div class="tt box">
       	   	  	 <span class="time">{{test[index]}}</span>
       	   	  	 <span class="scheduleName">{{item.title02}}</span>
       	   	  </div>
       	   	  <div class="team box">
       	   	  	  <div class="team1 teams">
       	   	  	  	 <div class="teamLogo">
       	   	  	  	 	<img :src="item.home_logoname
" alt="" />
       	   	  	  	 </div>
       	   	  	  	 <div class="teamName">{{item.home_team}}</div>
       	   	  	  </div>
       	   	  	  <div class="team2 teams">
       	   	  	  	 <div class="teamLogo">
       	   	  	  	 	<img :src="item.visit_logoname
" alt="" />
       	   	  	  	 </div>
       	   	  	  	 <div class="teamName">{{item.visit_team}}</div>
       	   	  	  </div>
       	   	  </div>
       	   	  <div class="score box">
       	   	  	  <div>{{item.home_score}}</div>
       	   	  	  <div>{{item.visit_score}}</div>
       	   	  </div>
       	   	  <div class="state box">
       	   	  	 <div class="video"></div>
       	   	  	 <span>观看</span>
       	   	  </div>
       	   </router-link>
       </ul>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>