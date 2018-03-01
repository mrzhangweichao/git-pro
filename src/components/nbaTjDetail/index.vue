<template>
   
		<div class="nba_tj">
			<div class="left">
				<ul>
					<router-link v-for="(item,index) in shujuList" :to="{name:'Nba_tj_name',params:{nameID:index}}" :key="index" tag="li">{{item}}</router-link>
					<!--<li>篮板</li>
					<li>助攻</li>
					<li>抢断</li>
					<li>盖帽</li>
					<li>失误</li>
					<li>神投</li>
					<li>三分</li>
					<li>效率</li>
					<li>罚球</li>-->
					
				</ul>
			</div>
			<div class="right">
				<!--<router-view></router-view>-->
				
			</div>
		</div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>