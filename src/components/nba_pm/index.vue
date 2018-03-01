<template>
   
		<div class="nba_pm">
			<div class="pmHeader">
				<ul>
					<li class="eastPm pm">东部排名</li>
					<li>胜</li>
					<li>负</li>
					<li>胜率</li>
					<li class="sc">胜差</li>
				</ul>
			</div>
			<div class="pmDetail">
				<ul>
					<li v-for="(item,index) in nbaEastPm" :key="index">
						<div class="mingci" :class="{active:item['排名']<9}">{{item["排名"]}}</div>
						<div class="logo"><img :src="item['球队图标']"/></div>
						<div class="name">{{item["球队"]}}</div>
						<div class="win">{{item["胜"]}}</div>
						<div class="lose">{{item["负"]}}</div>
						<div class="shenglv">{{item["胜率"]}}</div>
						<div class="shengcha">{{item["胜差"]}}</div>
					</li>
				</ul>
			</div>
			
			<div class="pmHeader" style="border-top:1px solid #cecece;padding-top:10px;">
				<ul>
					<li class="westPm pm">西部排名</li>
					<li>胜</li>
					<li>负</li>
					<li>胜率</li>
					<li>胜差</li>
				</ul>
			</div>
			<div class="pmDetail">
				<ul>
					<li v-for="(item,index) in nbaWestPm" :key="index">
						<div class="mingci" :class="{active:item['排名']<9}">{{item["排名"]}}</div>
						<div class="logo"><img :src="item['球队图标']"/></div>
						<div class="name">{{item["球队"]}}</div>
						<div class="win">{{item["胜"]}}</div>
						<div class="lose">{{item["负"]}}</div>
						<div class="shenglv">{{item["胜率"]}}</div>
						<div class="shengcha">{{item["胜差"]}}</div>
					</li>
				</ul>
			</div>
		</div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>