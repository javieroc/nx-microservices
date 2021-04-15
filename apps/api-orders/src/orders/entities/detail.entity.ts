import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity("order_details")
class OrderDetails extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'float' })
  amount: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'float' })
  total: number;

  @Column({ name: 'order_id', type: 'varchar', nullable: true })
  orderId: string;

  @ManyToOne(type => Order, order => order.details)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ name: 'product_id', type: 'varchar', nullable: true })
  productId: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}

export { OrderDetails }
