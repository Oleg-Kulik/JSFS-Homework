const http = require('http')


const ip = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end("Hello Homework\n")
})

server.listen(port, ip, () => {
    console.log(`Server is started. Port: ${port}, host: ${ip}`)
})
