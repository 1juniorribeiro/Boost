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
import Client from './client';
import Payment from './payment';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.appointment)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  client_id: string;

  @ManyToOne(() => Client, client => client.appointment)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @Column()
  payment_id: string;

  @ManyToOne(() => Payment)
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
