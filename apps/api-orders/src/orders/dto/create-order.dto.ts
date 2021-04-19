class CreateOrderDetailDto {
  productId: string;
  amount: number;
  price: number;
}

class CreateOrderDto {
  providerId: string;
  items: CreateOrderDetailDto[];
}

export { CreateOrderDto };
