import { OrderGateway } from "../../gateways/order.gateway";
import { CreateOrderInputDTO } from "../../presenters/order/create-order.input.dto";
import { Order } from "./order.entity";

export class CreateOrderUseCase{

  constructor( private orderGateway: OrderGateway){}

  async execute({document, total, facilityId}: CreateOrderInputDTO){
    const createOrder = Order.create(document, total, facilityId)

    await this.orderGateway.save(createOrder)
  }
}