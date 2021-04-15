import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Product } from './product.entity';
import { Order } from './order.entity';

type UserRoleType = "seller" | "consumer"

@Entity("users")
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  avatar: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({
    type: "enum",
    enum: ["seller", "consumer"],
    default: "consumer"
  })
  role: UserRoleType

  @OneToMany(type => Product, product => product.user)
  products: Product[];

  @OneToMany(type => Order, order => order.provider)
  providerOrders: Order[];

  @OneToMany(type => Order, order => order.consumer)
  consumerOrders: Order[];
}

export { User }
