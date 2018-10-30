const express = require('express')
const Mock = require('mockjs')
const port = 2000
const app = express()
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", req.header('origin'));  
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
	res.header("Access-Control-Allow-Headers", "Content-Type,Token,Content-Length, Authorization, Accept,X-Requested-With"); 
	res.header("Access-Control-Allow-Credentials",true)
	res.header('Content-Type', 'application/json;charset=utf-8')
	next()
})
app.post('/auth/api/login',(req,res)=>{  
	res.send({result:1}).end()
})
app.post('/api/spiderInfo/list',(req,res)=>{
	const data = Mock.mock({
		'result':1,
		"page": {
		    "totalRows": 30
		  },
		'list|30':[{
			"id|+1": 1,
		    "name": "@string(4,8)",
		    "create_time": "@integer(10000, 30000)",
		    "status": '@integer(0, 3)',
		    "statistics": "@integer(100, 300)"
		}]
	})
	res.send(data)
})
app.get('/api/spiderInfo/detail',(req,res)=>{
	const data = Mock.mock({
	  "result": 1,
	  "object": {
	    "id": "@integer(1, 3)",
	    "name": "@string(10,30)",
	    "status": "@integer(0, 3)",
	    "lastOperate": "@integer(1515000000, 1520000000)",
	    "code": ""
	  }
	})
	res.send(data)
})
// 爬虫控制
app.post('/api/spiderInfo/control',(req,res)=>{
	const data = Mock.mock({
		"result":1
	})
	res.send(data)
})
// 爬虫概述
app.post('/api/spiderDetail/list',(req,res)=>{
	const data = Mock.mock({
		"result":1,
		"list|24":[{
			"id|+1":0,
			"time": "@integer(60, 3000)",
			"success_num":'@integer(0, 60)',
			"fail_num":'@integer(0, 60)'
		}]
	})
	res.send(data)
})
app.post('/api/spiderLog/list',(req,res)=>{
	const data = Mock.mock({
		"result":1,
		"page":{
			"totalRows":30
		},
		"list|30":[{
			"id|+1":1,
			"time":"@integer(100000, 3000000)",
			"type":"info",
			"note":"@string(8,20)"
		}]
	})
	res.send(data)
})
app.post('/api/node/list',(req,res)=>{
	const data = Mock.mock({
		"result":1,
		"page":{
			"totalRows":30
		},
		"list|30":[{
			"id|+1":1,
			"name":"@string(8,20)",
			"status":"@integer(0,2)",
			"on_time":"@integer(100000, 3000000)"
		}]
	})
	res.send(data)
})
app.get('/api/node/nodeId',(req,res)=>{
	const data = Mock.mock({
		"result":1,
		"list|30":["@integer(10,30)"]
	})
	res.send(data)
})
// 帐号库
app.post('/api/group/list',(req,res)=>{
	const data = Mock.mock({
		"result":1,
		"page":{
			"totalRows":30
		},
		"list|30":[{
			"id|+1":1,
			"group_name":"@string(6,10)",
			"account_password":"@string(6,10)",
			"type":"@string(4,6)",
			"user_name":"@string(10,20)"
		}]
	})
	res.send(data)
})
// 更新分组
app.post('/api/group/update',(req,res)=>{
	const data = Mock.mock({
		"result":1
	})
	res.send(data)
})
// 查看账号
app.post('/api/spiderAccount/list',(req,res)=>{
	const data = Mock.mock({
		"result":1,
		"page":{
			"totalRows":30
		},
		"list|30":[{
			"id|+1":1,
			"account_name":"@string(6,10)",
			"account_password":"@string(6,10)",
			"status":"@integer(0,1)",
			"import_time":"@integer(100000, 3000000)",
			"type":"@integer(0,1)",
			"cookie":"@string(10,20)"
		}]
	})
	res.send(data)
})
// 删除账号
app.get('/api/spiderAccount/delete',(req,res)=>{
	res.send({"result":1})
})
// 账号管理
app.post('/api/user/list',(req,res)=>{
	const data =Mock.mock({
		"result":1,
		"page":{
			"totalRows":30
		},
		"list|30":[{
			"id|+1":1,
			"username":"@string(6,10)",
			"password":"@string(6,10)",
			"status":"@integer(0,1)",
			"spider_count":"@integer(10, 300)",
			"statistics":"@integer(10,300)"
		}]
	})
	res.send(data)
})
app.listen(port,()=>{
	console.log('server at port：' + port)
})