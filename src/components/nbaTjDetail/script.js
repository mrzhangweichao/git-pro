import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
	 
  data(){
    return {
       shujuList:["得分","篮板","抢断","助攻","盖帽","三分","效率","罚球"]
    }
  },
  mounted(){
      var urlNBApm = BASE_URL + "/users/nbaPM";
	  this.$store.dispatch("actionNBApm",urlNBApm);
	  
	  var urlnbatj = BASE_URL + "/users/nbatj";
	  this.$store.dispatch("actionNBAtj",urlnbatj);
	  
	  var nameID = this.$route.params.nameID;
	  console.log(nameID);
  },
  methods:{
    
  },

  computed:mapState([
  	"nbaPm",
  	"nbaTj"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
