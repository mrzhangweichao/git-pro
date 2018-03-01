<template>
	<div class="wrap">
		<router-link class="fanhui" to="/schedule" tag="div">〈</router-link>
		<div class="bisaiHeader" v-for="(item,index) in saiShi" :key="index" v-if="item.rowkey == matchID">
			<div class="homeTeam team">
				<div class="logo">
					<img :src="item.home_logoname" alt="" />
				</div>
				<div class="name">
					<span>
						{{item.home_team}}
					</span>
					
				</div>
			</div>
			<div class="detail">
				<div class="name">{{item.title02}}</div>
				<div class="time">{{item.starttime}}</div>
				<div class="score">
					<div class="home_score sj"><span>{{item.home_score}}</span></div>
					<div class="sj"><span>:</span></div>
					<div class="visit_sore sj"><span>{{item.visit_score}}</span></div>
				</div>
				<div class="zhibo">图文直播室</div>
			</div>
			<div class="visitTeam team">
				<div class="logo">
					<img :src="item.visit_logoname" alt="" />
				</div>
				<div class="name">
					<span>{{item.visit_team}}</span>
				</div>
				
			</div>
		</div>
		<div class="jieshuo">
			<ul class="list" v-for="(item,index) in jieshuo" :key="index">
				<li v-for="(items,i) in item.data">
					<div class="score_jie">
						<div class="bifen">
							<span>{{items.home_score}}</span>
							<span>-</span>
							<span>{{items.visit_score}}</span>
						</div>
						<div class="jie">
							<span>{{items.pid_text}}</span>
						</div>
					</div>
					
					<div class="cnt1">
						<span>{{items.live_text}}</span>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
     
		
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>