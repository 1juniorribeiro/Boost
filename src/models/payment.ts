import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './user';
import FormOfPayment from './form_of_payment';
import Sale from './sale';

@Entity('payments')
class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  value: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.client)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  form_of_payment_id: string;

  @ManyToOne(() => FormOfPayment)
  @JoinColumn({ name: 'form_of_payment_id' })
  form_of_payment: FormOfPayment;

  @Column('boolean', { default: true })
  paid: boolean;

  @Column()
  sale_id: string;

  @ManyToOne(() => Sale, sale => sale.id)
  @JoinColumn({ name: 'sale_id' })
  sale: Sale;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Payment;
