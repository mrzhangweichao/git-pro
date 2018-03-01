import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
import {mapState} from 'vuex'

export default {
  data(){
    return {
    	mark: 0,
    	page:6,
    	pagemark:1,
    	currentdate:""
    }
  },
  mounted(){
  	
  	var url1 = BASE_URL + "/users/homeNews1";
	  this.$store.dispatch("actionHomeNews1",url1);
	  
	  var urlbanner = BASE_URL + "/users/homeBanner";
	  this.$store.dispatch("actionBanner",urlbanner); 
	  
	  var urlvideo = BASE_URL + "/users/video";
  	 this.$store.dispatch("actionVideo",urlvideo);
  },
  methods:{
     autoPlay(){  
     	var oLi = document.getElementsByClassName("oli");
     	this.page = oLi.length;
      this.mark++;
      this.pagemark++;
      if (this.mark === oLi.length) { //当遍历到最后一张图片置零  
        this.mark = 0  
      } 
      if (this.pagemark === oLi.length + 1) { //当遍历到最后一张图片置零  
        this.pagemark = 1  
      }
    },
    play(){  
    	var that = this;
      setInterval(this.autoPlay, 3000)  
    },  
//  change(i) {  
//    this.mark = i  
//  },
     stop () {  
      clearInterval(this.timer)  
    },  
    move () {  
      this.timer = setInterval(this.autoPlay, 3000)  
    },
    pointMove(){}
  },
  created(){
  	this.play();
  },
// computed:mapState([  //这里是数组；
//    "homeNews1",//初始定义的状态；
//    "banner"
// ]),
 computed:{
 	  getNowFormatDate() {
	    var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	   this.currentdate = date.getFullYear() +  seperator1 + month + "月" + seperator1 + strDate + "日";
	    return this.currentdate;
	},
	...mapState({
		 banner:"banner",
		 homeNews1:"homeNews1",
		 videoList:"videoList"
	})
 },
  components:{
    
  },
  watch:{
    
  }
}
