import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Product from './product';
import Sale from './sale';

@Entity('sale_item')
class Sale_item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int4')
  quantity: number;

  @Column()
  sale_id: string;

  @ManyToOne(() => Sale, sale => sale.id)
  @JoinColumn({ name: 'sale_id' })
  sale: Sale;

  @Column()
  product_id: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Sale_item;
