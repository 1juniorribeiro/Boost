import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateSaleService from '../services/CreateSaleService';

const SalesRouter = Router();

SalesRouter.use(ensureAuthenticated);

SalesRouter.post('/', async (request, response) => {
  const { client_id, cashier_id } = request.body;

  const createSale = new CreateSaleService();

  const product = await createSale.execute({
    client_id,
    cashier_id,
  });

  return response.json(product);
});

export default SalesRouter;
