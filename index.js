const http = require('http')

const hostname = '0.0.0.0'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好,世界!\n')
})

server.listen(port, hostname, () => {
  console.log(`服务器开始运行 http://${hostname}:${port}/`)
})