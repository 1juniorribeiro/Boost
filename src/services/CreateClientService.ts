import { getRepository } from 'typeorm'

import Client from '../models/client'
import User from '../models/user'

import AppError from '../errors/AppError'

interface Request {
  user_id: string
  name: string;
  phone: bigint;
}

class CreateClientService {
  public async execute({ name, phone, user_id}: Request): Promise<Client> {
    const clientRepository = getRepository(Client);
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Somente usuarios podem criar clientes!', 401)
    }

    const checkClientExists = await clientRepository.findOne({
      where: { phone },
    });

    if(checkClientExists) {
      throw new AppError('Cliente com este telefone já está cadastrado');
    }

    const client = clientRepository.create({
      user_id,
      name,
      phone,
    });

    await clientRepository.save(client);

    return client;
  }
}

export default CreateClientService;
