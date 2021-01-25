import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateExpenseService from '../services/CreateExpenseService';

const ExpensesRouter = Router();

ExpensesRouter.use(ensureAuthenticated);

ExpensesRouter.post('/', async (request, response) => {
  const { name, value, cashier_id } = request.body;

  const createExpense = new CreateExpenseService();

  const expense = await createExpense.execute({
    name,
    value,
    cashier_id,
  });

  return response.json(expense);
});

export default ExpensesRouter;
