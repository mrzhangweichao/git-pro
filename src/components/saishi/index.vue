<template>
	<div class="wrap">
		<!--<div class="header">
			<!--<h2 to="/schedule/ptschedule">〈</h2>-->
	     	<!--<h2>赛程</h2>
	     </div>-->
	     <div class="saishi_content" v-if="saishiNum > 0">
	     	<ul class="list">
	     		<li v-for="(item,index) in saiShi" v-show="(item.saishi_id==saishiId)">
	     			<div class="sName">{{item.title02}}</div>
                    <div class="top">{{item.starttime}}</div>
                    <div class="bottom">
                    	<div class="home_team team">
                    		<div class="teamLogo"><img :src="item.home_logoname" alt="" /></div>
                    		<div class="teamName">{{item.home_team}}</div>
                    	</div>
                    	<div class="score">
                    		<div class="sbox1">
                    			<span>{{item.home_score}}</span>
	                    		<span>-</span>
	                    		<span>{{item.visit_score}}</span>
                    		</div>
                    		<div class="sbox2"><router-link :to="{name:'saishiDetail',params:{saishiID:item.saishi_id,matchNum:item.rowkey}}" :key="index">观看</router-link></div>
                    	</div>
                    	<div class="visit_team team">
                    		<div class="teamLogo"><img :src="item.visit_logoname" alt="" /></div>
                    		<div class="teamName">{{item.visit_team}}</div>
                    	</div>
                    </div>
                </li>
	     	</ul>
	     </div>
	     <div class="saishi_content" v-else="saishiNum == 0">
	     	<div class="saishiNo">
	     		今日暂无{{saishiName}}赛事
	     	</div>
	     	 
	     </div>
	</div>
     
		
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>