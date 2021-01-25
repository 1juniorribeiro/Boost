import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateFormOfPaymentService from '../services/CreateFormOfPaymentsService';

const formOfPaymentsRouter = Router();

formOfPaymentsRouter.use(ensureAuthenticated);

formOfPaymentsRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createFormOfPayment = new CreateFormOfPaymentService();

  const product = await createFormOfPayment.execute({
    user_id: request.user.id,
    name,
  });

  return response.json(product);
});

export default formOfPaymentsRouter;
