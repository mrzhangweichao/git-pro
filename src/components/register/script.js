import Vue from 'vue'
import { Field,Button,Toast  } from 'mint-ui';

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

import axios from "axios"
import {BASE_URL} from  "@/common/base.js"

export default {
  data(){
    return {
      password:"",
      phone:"",
      captcha:"",
      phoneState:"",
      passwordState:"",
      msg:"发送验证码",
      timer:"",
      codeState: false,
      code:"",
      registerState: "default"
    }
  },
  mounted(){
    
  },
  methods:{
    validatePhone(phone){
    	var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    	if(reg.test(phone)){
    		this.phoneState = "success"
    	}else{
    		this.phoneState = "error"
    	}
    	
    },
    validatePassword(password){
    	var reg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
      if(this.phone == ""){
        this.phoneState = "error"
      }
      if(reg.test(password)){
        this.passwordState = "success"
      }else{
        this.passwordState = "error"
      }
    },
    sendCode(){
      var num = 30;
      clearInterval(this.timer);
     this.timer =  setInterval(() =>{
        if(num == 0){
          num = 30;
          clearInterval(this.timer);
          this.msg = "发送验证码";
          this.codeState = false
        }else{
          this.msg = num + "s后重新发送";
          this.codeState = true
        }
        num--;
      },1000)
      //向后端请求数据
      var that = this;
      var url = BASE_URL + "/users/getcode";
      console.log(url);
      axios.get(url)
               .then(function(response){
               	  console.log(response);
               	  that.code = response.data;
               })
               .catch(function(err){
               	  console.log(err);
               })
    },
    register(){
      var that = this;
      if(this.phone == ""){
        this.phoneState = "error"
      }else{
        if(this.password == ""){
          this.passwordState = "error"
        }else{
          if(this.captcha == ""){
            Toast({
              message: '验证码不能为空',
              position: 'bottom',
              duration: 2000
            });
          }else{
            if(this.captcha == this.code && this.passwordState == 'success' && this.phoneState == 'success'){
            	//提交数据到服务器，进行验证
            	var url = BASE_URL + "/users/register"
		            axios.get(url, {
		              params:{
		              phone:that.phone,
		              password: that.password,
		            }
		            }).then((response) => {
		             	var result = response.data ;
		             	if(result == '1'){
		             		alert("注册成功！");
		             		setTimeout(function(){
											location.href = '/#/login' ;
										},1000)
		             	}else{
		             		alert("该手机号已被注册！")
		             	}
		            }).catch((error) => {
		              console.log(error)
		            })
            }else if(this.captcha != this.code){
            	  alert("验证码不正确！")
            }else{
            	 alert("手机号或密码不正确");
            }
          }
        }
      }
      
    }
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    phone(newVal,oldVal){
//    console.log(newVal)
     
      if(newVal == ""){
        this.registerState = "default"
      }else{
         this.registerState = "primary"
          this.validatePhone(newVal)
      }
     
    },
    password(newVal,oldVal){
//    console.log(newVal)
      this.validatePassword(newVal)
    }
  }
}
