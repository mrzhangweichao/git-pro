<template>
  <div class="content" >
       <router-link class="cnt_top" :to="path" tag="div">
       	   <i class="iconfont">&#xe610;</i>
       	   <div class="user">
       	   	   <span>{{user}}</span>
       	   </div>
       </router-link>
       <div class="cnt_bottom">
       	 <router-link class="guanzhu box" to="/myguanzhu" tag="div">
       	 	  <span class="iconfont">&#xe60f;&nbsp;关注</span>
       	 	  <span>〉</span>
       	 </router-link>
       	 <div class="tuichu box" @click="tuichu()"  v-show="isShow">
       	 	  <span class="iconfont">&#xe647;&nbsp;退出登录</span>
       	 	  <span>〉</span>
       	 </div>
       </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>