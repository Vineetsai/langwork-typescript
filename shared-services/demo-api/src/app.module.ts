import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, OrdersController],
  providers: [AppService, UsersService, OrdersService],
})
export class AppModule {}
