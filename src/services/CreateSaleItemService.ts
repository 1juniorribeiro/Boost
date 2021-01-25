import { getRepository } from 'typeorm';

import Product from '../models/product';
import Sale from '../models/sale';
import Sale_item from '../models/sale_item';

import AppError from '../errors/AppError';

interface Request {
  quantity: number;
  sale_id: string;
  product_id: string;
}

class CreateSaleItemService {
  public async execute({
    quantity,
    sale_id,
    product_id,
  }: Request): Promise<Sale_item> {
    const ProductsRepository = getRepository(Product);
    const SaleRepository = getRepository(Sale);
    const SaleItemRepository = getRepository(Sale_item);

    const product = await ProductsRepository.findOne(product_id);

    if (!product) {
      throw new AppError('É necessario um produto valido', 400);
    }

    const sale = await SaleRepository.findOne(sale_id);

    if (!sale) {
      throw new AppError(
        'É necessario ter uma venda para adicionar um item',
        401,
      );
    }

    const saleItem = SaleItemRepository.create({
      quantity,
      sale_id,
      product_id,
    });

    await SaleItemRepository.save(saleItem);

    return saleItem;
  }
}

export default CreateSaleItemService;
