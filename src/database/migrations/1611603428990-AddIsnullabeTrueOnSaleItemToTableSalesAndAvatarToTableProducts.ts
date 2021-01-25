import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddIsnullabeTrueOnSaleItemToTableSalesAndAvatarToTableProducts1611603428990
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'avatar');

    await queryRunner.dropColumn('sales', 'sale_item_id');

    await queryRunner.dropColumn('sales', 'payment_id');

    await queryRunner.dropColumn('sales', 'value');

    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'sale_item_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'payment_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'value',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('sales', 'value');

    await queryRunner.dropColumn('sales', 'payment_id');

    await queryRunner.dropColumn('sales', 'sale_item_id');

    await queryRunner.dropColumn('products', 'avatar');

    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'sale_item_id',
        type: 'uuid',
      }),
    );

    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
      }),
    );

    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'payment_id',
        type: 'uuid',
      }),
    );

    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'value',
        type: 'decimal',
        precision: 10,
        scale: 2,
      }),
    );
  }
}
