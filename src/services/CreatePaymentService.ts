import { getRepository } from 'typeorm';

import Payment from '../models/payment';
import User from '../models/user';
import FormOfPayment from '../models/form_of_payment';
import Sale from '../models/sale';

import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  value: number;
  paid: boolean;
  form_of_payment_id: string;
  sale_id: string;
}

class PaymentService {
  public async execute({
    value,
    paid,
    form_of_payment_id,
    sale_id,
    user_id,
  }: Request): Promise<Payment> {
    const PaymentRepository = getRepository(Payment);
    const usersRepository = getRepository(User);
    const formOfPaymentRepository = getRepository(FormOfPayment);
    const saleRepository = getRepository(Sale);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Somente usuarios podem criar pagamentos!', 401);
    }

    const sale = await saleRepository.findOne(sale_id);

    if (!sale) {
      throw new AppError('Venda não encontrada para pagamento', 400);
    }

    const formOfPayment = await formOfPaymentRepository.findOne(
      form_of_payment_id,
    );

    if (!formOfPayment) {
      throw new AppError('Forma de pagamento invalida', 400);
    }

    const balanceMisssing = sale.value > value;

    if (balanceMisssing) {
      throw new AppError('Pagamento insuficiente', 400);
    }

    const balanceRemaining = sale.value - value;

    if (balanceRemaining) {
      const changeOfMoney = value - sale.value;
    }

    const payment = PaymentRepository.create({
      value,
      paid,
      form_of_payment_id,
      sale_id,
      user_id,
    });

    await PaymentRepository.save(payment);

    return payment;
  }
}

export default PaymentService;
