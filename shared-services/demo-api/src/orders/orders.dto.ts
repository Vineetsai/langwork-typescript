import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  userId: string;

  @IsString()
  status: OrderStatus;

  @IsNumber()
  amount: number;

  @IsNumber()
  quantity: number;
}

// create enum for order status
export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}
