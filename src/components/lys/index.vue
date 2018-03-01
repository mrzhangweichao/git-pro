<template>
  <div class="content" >
  	  <div class="noLogin" v-if="isShow1">
  	  	 <span>您还未登录</span>
  	  	 <router-link to="/login" tag="b">登&nbsp;录</router-link>
  	  </div>
  	  <div class="noGuanzhu" v-if="isShow2">
  	  	 <span>您还未添加关注的赛事</span>
  	  	 <router-link to="/guanzhu" tag="b">去&nbsp;关&nbsp;注</router-link>
  	  </div>
  	  <div class="getGuanzhu" v-if="isShow3">
  	  	<ul>
  	  		<li v-for="(item,index) in guanzhuSaishi" :key="index">
  	  			<div class="logo">
  	  				<img :src="guanzhuImg[index]" alt="" />
  	  				<div class="name">{{item.name}}</div>
  	  			</div>
  	  			<div class="guanzhuBtn">
  	  				 <span class="guan"  :data_id="item.id" @click="clickG(index)">关注</span>
  	  				 <span class="noGuan"  :data_id="item.id" @click="clickNg(index)">已关注</span>
  	  			</div>
  	  		</li>
  	  	</ul>
  	  	 <div class="goGuanzhu"><router-link to="/guanzhu" tag="span">关注更多</router-link></div>
  	  </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>