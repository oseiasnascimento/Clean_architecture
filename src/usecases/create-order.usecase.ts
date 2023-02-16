import { CreateOrderInputDTO } from "../presenters/order/create-order.input.dto";
import { Order } from "./order/order.entity";

export class CreateOrderUseCase{
  execute({document, total, facilityId}: CreateOrderInputDTO){
    const createOrder = Order.create(document, total, facilityId)
  }
}