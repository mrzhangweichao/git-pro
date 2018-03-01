<template>
  <header >
        <ul class="linkHeader">
        	 <router-link v-for="(item,index) in headerList" :key="index" :to="item.path">{{item.name}}</router-link>
        </ul>
  </header>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style