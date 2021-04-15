import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { User } from './user.entity';
import { Category } from './category.entity';
import { OrderDetails } from './detail.entity';

@Entity("products")
class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'float' })
  amount: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ name: 'user_id', type: 'varchar', nullable: true })
  userId: string;

  @ManyToOne(() => User, user => user.products)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'category_id', type: 'varchar', nullable: true })
  categoryId: string;

  @ManyToOne(() => Category, category => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => OrderDetails, orderDetails => orderDetails.product)
  orderDetails: OrderDetails[]
}

export { Product }
