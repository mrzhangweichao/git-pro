
export default {
  data(){
    return {
    	user:"登录/注册",
    	path:"/register",
    	isShow:false
    }
  },
  mounted(){
  	/**
    * 如果用户是登录的状态
    * this.$router.push("/user/login")
    * 如果未登录
    * this.$router.push("/user/noLogin")
    */
     if(localStorage.getItem("phone")){
     	 var str = localStorage.getItem("phone"); 
     	 this.user = str.substr(0, 3) + '****' + str.substr(7);
     	 //this.path = "/user";
     	 this.isShow = true;
     }else{
     	this.user = "登录/注册";
     	this.path = "register";
     	//this.path = "/register";
     	this.isShow = false;
     }
  	
  },
  methods:{
    tuichu(){
    	localStorage.removeItem("phone");
    	console.log("aaa");
    	this.user = "登录/注册";
    	//location.href = "/#/user";
    	this.isShow = false;
    }
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    
  }
}
