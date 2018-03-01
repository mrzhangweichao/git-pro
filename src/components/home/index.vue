<template>
  <div class="content" >
        <!--轮播-->
        <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">  
				    <div class="slideshow">  
				      <transition-group tag="ul" name="image" class="list">  
				        <li v-for="(item, index) in banner" :key="index" v-show="index===mark" class="oli" >  
				          <a href="#">  
				            <img :src="item.image_url" alt="">  
				          </a>  
				          <span class="title"><i>{{item.title}}</i></span>
				          <div class="pages">
				          	  <i>{{pagemark}}</i>
				              <b>/&nbsp;{{page}}</b>
				          </div>
				          
				        </li>  
				      </transition-group> 
				    </div>  
				    <div class="bar">  
				      <!--<span v-for="(item, index) in banner" :key="index" :class="{ 'active':index===mark }" @click="change(index)"></span>-->
				      
				    </div>  
			  </div>
			  <!--今日热门比赛-->
			  <div class="hotMatch">
			  	 <div class="hotTime">{{getNowFormatDate}}</div>
			  	 <div>|</div>
			  	 <!--<div class="" >查看今日热门比赛</div>-->
			  	 <router-link to="/schedule">查看今日热门比赛</router-link>
			  </div>
			  <div class="news">
			  	<ul class="newsList">
			  		<!--<li v-for="(item,index) in homeNews1" :key="index" v-if="item.miniimg.length == 0">
			  			  <div class="cnt_left">
			  			  	 <p>{{item.topic}}</p>
			  			  	 <span>{{item.source}}</span>
			  			  </div>
			  			  <div class="cnt_right" v-for="(items,i) in item.miniimg">
			  			  	<img :src="items.src" alt="" />
			  			  </div>
			  		</li>-->
			  		<router-link v-for="(item,index) in homeNews1" :key="index" v-if="item.miniimg.length == 3" :to="{name:'newsDetail',params:{newsID:item.rowkey,names:0}}" tag="li">
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