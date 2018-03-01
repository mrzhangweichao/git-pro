import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
//引入mapState对象；
//mapState是	vuex对象下的子对象；
import {mapState} from 'vuex'

export default {
  data(){
    return {
       msg:"hello vuex"
    }
  },
  mounted(){
  	var url_scheduleAll = BASE_URL + "/users/scheduleAll";
  	this.$store.dispatch("actionScheduleAll",url_scheduleAll);
  },
  methods:{
    
  },
  //vuex解耦(计算属性没有自己的计算属性的写法)；
//computed:mapState([  //这里是数组；
//    "classList"//初始定义的状态；
//]),
  //vuex解耦(计算属性有计算属性写法)；
  computed:mapState([
  	 "scheduleList",
  	 "scheduleAll",
  	 "basketball",
  	 "football",
  	 "name1",
  	 "name2",
  	 "basketImg",
  	 "footImg"
  ]),
  components:{
    
  },
  watch:{
    
  }
}
