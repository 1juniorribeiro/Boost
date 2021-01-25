import { getRepository } from 'typeorm';

import Product from '../models/product';
import User from '../models/user';

import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  name: string;
  price: number;
}

class CreateProductService {
  public async execute({ name, price, user_id }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Somente usuarios podem criar Produtos!', 401);
    }

    const checkProductExists = await productsRepository.findOne({
      where: { name },
    });

    if (checkProductExists) {
      throw new AppError('Produto com este nome já cadastrado');
    }

    const product = productsRepository.create({
      user_id,
      name,
      price,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
