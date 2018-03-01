import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
	 
  data(){
    return {
	     shujuList:[
	          {"name":"射手榜","id":0},
	          {"name":"助攻榜","id":1},
	          {"name":"射门榜","id":2},
	          {"name":"抢断榜","id":3},
	          {"name":"传球榜","id":4},
	          {"name":"扑救榜","id":5},
	          {"name":"传球威胁","id":6},
	          {"name":"犯规","id":7}
	   ]
    }
  },
  mounted(){
      var urlXJpm = BASE_URL + "/users/xjPM";
	  this.$store.dispatch("actionXJpm",urlXJpm);
	  
	  var urlxjtj = BASE_URL + "/users/xjtj";
	  this.$store.dispatch("actionXJtj",urlxjtj);
  },
  methods:{
    
  },

  computed:mapState([
  	"xjPm",
  	"xjTj",
  	"xjTongj"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
