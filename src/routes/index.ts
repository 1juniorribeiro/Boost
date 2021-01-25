import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import clientsRouter from './clients.routes';
import sessionsRouter from './sessions.routes';
import productsRouter from './products.routes';
import formOfPaymentsRouter from './formOfPayments.routes';
import CashiersRouter from './cashiers.routes';
import SalesRouter from './sales.routes';
import ExpensesRouter from './expenses.routes';
import SaleItemRouter from './saleItem.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/clients', clientsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/products', productsRouter);
routes.use('/formOfPayments', formOfPaymentsRouter);
routes.use('/cashier', CashiersRouter);
routes.use('/cashier/sale', SalesRouter);
routes.use('/cashier/expense', ExpensesRouter);
routes.use('/cashier/sale/saleitem', SaleItemRouter);

export default routes;
