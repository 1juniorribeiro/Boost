import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForeIgnKeysToDatabase1611324742964
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'usersClient',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'usersCashier',
        columnNames: ['cashier_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cashiers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'usersProducts',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'usersFormOfPayment',
        columnNames: ['form_of_payment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'form_of_payments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'usersAppointments',
        columnNames: ['appointment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'appointments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'usersPayments',
        columnNames: ['payment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'payments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'form_of_payments',
      new TableForeignKey({
        name: 'form_of_paymentsUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'productsUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'clients',
      new TableForeignKey({
        name: 'clientUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'cashiers',
      new TableForeignKey({
        name: 'cashierUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'cashiers',
      new TableForeignKey({
        name: 'saleCashier',
        columnNames: ['sale_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sales',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'cashiers',
      new TableForeignKey({
        name: 'expenseCashier',
        columnNames: ['expense_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'expenses',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'expenses',
      new TableForeignKey({
        name: 'cashierExpense',
        columnNames: ['cashier_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cashiers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'sales',
      new TableForeignKey({
        name: 'paymentSale',
        columnNames: ['payment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'payments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'sales',
      new TableForeignKey({
        name: 'clientSale',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'sales',
      new TableForeignKey({
        name: 'cashierSale',
        columnNames: ['cashier_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cashiers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'sales',
      new TableForeignKey({
        name: 'sale_itemSale',
        columnNames: ['sale_item_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sale_item',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'sale_item',
      new TableForeignKey({
        name: 'productSale_item',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'sale_item',
      new TableForeignKey({
        name: 'saleSale_item',
        columnNames: ['sale_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sales',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'payments',
      new TableForeignKey({
        name: 'userPayment',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'payments',
      new TableForeignKey({
        name: 'form_of_paymentPayment',
        columnNames: ['form_of_payment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'form_of_payments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'payments',
      new TableForeignKey({
        name: 'salePayment',
        columnNames: ['sale_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sales',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'userAppointment',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'clientAppointment',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'paymentAppointment',
        columnNames: ['payment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'payments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'paymentAppointment');

    await queryRunner.dropForeignKey('appointments', 'clientAppointment');

    await queryRunner.dropForeignKey('appointments', 'userAppointment');

    await queryRunner.dropForeignKey('payments', 'salePayment');

    await queryRunner.dropForeignKey('payments', 'form_of_paymentPayment');

    await queryRunner.dropForeignKey('payments', 'userPayment');

    await queryRunner.dropForeignKey('sale_item', 'saleSale_item');

    await queryRunner.dropForeignKey('sale_item', 'productSale_item');

    await queryRunner.dropForeignKey('sales', 'sale_itemSale');

    await queryRunner.dropForeignKey('sales', 'cashierSale');

    await queryRunner.dropForeignKey('sales', 'clientSale');

    await queryRunner.dropForeignKey('sales', 'paymentSale');

    await queryRunner.dropForeignKey('expenses', 'cashierExpense');

    await queryRunner.dropForeignKey('cashiers', 'expenseCashier');

    await queryRunner.dropForeignKey('cashiers', 'saleCashier');

    await queryRunner.dropForeignKey('cashiers', 'cashierUser');

    await queryRunner.dropForeignKey('clients', 'clientUser');

    await queryRunner.dropForeignKey('products', 'productsUser');

    await queryRunner.dropForeignKey(
      'form_of_payments',
      'form_of_paymentsUser',
    );

    await queryRunner.dropForeignKey('users', 'usersPayments');

    await queryRunner.dropForeignKey('users', 'usersAppointments');

    await queryRunner.dropForeignKey('users', 'usersFormOfPayment');

    await queryRunner.dropForeignKey('users', 'usersProducts');

    await queryRunner.dropForeignKey('users', 'usersCashier');

    await queryRunner.dropForeignKey('users', 'usersClient');
  }
}
