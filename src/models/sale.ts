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

import Cashier from './cashier';
import Payment from './payment';
import Client from './client';
import Sale_item from './sale_item';

@Entity('sales')
class Sale {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  value: number;

  @Column()
  cashier_id: string;

  @ManyToOne(() => Cashier, cashier => cashier.id)
  @JoinColumn({ name: 'cashier_id' })
  cashier: Cashier;

  @Column()
  client_id: string;

  @ManyToOne(() => Client, client => client.id)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @OneToMany(() => Payment, payment => payment.sale)
  payment: Payment;

  @OneToMany(() => Sale_item, sale_item => sale_item.sale)
  sale_item: Sale_item;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Sale;
