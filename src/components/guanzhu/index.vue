<template>
  <div class="content" >
  	  <div class="wrap">
  	  	<ul>
  	  		<li v-for="(item,index) in guanzhu" :key="index" :disabled="isClick" >
  	  			 <div class="xbox">
  	  			 	  <img :src="guanzhuImg[index]" alt="" />
  	  			 	  <div class="name">{{item.name}}</div>
  	  			 </div>
  	  			 <div class="mengban">
  	  			      <div class="guanzhuBtn" @click.stop="click(index)" :data_id = "item.id">关注</div>
  	  			 </div>
  	  		</li>
  	  	</ul>
  	  </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>