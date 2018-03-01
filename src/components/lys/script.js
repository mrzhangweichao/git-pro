import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
import {mapState} from 'vuex'


export default {
  data(){
    return {
    	isShow1:true,
    	isShow2:true,
    	isShow3:true,
    	guanzhuSaishi:[],
    	guanzhuImg:[],
    	//show:true,
    	clickIndex1:"",
    	clickIndex2:"",
    	saishiID:""
    	
    }
  },
  mounted(){
  	var url_scheduleAll = BASE_URL + "/users/scheduleAll";
  	this.$store.dispatch("actionScheduleAll",url_scheduleAll);
  	
  },
  methods:{
    //关注与取消关注；
    //关注；
    clickG(index){
    	var urlGuanzhu = BASE_URL + "/users/guanzhu";
    	this.clickIndex1 = index;
    	var that = this;
    	 var gBtn = document.getElementsByClassName("guan");
    	 var ngBtn = document.getElementsByClassName("noGuan");
    	 this.saishiID = gBtn[this.clickIndex1].getAttribute("data_id");
    	 gBtn[this.clickIndex1].style.display = "none";
    	 ngBtn[this.clickIndex1].style.display = "block";
   	 	  //console.log("11");
		   	 	  //保存到数据库；
		   	 	  axios.get(urlGuanzhu,{
		   	 	  	params:{
		   	 	  		saishiID:that.saishiID
		   	 	  	}
		   	 	  }).then((response) =>{
		   	 	  	//console.log(response);
		   	 	  }).catch((error)=>{
		   	 	  	console.log(error);
		   	 	  })
    	 
    },
    //取消；
    clickNg(index){
    	this.clickIndex2 = index;
    	var urlRemoveguanzhu = BASE_URL + "/users/removeGz";
    	var that = this;
    	 var gBtn = document.getElementsByClassName("guan");
    	 var ngBtn = document.getElementsByClassName("noGuan");
    	 this.saishiID = ngBtn[this.clickIndex2].getAttribute("data_id");
    	 gBtn[this.clickIndex2].style.display = "block";
    	 ngBtn[this.clickIndex2].style.display = "none";
    	 
    	 axios.get(urlRemoveguanzhu,{
	   	 	  	params:{
	   	 	  		saishiID:that.saishiID
	   	 	  	}
	   	 	  }).then((response) =>{
	   	 	  	//console.log(response);
	   	 	  }).catch((error)=>{
	   	 	  	console.log(error);
	   	 	  })
    	 
    }
  },
  created(){

  	var that = this;
  	var urlgetGuanzhu = BASE_URL + "/users/getGuanzhu";
    var url_scheduleAll = BASE_URL + "/users/scheduleAll";
  	axios(urlgetGuanzhu)
  	            .then((response)=>{
  	            	var result = response.data;
  	            	//console.log(result);
  	            	 if(localStorage.getItem("phone") && result.length>0){
  	            	 	  this.isShow1 = false;
                      this.isShow2 = false;
                      this.isShow3 = true;
                      //console.log(result);
                      axios(url_scheduleAll)
                               .then((response)=>{
                               	   //console.log(response.data[0].data);
                               	   var shuju = response.data[0].data;
                               	   var shujuArr = shuju[0].message.concat(shuju[1].message)
                               	   //console.log(shujuArr);
                               	   for(var i=0;i<shujuArr.length;i++){
                               	   	  for(var j=0;j<result.length;j++){
                               	   	  	 if(shujuArr[i].id == result[j].saishiID){
                               	   	  	 	  that.guanzhuSaishi.push(shujuArr[i]);
                               	   	  	 }
                               	   	  }
                               	   }
                               	   for(var k=0;k<that.guanzhuSaishi.length;k++){
                               	   	  that.guanzhuImg.push("http://sports.eastday.com/jscss/v4/" + that.guanzhuSaishi[k].imgurl.substring(9,that.guanzhuSaishi[k].imgurl.length))
                               	   }
                               	   
                               }).catch((error)=>{
                               	  console.log(error);
                               })
  	            	 }
  	            	 if(!localStorage.getItem("phone")){
  	            	 	  this.isShow1 = true;
  	            	 	  this.isShow2 = false;
  	            	 	  this.isShow3 = false;
  	            	 }
  	            	 if(localStorage.getItem("phone") && result.length == 0){
  	            	 	  this.isShow1 = false;
                      this.isShow2 = true;
                      this.isShow3 = false;
  	            	 }
  	            	 
  	            }).catch((error)=>{
  	            	console.log(error);
  	            })
  	  
  },
   computed:mapState([  //这里是数组；
      //初始定义的状态；
      "guanzhu"
      //"guanzhuImg"
   ]),
 
  components:{
    
  },
  watch:{
    
  }
}
