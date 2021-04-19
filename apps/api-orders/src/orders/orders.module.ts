import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { Order, OrderDetails, Category, Product, User } from './entities';
import { OrdersService } from './orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDetails, Category, Product, User])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
