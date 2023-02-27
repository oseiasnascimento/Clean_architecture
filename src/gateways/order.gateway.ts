import { CreateOrderGatewayDTO } from "../presenters/order/create-order.gateway.dto copy";

export interface OrderGateway {
  save(data: CreateOrderGatewayDTO): Promise<void>
}