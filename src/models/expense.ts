import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Cashier from './cashier';

@Entity('expenses')
class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cashier_id: string;

  @ManyToOne(() => Cashier, cashier => cashier.id)
  @JoinColumn({ name: 'cashier_id' })
  cashier: Cashier;

  @Column('decimal')
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Expense;
