/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Client from './client'
import Appointment from './appointments';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  client_id: string;

  @OneToMany(() => Client, client => client.user_id)
  client: Client;

  @Column()
  appointment_id: string;

  @OneToMany(() => Appointment, appointment => appointment.user_id)
  appointment: Appointment[];

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
