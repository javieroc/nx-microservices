import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Product } from './Product';

@Entity("categories")
class Category extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(type => Product, product => product.category)
  products: Product[]
}

export { Category }
