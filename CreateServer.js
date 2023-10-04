const Http=require('http');
const Server=Http.createServer((req,res)=>{
    console.log('You are about to enter the world of DimensionX');
	console.log(req.headers)
    res.write('Hello Madam Rabiyya');
    res.setHeader("Content-type",'text/html');
    res.getHeader('content-type')
    res.end();

})
Server.listen(3000);//non-blocking and Nodejs continues to start execution independent of listening to server.
console.log('Server at Port 3000');//why the function output is not shown first because in jaavascript when you run a Nodejs 
//node server it runs asynchronously.NodeJs request are asynchronous iterables
//curl is command-line tool for sending and getting data including files using Url syntax.
const _=require('lodash');//manipulate arrays

const items=[1,[2,[3,[4,[5]]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);