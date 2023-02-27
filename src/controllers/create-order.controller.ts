import { OrderGateway } from "../gateways/order.gateway"
import { CreateOrderUseCase } from "../usecases/order/create-order.usecase"

type CreateOrderControllerRequest = {
  document: string
  total: number
  facilityId: string
}

export class CreateOrderController {

  constructor(private orderGateway: OrderGateway){

  }

  async handle(request: CreateOrderControllerRequest){
    const createOrderUseCase = new CreateOrderUseCase(this.orderGateway)
    await createOrderUseCase.execute(request)
  }
}