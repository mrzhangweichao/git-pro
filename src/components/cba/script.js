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
      var url1 = BASE_URL + "/users/homeNews1";
	  this.$store.dispatch("actionHomeNews1",url1);

  },
  methods:{
    
  },

  computed:mapState([
  	 "homeNews1"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
