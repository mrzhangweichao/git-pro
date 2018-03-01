import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
import {mapState} from 'vuex'


export default {
  data(){
    return {
    	//isShow:false,
    	activeIndex:"",
    	//isGuanzhu:"关注",
    	isClick:false,
    	saishiID:""
    }
  },
  mounted(){
  	var url_scheduleAll = BASE_URL + "/users/scheduleAll";
  	this.$store.dispatch("actionScheduleAll",url_scheduleAll);
  	
  	var urlgetGuanzhu = BASE_URL + "/users/getGuanzhu";
  	axios(urlgetGuanzhu)
  	            .then((response)=>{
  	            	 var saishi = response.data;
  	            	 //console.log(saishi);
  	            	 var guanzhuBtn = document.getElementsByClassName("guanzhuBtn");
  	            	 for(var i=0;i<guanzhuBtn.length;i++){
  	            	 	  for(var j=0;j<saishi.length;j++){
  	            	 	  	if(guanzhuBtn[i].getAttribute("data_id") == saishi[j].saishiID){
  	            	 	  		 guanzhuBtn[i].innerHTML = "已关注";
   	 	                     guanzhuBtn[i].style.background = "#cecece";
   	 	                     guanzhuBtn[i].style.color = "#666";
  	            	 	  	}
  	            	 	  }
  	            	 	  
  	            	 }
  	            	 
  	            }).catch((error)=>{
  	            	console.log(error);
  	            })
  },
  methods:{
    click(index){
    	var that = this;
    	var urlGuanzhu = BASE_URL + "/users/guanzhu";
    	var urlRemoveguanzhu = BASE_URL + "/users/removeGz";
    	this.activeIndex = index;
      var guanzhuBtn = document.getElementsByClassName("guanzhuBtn");
      this.saishiID = guanzhuBtn[this.activeIndex].getAttribute("data_id");
      //console.log(this.saishiID);
      if(guanzhuBtn[this.activeIndex].innerHTML == "关注"){
        guanzhuBtn[this.activeIndex].innerHTML = "已关注";
   	 	  guanzhuBtn[this.activeIndex].style.background = "#cecece";
   	 	  guanzhuBtn[this.activeIndex].style.color = "#666";
   	 	  //console.log("11");
		   	 	  //保存到数据库；
		   	 	  axios.get(urlGuanzhu,{
		   	 	  	params:{
		   	 	  		saishiID:that.saishiID
		   	 	  	}
		   	 	  }).then((response) =>{
		   	 	  	console.log(response);
		   	 	  }).catch((error)=>{
		   	 	  	console.log(error);
		   	 	  })
		  }
      else{
      	guanzhuBtn[this.activeIndex].innerHTML = "关注";
   	 	  guanzhuBtn[this.activeIndex].style.background = "#f66";
   	 	  guanzhuBtn[this.activeIndex].style.color = "#fff";
   	 	  //从数据库删除；
   	 	  axios.get(urlRemoveguanzhu,{
	   	 	  	params:{
	   	 	  		saishiID:that.saishiID
	   	 	  	}
	   	 	  }).then((response) =>{
	   	 	  	console.log(response);
	   	 	  }).catch((error)=>{
	   	 	  	console.log(error);
	   	 	  })
      }
    }
  },
  created(){
  	
  },
   computed:mapState([  //这里是数组；
      //初始定义的状态；
      "guanzhu",
      "guanzhuImg"
   ]),
 
  components:{
    
  },
  watch:{
    
  }
}
