import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateSaleItemService from '../services/CreateSaleItemService';

const SaleItemRouter = Router();

SaleItemRouter.use(ensureAuthenticated);

SaleItemRouter.post('/', async (request, response) => {
  const { quantity, sale_id, product_id } = request.body;

  const createSaleItem = new CreateSaleItemService();

  const saleItem = await createSaleItem.execute({
    quantity,
    sale_id,
    product_id,
  });

  return response.json(saleItem);
});

export default SaleItemRouter;
