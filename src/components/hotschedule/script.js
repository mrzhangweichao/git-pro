import axios from 'axios'
import { BASE_URL } from "@/common/base.js"

//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
  data(){
    return {
//    test:""
    }
  },
  mounted(){
  	var url_scheduleList = BASE_URL + "/users/scheduleList";
  	this.$store.dispatch("actionScheduleList",url_scheduleList);
  	var urlsaiShi = BASE_URL + "/users/saiShi";
	  this.$store.dispatch("actionSaiShi",urlsaiShi);
  },
  methods:{
    
  },

  computed:mapState([
  	"scheduleList",
  	"test",
  	"saiShi"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
