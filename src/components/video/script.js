import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
	 
  data(){
    return {
       clickIndex:""
    }
  },
  mounted(){
     var urlvideo = BASE_URL + "/users/video";
  	 this.$store.dispatch("actionVideo",urlvideo);
  	 
//	 var playBtn = document.getElementsByClassName("videoBtn");
//	 playBtn.onclick(function(){
//	 	
//	 })
  },
  methods:{
    click(index){
    	this.clickIndex = index;
    	var vio = document.getElementsByClassName("videoItem")
    	var mengban = document.getElementsByClassName("bofang");
    	
    	for(var i=0;i<vio.length;i++){
    		if(this.clickIndex == i){
    			vio[this.clickIndex].play();
    			mengban[this.clickIndex].style.display = "none";
    		}else{
    			vio[i].pause();
    			mengban[i].style.display = "block";
    		}
    	}
    	
    	
    }
  },

  computed:mapState([
  	"videoList"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
