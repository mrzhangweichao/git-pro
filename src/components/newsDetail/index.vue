<template>
   
		<div class="content" style="overflow: visible;" v-if="pageName == 1">
			<router-link :to="list[pageName]" class="header iconfont" tag="div">&#xe63a;</router-link>
			<div class="wrap">
				<div class="title" v-for="(item,index) in homeNews3" v-if="item.rowkey == rowkeys">
			     	<h1>{{item.topic}}</h1>
			     	<div class="author">
			     		<span>{{item.source}}</span>
			     		<span>{{item.date}}</span>
			     	</div>
			     </div>
			     <div class="cnt">
			     	<p>内容1</p>
			     	<img v-for="(item,index) in homeNews3" v-if="item.rowkey == rowkeys" :src="item.miniimg[0].src" alt="" />
			     	<p>内容2</p>
			     	<img v-for="(item,index) in homeNews3" v-if="item.rowkey == rowkeys" :src="item.miniimg[1].src" alt="" />
			     	<p>内容3</p>
			     	<img v-for="(item,index) in homeNews3" v-if="item.rowkey == rowkeys" :src="item.miniimg[2].src" alt="" />
			     </div>
			</div>
		     
		</div>
		
		<div class="content" style="overflow: visible;" v-else-if="pageName == 5">
			<router-link :to="list[pageName]" class="header iconfont" tag="div">&#xe63a;</router-link>
			<div class="wrap">
				<div class="title" v-for="(item,index) in homeNews6" v-if="item.rowkey == rowkeys">
			     	<h1>{{item.topic}}</h1>
			     	<div class="author">
			     		<span>{{item.source}}</span>
			     		<span>{{item.date}}</span>
			     	</div>
			     </div>
			     <div class="cnt">
			     	<p>内容1</p>
			     	<img v-for="(item,index) in homeNews6" v-if="item.rowkey == rowkeys" :src="item.miniimg[0].src" alt="" />
			     	<p>内容2</p>
			     	<img v-for="(item,index) in homeNews6" v-if="item.rowkey == rowkeys" :src="item.miniimg[1].src" alt="" />
			     	<p>内容3</p>
			     	<img v-for="(item,index) in homeNews6" v-if="item.rowkey == rowkeys" :src="item.miniimg[2].src" alt="" />
			     </div>
			</div>
		     
		</div>
		
		<div class="content" style="overflow: visible;" v-else-if="pageName != 1 && pageName != 5">
			<router-link :to="list[pageName]" class="header iconfont" tag="div">&#xe63a;</router-link>
			<div class="wrap">
				<div class="title" v-for="(item,index) in homeNews1" v-if="item.rowkey == rowkeys">
			     	<h1>{{item.topic}}</h1>
			     	<div class="author">
			     		<span>{{item.source}}</span>
			     		<span>{{item.date}}</span>
			     	</div>
			     </div>
			     <div class="cnt">
			     	<p>内容1</p>
			     	<img v-for="(item,index) in homeNews1" v-if="item.rowkey == rowkeys" :src="item.miniimg[0].src" alt="" />
			     	<p>内容2</p>
			     	<img v-for="(item,index) in homeNews1" v-if="item.rowkey == rowkeys" :src="item.miniimg[1].src" alt="" />
			     	<p>内容3</p>
			     	<img v-for="(item,index) in homeNews1" v-if="item.rowkey == rowkeys" :src="item.miniimg[2].src" alt="" />
			     </div>
			</div>
		     
		</div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>