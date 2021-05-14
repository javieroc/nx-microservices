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

  @Column({ name: 'user_id', type: 'varchar', nullable: true })
  userId: string;

  @ManyToOne(type => User, user => user.products, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'category_id', type: 'varchar', nullable: true })
  categoryId: string;

  @ManyToOne(type => Category, category => category.products, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}

export { Product }
