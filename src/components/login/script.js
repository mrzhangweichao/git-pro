import Vue from 'vue'


import axios from "axios"
import {BASE_URL} from  "@/common/base.js"

export default {
  data(){
    return {
      password:"",
      phone:"",    
      phoneState:"",
      passwordState:"",   
     
      registerState: "default"
    }
  },
  mounted(){
    
  },
  methods:{
    validatePhone(phone){
    	var reg = /^1[3|4|5|7|8][0-9]{9}$/;
      if( reg.test(phone)){
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
            //提交数据到服务器，进行验证    
            if(this.passwordState == 'success' && this.phoneState == 'success'){
           	 var url = BASE_URL + "/users/login" 
           	 //console.log(url);
	            axios.get(url, {
	              params:{
	              phone:that.phone,
	              password: that.password,
	            }
	            }).then((response) => {
	            	console.log(response);
	            	var result = response.data
	              if(result == 1){
	              	alert("账号错误或未注册");
	              }else{
	              	console.log(result);
	              	for(var i=0;i<result.length;i++){
	              		if(that.password != result[i].password){
	              			 alert("密码错误");
	              		}else{
	              			alert("登录成功");
	              			localStorage.setItem("phone",that.phone);
			             		setTimeout(function(){
												location.href = '/#/user' ;
											},1000)
	              		}
	              	}
	              }
	            }).catch((error) => {
	              console.log(error)
	            })  
	            
	            //////////////////////
	            
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
  //  console.log(newVal)
     
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

