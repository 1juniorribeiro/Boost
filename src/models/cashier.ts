import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import User from './user';
import Sale from './sale';
import Expense from './expense';

@Entity('cashiers')
class Cashier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.client)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Sale, sale => sale.cashier)
  sale: Sale;

  @OneToMany(() => Expense, expense => expense.cashier)
  expense: Expense;

  @Column('decimal')
  balance: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Cashier;
