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
      var urlXJpm = BASE_URL + "/users/xjPM";
	  this.$store.dispatch("actionXJpm",urlXJpm);

  },
  methods:{
    
  },

  computed:mapState([
  	"xjPm"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
