import axios from 'axios'

//异步操作；
export default{
	//context代表上下文对象，其实就是当前的这个vuex的实例
	actionHomeNews1(context,data){  //组件传过来的不是对象形式，这里直接data获取到数据；
		//console.log(data);
		axios.get(data)
		         .then(function(response){
		         	var result = response.data[0].data;
		         	//console.log(result);
		         	//显示的提交mutations；改变classList的状态;
		         	//var imgArr = [];
//		         	for(var i=0;i<result.length;i++){
//		         		imgArr.push((result[i].minimg)[0].src);
//		         	}
		         	//console.log(imgArr);
		         	context.commit({   //对象形式；
		         		type:"changeHomeNews1",
		         		data:result//result给mutations中的data
		         	})
		         	
		         	
		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionHomeNews3(context,data){  //组件传过来的不是对象形式，这里直接data获取到数据；
		//console.log(data);
		axios.get(data)
		         .then(function(response){
		         	var result = response.data[0].data;
		         	//console.log(result);
		         	//显示的提交mutations；改变classList的状态;
		         	//var imgArr = [];
//		         	for(var i=0;i<result.length;i++){
//		         		imgArr.push((result[i].minimg)[0].src);
//		         	}
		         	//console.log(imgArr);
		         	context.commit({   //对象形式；
		         		type:"changeHomeNews3",
		         		data:result//result给mutations中的data
		         	})
		         	
		         	
		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionHomeNews6(context,data){  //组件传过来的不是对象形式，这里直接data获取到数据；
		//console.log(data);
		axios.get(data)
		         .then(function(response){
		         	var result = response.data[0].data;
		         	//console.log(result);
		         	//显示的提交mutations；改变classList的状态;
		         	//var imgArr = [];
//		         	for(var i=0;i<result.length;i++){
//		         		imgArr.push((result[i].minimg)[0].src);
//		         	}
		         	//console.log(imgArr);
		         	context.commit({   //对象形式；
		         		type:"changeHomeNews6",
		         		data:result//result给mutations中的data
		         	})
		         	
		         	
		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionBanner(context,data){
		axios.get(data)
		       .then(function(response){
                    //console.log(response);
                    var result = response.data[0].data;
                    //console.log(result);
                     
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeBanner",
		         		data:result//result给mutations中的data
		         	})
		         	
		         	
		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionScheduleList(context,data){
		axios.get(data)
		       .then(function(response){
                    var time = [];
                    var result = response.data[0].data
                    //console.log(result);
                    for(var i=0;i<result.length;i++){
                    	time.push(result[i].starttime.substring(11,16));
                    }
                    //console.log(time);
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeScheduleList",
		         		data:{result:result,time:time}//result给mutations中的data
		         	})
		         	
		         	
		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionScheduleAll(context,data){
		axios.get(data)
		       .then(function(response){
                    var basketImg = [];
                    var footImg = [];
                    var guanzhu = [];
                    var guanzhuImg = [];
                    var result = response.data[0].data
                    //console.log(result);
                    var basketball = result[0].message;
                    var football = result[1].message;
                    var name1 = result[0].name;
                    var name2 = result[1].name;
                    
                    for(var i=0;i<basketball.length;i++){
                    	basketImg.push("http://sports.eastday.com/jscss/v4/" + basketball[i].imgurl.substring(9,basketball[i].imgurl.length))
                    }
                    for(var i=0;i<football.length;i++){
                    	footImg.push("http://sports.eastday.com/jscss/v4/" + football[i].imgurl.substring(9,football[i].imgurl.length))
                    }
                    guanzhu = basketball.concat(football);
                    guanzhuImg = basketImg.concat(footImg)
                    //console.log(guanzhu);
                    //console.log(guanzhuImg);
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeScheduleAll",
		         		data:{result:result,basketball:basketball,football:football,name1:name1,name2:name2,basketImg:basketImg,footImg:footImg,guanzhu:guanzhu,guanzhuImg:guanzhuImg}//result给mutations中的data
		         	})

		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionSaiShi(context,data){
		axios.get(data)
		       .then(function(response){
                    var result = response.data[0].data;
                    //console.log(result);
                   
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeSaiShi",
		         		data:result//result给mutations中的data
		         	})

		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionNBApm(context,data){
		axios.get(data)
		       .then(function(response){
                    var result = response.data[0].data.data
                    var nbaEastPm = result[1].list; 
                    var nbaWestPm = result[0].list;
                   
                   // console.log(nbaEastPm);
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeNBApm",
		         		data:{result:result,nbaEastPm:nbaEastPm,nbaWestPm:nbaWestPm}//result给mutations中的data
		         	})

		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionNBAtj(context,data){
		axios.get(data)
		       .then(function(response){
                    var result = response.data;
                    //console.log(result);
                    var resultArr = [];
                    for(var i=0;i<result.length;i++){
                    	resultArr.push(result[i].datatype);
                    }
                   // console.log(resultArr);
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeNBAtj",
		         		data:{result:result,resultArr:resultArr}//result给mutations中的data
		         	})

		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionXJpm(context,data){
		axios.get(data)
		       .then(function(response){
                    var result = response.data[0].data.data;
                    //console.log(result);
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeXJpm",
		         		data:{result:result}//result给mutations中的data
		         	})

		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionXJtj(context,data){
		axios.get(data)
		       .then(function(response){
                    var result = response.data;
                    //console.log(result);
                    var resultArr = [];
                    for(var i=0;i<result.length;i++){
                    	resultArr.push(result[i].data);
                    }
                    //console.log(resultArr);
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeXJtj",
		         		data:{result:result,resultArr:resultArr}//result给mutations中的data
		         	})

		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionVideo(context,data){
		axios.get(data)
		       .then(function(response){
                    var result = response.data[0].data;
                    console.log(result);
                   //console.log(result);
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeVideo",
		         		data:result//result给mutations中的data
		         	})

		         }).catch(function(error){
		         	console.log(error);
		         })
	},
	actionJieshuosj(context,data){
		axios.get(data)
		       .then(function(response){
                    var result = response.data;
                    //console.log(result);
                   //console.log(result);
		         	//显示的提交mutations；改变classList的状态
		         	context.commit({   //对象形式；
		         		type:"changeJieshuo",
		         		data:result//result给mutations中的data
		         	})

		         }).catch(function(error){
		         	console.log(error);
		         })
	}
}
