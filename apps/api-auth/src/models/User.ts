import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../types';

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
    enum: ["provider", "consumer"],
    default: "consumer"
  })
  role: Role;
}

export { User }
