<template>
   
		<div class="content">
		     <ul class="list" >
		     	<li v-for="(item,index) in videoList" :key="index">
		     		<video :src="item.video_link" controls="nodownload" class="videoItem"></video>
		     		<div class="author">
		     			<b class="dfImg"><img :src="item.dfhheadsrc" alt="" /></b>
		     			<span class="dfCnt">{{item.dfhname}}</span>
		     		</div>
		     		<div class="bofang">
		     			<div class="videoBtn" @click="click(index)">
		     				<span></span>
		     			</div>
		     		</div>
		     	</li>
		     </ul>
		</div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>