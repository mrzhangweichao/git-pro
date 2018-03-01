<template>
   <div class="xj_pm">
		<div class="pmHeader">
			<ul>
				<li class="xjPm pm">排名</li>
				<li>场次</li>
				<li>胜</li>
				<li>平</li>
				<li>负</li>
				<li>进/失球</li>
				<li class="jf">积分</li>
			</ul>
		</div>
		<div class="pmDetail">
			<ul>
				<li v-for="(item,index) in xjPm" :key="index">
					<div class="mingci" :class="{active:item['排名']<4}">{{item["排名"]}}</div>
					<div class="logo"><img :src="item['球队图标']"/></div>
					<div class="name">{{item["球队"]}}</div>
					<div class="changNum">{{item["场次"]}}</div>
					<div class="win">{{item["胜"]}}</div>
					<div class="win">{{item["平"]}}</div>
					<div class="lose">{{item["负"]}}</div>
					<div class="jinshi">{{item["进/失球"]}}</div>
					<div class="jifen">{{item["积分"]}}</div>
				</li>
			</ul>
		</div>
    </div>	
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>