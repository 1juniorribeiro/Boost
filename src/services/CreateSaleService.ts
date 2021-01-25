import { getRepository } from 'typeorm';

import Cashier from '../models/cashier';
import Client from '../models/client';
import Sale from '../models/sale';

import AppError from '../errors/AppError';

interface Request {
  client_id: string;
  cashier_id: string;
}

class CreateSaleService {
  public async execute({ client_id, cashier_id }: Request): Promise<Sale> {
    const cashiersRepository = getRepository(Cashier);
    const clientRepository = getRepository(Client);
    const SaleRepository = getRepository(Sale);

    const cashier = await cashiersRepository.findOne(cashier_id);

    if (!cashier) {
      throw new AppError(
        'É necessario abrir um caixa antes de fazer uma venda',
        401,
      );
    }

    const client = await clientRepository.findOne(client_id);

    if (!client) {
      throw new AppError(
        'É necessario ter um cliente para fazer uma venda',
        401,
      );
    }

    const sale = SaleRepository.create({
      client_id,
      cashier_id,
    });

    await SaleRepository.save(sale);

    return sale;
  }
}

export default CreateSaleService;
