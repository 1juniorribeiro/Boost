/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Client from './client';
import Appointment from './appointments';
import Cashier from './cashier';
import Form_of_payment from './form_of_payment';
import Product from './product';
import Payment from './payment';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Client, client => client.user)
  client: Client;

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointment: Appointment;

  @OneToMany(() => Cashier, cashier => cashier.user)
  cashier: Cashier;

  @OneToMany(() => Form_of_payment, form_of_payment => form_of_payment.user)
  form_of_payment: Form_of_payment;

  @OneToMany(() => Product, product => product.user)
  product: Product;

  @OneToMany(() => Payment, payment => payment.user)
  payment: Payment;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
