<template>
   <div class="dataCnt">
   	   <div class="title">
		     <router-link to="/database/NBApm/Nba_pm" tag="div" class="pm box">排名</router-link>
		     <router-link to="/database/NBApm/Nba_tj" tag="div" class="tj box">统计</router-link>
		</div>
		<router-view></router-view>
   </div>
		
		
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>