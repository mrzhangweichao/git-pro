<template>
	<footer>
		<ul>
			<router-link v-for="(item,index) in footerList" :to="item.path" :key="index" tag="li">
				<span :class="item.icon"></span>
				<span>{{item.name}}</span>
			</router-link>
		</ul>
	</footer>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>