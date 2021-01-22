import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddCreateAtUpdatedAtToFormsOfPayments1611338135721
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'form_of_payments',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
    await queryRunner.addColumn(
      'form_of_payments',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('form_of_payments', 'updated_at');

    await queryRunner.dropColumn('form_of_payments', 'created_at');
  }
}
