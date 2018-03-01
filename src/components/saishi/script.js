import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
	 
  data(){
    return {
        saishiId:"",
        saishiNum:"",
        saishiName:""
    }
  },
  mounted(){
  	   var id = this.$route.params.saishiID;
  	   this.saishiId = id;
  	   this.saishiNum = this.$route.params.num;
  	   this.saishiName = this.$route.params.name;
  	   console.log(this.saishiNum);
  	   console.log(this.saishiId);
       var urlsaiShi = BASE_URL + "/users/saiShi";
	   this.$store.dispatch("actionSaiShi",urlsaiShi,id);

  },
  methods:{
     
  },

  computed:mapState([
      "saiShi"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
