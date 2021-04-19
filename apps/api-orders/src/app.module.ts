import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { AuthMiddleware } from './middlewares';

const configModule = ConfigModule.forRoot();

const dbModule = TypeOrmModule.forRoot({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  autoLoadEntities: true,
})

@Module({
  imports: [
    configModule,
    dbModule,
    OrdersModule,
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('orders');
  }
}
