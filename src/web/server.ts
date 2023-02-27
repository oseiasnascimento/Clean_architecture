import http from 'http'
import { createOrderFactory } from '../controllers'

http
  .createServer(async (request, response) => {
    if (request.method === 'POST' && request.url === '/orders') {
      request.on('data', async data => {
        const body = JSON.parse(data)

        try {
          await createOrderFactory.handle(body)
          return response.end('Pedido enviado com sucesso')
        } catch (err: any) {
          response.statusCode = 400
          return response.end(err.message)
        }
      })
    }
    // if (request.method === 'GET' && request.url?.startsWith('/orders')) {
    //   const urlSplit = request.url.split('/')

    //   const orderService = new OrderService()
    //   const orders = await orderService.findByDocument(urlSplit[2])
    //   return response.end(JSON.stringify(orders))
    // }
  })
  .listen(3000, () => console.log('Listening on http://localhost:3000'))
