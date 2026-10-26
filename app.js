function add(a,b){

    return a + b

}

if (require.name===module){
    const http = require('node:http')
    const sever = http.createServer((req,res)=>{
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end(greet('Github and Docker'))
    })

    sever.listen(3000, "0.0.0.0",()=>{
        console.log("App running on port 3000")
    })
}

module.exports = {add}