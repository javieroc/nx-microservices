import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { User } from './user.entity';
import { OrderDetails } from './detail.entity';

@Entity("orders")
class Order extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'float' })
  total: number;

  @Column({ name: 'provider_id', type: 'varchar', nullable: true })
  providerId: string;

  @ManyToOne(() => User, user => user.providerOrders)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column({ name: 'consumer_id', type: 'varchar', nullable: true })
  consumerId: string;

  @ManyToOne(() => User, user => user.consumerOrders)
  @JoinColumn({ name: 'consumer_id' })
  consumer: User;

  @OneToMany(() => OrderDetails, orderDetails => orderDetails.order)
  details: OrderDetails[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}

export { Order }
