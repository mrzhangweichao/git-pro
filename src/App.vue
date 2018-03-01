<template>
  <div id="app">
     <!--<v-header></v-header>-->
     <!--<v-content></v-content>-->
     <router-view name="totalheader"></router-view>
     <router-view name="header"></router-view>
     <router-view name="content"></router-view>
     <router-view name="footer"></router-view>
     <router-view name="saishi"></router-view>
  </div>
</template>

<script>
  
/* import Footer from "@/components/footer"
  import HomeHeader from "@/components/homeHeader"
  import Home from "@/components/home"*/
export default {
  components:{
    /*"v-footer": Footer,
    "v-header": HomeHeader,*/
    /*"v-content": Home*/
  }
}
</script>

<style lang = "scss">
  @import "~@/lib/reset.scss";

  html,body,#app{
    @include rect(100%,100%);
  }
  #app{
    @include flexbox();
    @include flex-direction(column);
    
    .total_header{
      @include rect(100%, 0.44rem);
      @include background-color(#fff);
      @include text-color(#666);
      @include text-align(center);
      @include line-height(0.44rem);
    }
    
    header{
      @include rect(100%, 0.36rem);
      @include background-color(#eee);
      @include text-color(#666);
      /*@include text-align(center);*/
      @include line-height(0.44rem);
    }
    .content{
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto);
    }
    footer{
      @include rect(100%, 0.5rem);
      @include background-color(#fff);
      @include border(2px 0 0 0,#eee);
      @include text-color(#333);
      
      ul{
        @include rect(100%,100%);
        @include flexbox();
        
        li{
           @include flex();
           @include flexbox();
           @include flex-direction(column);
           @include justify-content();
           @include align-items();
        }
      }
    }
      
  }
  

</style>
