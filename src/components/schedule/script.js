
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
  },
  methods:{
    
  },
  //vuex解耦(计算属性没有自己的计算属性的写法)；
//computed:mapState([  //这里是数组；
//    "classList"//初始定义的状态；
//]),
  //vuex解耦(计算属性有计算属性写法)；
  computed:{
  	newMsg(){
  		return this.msg.split("").reverse().join("");
  	},
  	...mapState({  //这里是对象；
  		classList:"classList"
  	})
  },
  components:{
    
  },
  watch:{
    
  }
}
