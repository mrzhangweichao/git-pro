<template>
  <div class="content" >
      
      	<router-link to="/user" tag="span">x</router-link>
		  <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" :state = "phoneState"></mt-field>
		  <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" :state = "passwordState" class="psw"></mt-field>
		        <mt-button class="registerBtn" :type="registerState" @click="register()" size="large">登录</mt-button>        
		 <router-link to="/register" tag="b">注册账号</router-link>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>