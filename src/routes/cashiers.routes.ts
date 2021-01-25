import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateCashierService from '../services/CreateCashierService';

const CashiersRouter = Router();

CashiersRouter.use(ensureAuthenticated);

CashiersRouter.post('/', async (request, response) => {
  const createCashier = new CreateCashierService();

  const product = await createCashier.execute({
    user_id: request.user.id,
  });

  return response.json(product);
});

export default CashiersRouter;
