import { getRepository } from 'typeorm';

import Cashier from '../models/cashier';
import Expense from '../models/expense';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  value: number;
  cashier_id: string;
}

class CreateExpenseService {
  public async execute({ name, value, cashier_id }: Request): Promise<Expense> {
    const cashiersRepository = getRepository(Cashier);
    const ExpenseRepository = getRepository(Expense);

    const cashier = await cashiersRepository.findOne(cashier_id);

    if (!cashier) {
      throw new AppError(
        'É necessario abrir um caixa antes de gerar uma despesa',
        401,
      );
    }

    const expense = ExpenseRepository.create({
      name,
      value,
      cashier_id,
    });

    await ExpenseRepository.save(expense);

    return expense;
  }
}

export default CreateExpenseService;
