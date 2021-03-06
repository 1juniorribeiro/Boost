import { EntityRepository, Repository } from 'typeorm';

import Payment from '../models/payment';
import Sale from '../models/sale';

interface Balance {
  value: number;
  total: number;
}

@EntityRepository(Payment)
class PaymentRepository extends Repository<Payment> {
  public async getBalance(): Promise<Balance> {
    
  }
}

export default PaymentRepository;
