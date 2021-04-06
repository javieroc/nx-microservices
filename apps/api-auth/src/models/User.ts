import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

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
}

export { User }
