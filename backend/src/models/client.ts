import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import User from './user';
import Appointment from './appointments'

@Entity('clients')
class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.client_id)
  user: User;

  @Column()
  appointment_id: string;

  @OneToMany(() => Appointment, appointment => appointment.client_id)
  appointment: Appointment[];

  @Column()
  name: string;

  @Column('bigint')
  phone: bigint;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Client;
