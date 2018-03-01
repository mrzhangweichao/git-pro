import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
	 
  data(){
    return {
       //shujuList:["得分","篮板","抢断","助攻","盖帽","三分","效率","罚球"],
       shujuList:[
          {"name":"得分榜","id":0},
          {"name":"篮板榜","id":1},
          {"name":"抢断榜","id":2},
          {"name":"助攻榜","id":3},
          {"name":"盖帽榜","id":4},
          {"name":"三分榜","id":5},
          {"name":"效率榜","id":6},
          {"name":"罚球榜","id":7}
       ]
    }
  },
  mounted(){
      var urlNBApm = BASE_URL + "/users/nbaPM";
	  this.$store.dispatch("actionNBApm",urlNBApm);
	  
	  var urlnbatj = BASE_URL + "/users/nbatj";
	  this.$store.dispatch("actionNBAtj",urlnbatj);
	  
	  //console.log(this.$route);
//	  var nameID = this.$route.params.nameid;
//	  console.log(nameID)
  },
  methods:{
    click(){
    	console.log("a")
    }
  },

  computed:mapState([
  	"nbaPm",
  	"nbaTj",
  	"nbaTongj"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
