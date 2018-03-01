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
 
     var url6 = BASE_URL + "/users/homeNews6";
	 this.$store.dispatch("actionHomeNews6",url6);

  },
  methods:{
    
  },

  computed:mapState([
  	 "homeNews6"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
