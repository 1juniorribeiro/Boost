import { getRepository } from 'typeorm';

import FormOfPayment from '../models/form_of_payment';
import User from '../models/user';

import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  name: string;
}

class CreateFormOfPaymentService {
  public async execute({ name, user_id }: Request): Promise<FormOfPayment> {
    const formOfPaymentRepository = getRepository(FormOfPayment);
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError(
        'Somente usuarios podem criar formas de pagamento!',
        401,
      );
    }

    const checkFormOfPaymentExists = await formOfPaymentRepository.findOne({
      where: { name },
    });

    if (checkFormOfPaymentExists) {
      throw new AppError('Forma de pagamento com este nome já cadastrado');
    }

    const formOfPayment = formOfPaymentRepository.create({
      user_id,
      name,
    });

    await formOfPaymentRepository.save(formOfPayment);

    return formOfPayment;
  }
}

export default CreateFormOfPaymentService;
