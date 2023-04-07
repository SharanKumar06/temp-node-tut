const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end( 'Welcome to our page..')
    }
    if(req.url==='/about'){
        res.end('Welcome to our home page..')
    }
    else{

        res.end(`<h1>Oops! </h1> <br> <p> server not found</p>`)
        console.log(req)
    }
    // res.write('hello world')
// res.end()
})

server.listen(3000)
