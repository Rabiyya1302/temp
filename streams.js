//Old method:Complete Download
const fs=require('fs')
const http=require('http')
const server=http.createServer();
/*server.on("request",(req,res)=>{
    var fs=require('fs');
    fs.readFile('input.txt',(err,data)=>{
        if(err)
    console.log(err)
    res.end(data.toString());
    })
})
server.listen(8000,'127.0.0.1')*/
//Streaming
/*server.on("request",(req,res)=>{
   const rs=fs.createReadStream('input.txt')
   rs.on('data',(chunk_data)=>{
    res.write(chunk_data)

   })
   rs.on('end',()=>{
    res.end();
   })
})
server.listen(8000,'127.0.0.1')  
*/
//Piping
server.on("request",(req,res)=>{
    const rs=fs.createReadStream('input.txt')
    rs.pipe(res);
 })
 
server.listen(8000,'127.0.0.1') 

