import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order, OrderDetails } from './entities';
import { CreateOrderDto, OrderDto } from './dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderDetails)
    private orderDetailsRepository: Repository<OrderDetails>,
  ) {}

  async create(consumerId: string, { providerId, items }: CreateOrderDto): Promise<OrderDto> {
    // @TODO: Create order and its details should be a transaction
    // @TODO: check using api-products if products ordered are available.
    const total = items.reduce((accum, item) => accum + item.amount * item.price, 0);
    const order = await this.ordersRepository.create({
      consumerId,
      providerId,
      total,
      date: new Date().toISOString(),
    }).save();

    for (const item of items) {
      await this.orderDetailsRepository.create({
        orderId: order.id,
        productId: item.productId,
        amount: item.amount,
        price: item.price,
        total: item.amount * item.price,
      }).save();
    }

    return order;
  }

  findAll(consumerId: string): Promise<OrderDto[]> {
    return this.ordersRepository.find({ where: { consumerId }});
  }

  findOne(id: string): Promise<OrderDto> {
    return this.ordersRepository.findOne(id);
  }
}
