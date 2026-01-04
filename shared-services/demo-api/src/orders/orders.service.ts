import { Injectable } from '@nestjs/common';
import { OrderDto, OrderStatus } from './orders.dto';

@Injectable()
export class OrdersService {
  getOrder(orderId: string): OrderDto {
    // random status should be randomly selected from OrderStatus enum
    const randomStatus: OrderStatus =
      Object.values(OrderStatus)[
        Math.floor(Math.random() * Object.values(OrderStatus).length)
      ];

    console.log('Random status:', randomStatus);
    return {
      id: orderId,
      userId: 'user-123',
      status: randomStatus,
      amount: Math.floor(Math.random() * 100) + 1,
      quantity: Math.floor(Math.random() * 10) + 1,
    } as OrderDto;
  }
}
