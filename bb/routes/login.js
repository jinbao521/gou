var express=require("express");
	var mysql = require('mysql');       //引入mysql
	var router=express.Router();

	// router.get("/list",function(req,res){    //请求参数  响应参数
	// 	console.log("into list")
	// 	res.send([{"news":[{title:"母亲节",time:"2017-5-14"},{title:"母亲节",time:"2017-5-14"}]}])
	// })

var pool = mysql.createPool({
		host:'127.0.0.1',
		user:'root',
		password:'',        //mysql安装设置的密码
		database:'dog',   //数据库名称
		port:'3306'        //端口后
})

//获取信息列表
// function getName (username,callback){
// 	console.log('into getName....')
//     pool.getConnection(function(err, connection) {
//      var getAllUsers_Sql ="select * from  denglu where username=?";       //查询数据表
//         connection.query(getAllUsers_Sql,[username],function(err, result) {
// 		console.log("result:"+result)
//         if (err) {
//             console.log("getName Error: " + err.message);
//             return;
//         }
//         connection.release();
//         callback(err,result);
//         });
//     });
// }

// 	router.post('/denglu',function(req,res){
// 		res.header("Access-Control-Allow-Origin","*")    //设置表头
// 		var username=req.body.username;
// 		var password=req.body.password;
// 		getName(username,function(err,result){
// 			if(result.length>0){
// 				res.send({flag:2})
// 				return;
// 			}	
// 		})
// 	})
//插入数据
// function charu (user,pass,callback){
// 	console.log('into charu....')
//     pool.getConnection(function(err, connection) {    
//  	var getAllUsers_Sql="insert into denglu (username,password) values('?','?')"  //插入数据
//         connection.query(getAllUsers_Sql,[user],[pass],function(err, result) {
// 		console.log("result:"+result)
//         if (err) {
//             console.log("charu Error: " + err.message);
//             return;
//         }
//         connection.release();
//         callback(err,result);
//         });
//     });
// }

// router.post('/denglu',function(req,res){
// 	var username=req.body.username;
// 	var password=req.body.username;
// 	charu(username,password,function(err,result){

// 				res.send({flag:1})
// 				return;
// 			})
// }

module.exports=router;