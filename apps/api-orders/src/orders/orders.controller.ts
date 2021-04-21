import { Controller, Post, Get, Param, Put, Delete, Req, Body } from "@nestjs/common";
import { Request } from "express";
import { OrdersService } from "./orders.service";
import { CreateOrderDto, OrderDto, UserDto } from "./dto";

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Req() req: Request, @Body('order') createOrderDto: CreateOrderDto): Promise<OrderDto> {
    const user = req.user as UserDto;
    return this.ordersService.create(user.id, createOrderDto);
  }

  @Get()
  getAll(@Req() req: Request): Promise<OrderDto[]> {
    const user = req.user as UserDto;
    return this.ordersService.findAll(user.id);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return `Order by id: ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `Update order id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remove order id: ${id}`;
  }
}
