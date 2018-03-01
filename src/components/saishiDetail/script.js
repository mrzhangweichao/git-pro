import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
	 
  data(){
    return {
       matchID:""
    }
  },
  mounted(){
  	  this.matchID = this.$route.params.matchNum;
  	  console.log(this.matchID);
   
      var url_jieshuo= BASE_URL + "/users/jieshuosj";
  	  this.$store.dispatch("actionJieshuosj",url_jieshuo);
  	  
  	  var urlsaiShi = BASE_URL + "/users/saiShi";
	  this.$store.dispatch("actionSaiShi",urlsaiShi);
   
  },
  methods:{
     
  },

  computed:mapState([
      "saiShi",
      "jieshuo"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
