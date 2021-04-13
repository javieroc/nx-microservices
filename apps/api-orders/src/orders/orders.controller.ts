import { Controller, Post, Get, Param, Put, Delete } from "@nestjs/common";

@Controller('orders')
export class OrdersController {
  @Post()
  create() {
    return 'create new orders';
  }

  @Get()
  getAll() {
    return 'all orders';
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
