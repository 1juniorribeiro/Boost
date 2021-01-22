import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddFieldsCashiersProductsFormsofpaymentToUsers1611238489799
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'cashier_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'product_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'form_of_payment_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'payment_id',
        type: 'uuid',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'payment_id');

    await queryRunner.dropColumn('users', 'form_of_payment_id');

    await queryRunner.dropColumn('users', 'product_id');

    await queryRunner.dropColumn('users', 'cashier_id');
  }
}
