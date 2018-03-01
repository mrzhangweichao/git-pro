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
      var url3 = BASE_URL + "/users/homeNews3";
	  this.$store.dispatch("actionHomeNews3",url3);

  },
  methods:{
    
  },

  computed:mapState([
  	 "homeNews3"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
