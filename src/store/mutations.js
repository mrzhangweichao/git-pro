
//改变状态的的集合----显示的提交mutation
//从组件中传递过来得是一个对象，这里用obj
//that.$store.commit({
//  type:"",
//  data:data//定义什么名字在mutations中就用什么名字；
// })
export default {
  changeHomeNews1(state,obj){
  	state.homeNews1 = obj.data
  },
  changeHomeNews3(state,obj){
  	state.homeNews3 = obj.data
  },
  changeHomeNews6(state,obj){
  	state.homeNews6 = obj.data
  },
  changeBanner(state,obj){
  	state.banner = obj.data
  },
  changeScheduleList(state,obj){
  	state.scheduleList = obj.data.result;
  	state.test = obj.data.time;
  },
  changeScheduleAll(state,obj){
  	state.scheduleAll = obj.data.result;
  	state.basketball = obj.data.basketball;
  	state.football = obj.data.football;
  	state.name1 = obj.data.name1;
  	state.name2 = obj.data.name2;
  	state.footImg = obj.data.footImg;
  	state.basketImg = obj.data.basketImg;
  	state.guanzhu = obj.data.guanzhu;
  	state.guanzhuImg = obj.data.guanzhuImg;
  },
  changeSaiShi(state,obj){
  	state.saiShi = obj.data
  },
  changeNBApm(state,obj){
  	state.nbaPm = obj.data.result;
  	state.nbaEastPm = obj.data.nbaEastPm;
  	state.nbaWestPm = obj.data.nbaWestPm;
  },
  changeNBAtj(state,obj){
  	state.nbaTj = obj.data.result;
  	state.nbaTongj = obj.data.resultArr;
  },
  changeXJpm(state,obj){
  	state.xjPm = obj.data.result;
  },
  changeXJtj(state,obj){
  	state.xjTj = obj.data.result;
  	state.xjTongj = obj.data.resultArr;
  },
  changeVideo(state,obj){
  	state.videoList = obj.data;
  },
  changeJieshuo(state,obj){
  	state.jieshuo = obj.data;
  }
}