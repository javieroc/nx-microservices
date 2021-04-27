import { IsNotEmpty, IsNumber, IsPositive, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreateOrderDetailDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;
}

class CreateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  providerId: string;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderDetailDto)
  items: CreateOrderDetailDto[];
}

export { CreateOrderDto };
