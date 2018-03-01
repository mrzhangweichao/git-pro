import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
	 
  data(){
    return {

    }
  },
  mounted(){
      var urlNBApm = BASE_URL + "/users/nbaPM";
	  this.$store.dispatch("actionNBApm",urlNBApm);
  },
  methods:{
    
  },

  computed:mapState([
  	"nbaPm",
  	"nbaEastPm",
  	"nbaWestPm"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
