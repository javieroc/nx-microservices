import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './User';
import { Category } from './Category';

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

  @ManyToOne(type => User, user => user.products)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(type => Category, category => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}

export { Product }
