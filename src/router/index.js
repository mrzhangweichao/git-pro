import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TotalHeader from "@/components/totalHeader"
import Home from "@/components/home"
import Schedule from "@/components/schedule"
import Database from "@/components/database"
import Video from "@/components/video"
import User from "@/components/user"
import Login from "@/components/login"
import Register from "@/components/register"
import NewsDetail from "@/components/newsDetail"

//import HomeHeader from "@/components/homeHeader"
//import ScheduleHeader from "@/components/scheduleHeader"
//import VideoHeader from "@/components/videoHeader"
//import RadioHeader from "@/components/radioHeader"
import ScheduleHeader from "@/components/scheduleHeader"
import Ptschedule from "@/components/ptschedule"
import Hotschedule from "@/components/hotschedule"

import UserHeader from "@/components/userHeader"
import Footer from "@/components/footer"

import SaiShiHeader from "@/components/saiShiHeader"
import Saishi from "@/components/saishi"
import SaishiDetail from "@/components/saishiDetail"

import Nba from "@/components/nba"
import Cba from "@/components/cba"
import Xijia from "@/components/xijia"
import Cfootball from "@/components/cfootball"
import Nfootball from "@/components/nfootball"
import LinkHeader from "@/components/linkHeader"

import DataHeader from "@/components/dataHeader"
import Nbapm from "@/components/nbapm"
import Nba_pm from "@/components/nba_pm"
import Nba_tj from "@/components/nba_tj"
import Xjpm from "@/components/xjpm"
import Xj_pm from "@/components/xj_pm"
import Xj_tj from "@/components/xj_tj"

import GuanZhu from "@/components/guanzhu"
import GuanZhuHeader from "@/components/guanzhuHeader"

import MyGuanZhu from "@/components/myguanzhu"
import MyGuanZhuHeader from "@/components/myguanzhuHeader"

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/schedule",redirect:"/schedule/hotschedule"},
    {path:"/database",redirect:"/database/NBApm"},
    {path:"/database/NBApm",redirect:"/database/NBApm/Nba_pm"},
    {path:"/database/XJpm",redirect:"/database/XJpm/Xj_pm"},
    {
      path: '/home',
      name: 'home',
      components:{
      	totalheader:TotalHeader,
        header:  LinkHeader,
        content: Home,
        footer: Footer
      }
    },
    {
      path: '/newsDetail/:newsID/page/:names',
      name: 'newsDetail',
      components:{
      	//totalheader:TotalHeader,
        //header:  LinkHeader,
        content: NewsDetail
        //footer: Footer
      }
    },
    {
      path: '/schedule',
      name: 'schedule',
      components:{
      	totalheader:ScheduleHeader,
        //header:  LinkHeader,
        content: Schedule,
        footer: Footer
      },
      children:[
         {
         	 path:'ptschedule',
         	 name:'ptschedule',
         	 component:Ptschedule
         },
         {
         	 path:'hotschedule',
         	 name:'hotschedule',
         	 component:Hotschedule
         }
      ]
    },
    {
      path: '/database',
      name: 'database',
      components:{
      	//totalheader:TotalHeader,
        header:  DataHeader,
        content: Database,
        footer: Footer
      },
      children:[
         {
         	 path:'NBApm',
         	 name:'NBApm',
         	 component:Nbapm,
         	 children:[
         	  {
         	    path:'Nba_pm',
         	    name:'Nba_pm',
         	    component:Nba_pm
         	  },  
         	  {
         	    path:'Nba_tj',
         	    name:'Nba_tj',
         	    component:Nba_tj
         	  }
         	 ]
         },
         {
         	 path:'XJpm',
         	 name:'XJpm',
         	 component:Xjpm,
	         	 children:[
	         	  {
	         	    path:'Xj_pm',
	         	    name:'Xj_pm',
	         	    component:Xj_pm
	         	  },  
	         	  {
	         	    path:'Xj_tj',
	         	    name:'Xj_tj',
	         	    component:Xj_tj
	         	  }
         	 ]
         }
      ]
    },
    {
      path: '/video',
      name: 'video',
      components:{
      	totalheader:TotalHeader,
        header:  LinkHeader,
        content: Video,
        footer: Footer
      }
    },
    {
      path: '/saishi/:saishiID/saishiName/:name/saishiNum/:num',
      name: 'saishi',
      components:{
      	  totalheader:SaiShiHeader,
//        header:  LinkHeader,
//        content: Video,
//        footer: Footer
          saishi:Saishi
        }
    },
    {
      path: '/saishiDetail/:saishiID/matchid/:matchNum',
      name: 'saishiDetail',
      components:{
   //   	  totalheader:SaiShiHeader,
//        header:  LinkHeader,
          content: SaishiDetail,
//        footer: Footer
          //saishi:Saishi
        }
    },
    {
      path: '/nba',
      name: 'nba',
      components:{
      	totalheader:TotalHeader,
        header: LinkHeader,
        content: Nba,
        footer: Footer
      }
    },
    {
      path: '/cba',
      name: 'cba',
      components:{
      	totalheader:TotalHeader,
        header:  LinkHeader,
        content: Cba,
        footer: Footer
      }
    },
    {
      path: '/xijia',
      name: 'xijia',
      components:{
      	totalheader:TotalHeader,
        header:  LinkHeader,
        content: Xijia,
        footer: Footer
      }
    },
    {
      path: '/cfootball',
      name: 'cfootball',
      components:{
      	totalheader:TotalHeader,
        header:  LinkHeader,
        content: Cfootball,
        footer: Footer
      }
    },
    {
      path: '/nfootball',
      name: 'nfootball',
      components:{
      	totalheader:TotalHeader,
        header:  LinkHeader,
        content: Nfootball,
        footer: Footer
      }
    },
    
    {
      path: '/user',
      name: 'user',
      components:{
        //header:  UserHeader,
        content: User,
        footer: Footer
      }
      
    },
    {
      path: '/login',
      name: 'login',
      components:{
        //header:  UserHeader,
        content: Login
        //footer: Footer
      }
      
    },
    {
      path: '/register',
      name: 'register',
      components:{
        //header:  UserHeader,
        content: Register
        //footer: Footer
      }
      
    },
    {
      path: '/guanzhu',
      name: 'guanzhu',
      components:{
        header: GuanZhuHeader,
        content: GuanZhu
        //footer: Footer
      }
      
    },
    {
      path: '/myguanzhu',
      name: 'myguanzhu',
      components:{
        header: MyGuanZhuHeader,
        content: MyGuanZhu
        //footer: Footer
      }
      
    }
  ]
})
