
export default {
  data(){
    return {
       saishiName:""
    }
  },
  mounted(){
    this.saishiName = this.$route.params.name;
    console.log(this.saishiName)
  },
  methods:{
    
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    
  }
}
