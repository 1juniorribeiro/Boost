import { getRepository } from 'typeorm'

import Client from '../models/client'

interface Request {
  user_id: string;
  name: string;
  phone: bigint;
}

class CreateClientService {
  public async execute({ name, phone, user_id }: Request): Promise<Client> {
    const clientRepository = getRepository(Client);

    const checkClientExists = await clientRepository.findOne({
      where: { phone },
    });

    if(checkClientExists) {
      throw new Error('Cliente com este telefone já está cadastrado');
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
