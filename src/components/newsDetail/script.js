import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
	 
  data(){
    return {
        rowkeys:"",
        list:[
        "/home",
        "/nba",
        "/cba",
        "/xijia",
        "/cfootball",
        "/nfootball"
        ],
        pageName:0
    }
  },
  mounted(){
     this.rowkeys = this.$route.params.newsID;
     console.log(this.rowkeys);
     this.pageName = Number(this.$route.params.names);
     console.log(this.pageName);
     
     var url1 = BASE_URL + "/users/homeNews1";
	 this.$store.dispatch("actionHomeNews1",url1);
	 
	 var url3 = BASE_URL + "/users/homeNews3";
	 this.$store.dispatch("actionHomeNews3",url3);
	 
	 var url6 = BASE_URL + "/users/homeNews6";
	 this.$store.dispatch("actionHomeNews6",url6);
  },
  methods:{
  	
  },

  computed:mapState([
      "homeNews1",
      "homeNews3",
      "homeNews6"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
