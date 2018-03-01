<template>
  <div class="content" >
  	   <!--<span>x</span>-->
  	   <router-link to="/user" tag="span">x</router-link>
       <mt-field  placeholder="手机号" type="tel" v-model="phone" :state = "phoneState"></mt-field>
       <mt-field  placeholder="密码" type="password" v-model="password" :state = "passwordState"></mt-field>
       <mt-field placeholder="验证码"  v-model="captcha">
       <mt-button type="default"  :disabled = "codeState" @click="sendCode()">{{msg}}</mt-button>
       </mt-field>
       <mt-button class="registerBtn" :type="registerState" @click="register()" size="large">注册</mt-button>
        <router-link to="/login" tag="b">已注册,<i>直接登录</i></router-link>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>