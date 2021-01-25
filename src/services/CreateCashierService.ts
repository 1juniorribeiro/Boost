import { getRepository } from 'typeorm';

import Cashier from '../models/cashier';
import User from '../models/user';

import AppError from '../errors/AppError';

interface Request {
  user_id: string;
}

class CreateCashierService {
  public async execute({ user_id }: Request): Promise<Cashier> {
    const cashiersRepository = getRepository(Cashier);
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Somente usuarios podem criar caixas', 401);
    }

    const cashier = cashiersRepository.create({
      user_id,
    });

    await cashiersRepository.save(cashier);

    return cashier;
  }
}

export default CreateCashierService;
