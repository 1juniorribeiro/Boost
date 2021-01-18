import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeysToTables1610389502231 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey('appointments', new TableForeignKey({
        name: 'AppointmentUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      )
      );
      await queryRunner.createForeignKey('appointments', new TableForeignKey({
        name: 'AppointmentClient',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      )
      );
      await queryRunner.createForeignKey('users', new TableForeignKey({
        name: 'UserAppointments',
        columnNames: ['appointment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'appointments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      )
      );
      await queryRunner.createForeignKey('users', new TableForeignKey({
        name: 'UsersClient',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      )
      );
      await queryRunner.createForeignKey('clients', new TableForeignKey({
        name: 'ClientsUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
      );
      await queryRunner.createForeignKey('clients', new TableForeignKey({
        name: 'ClientAppointments',
        columnNames: ['appointment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'appointments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      )
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users', 'ClientAppointments');

      await queryRunner.dropForeignKey('clients', 'ClientsUser');

      await queryRunner.dropForeignKey('users', 'UsersClient');

      await queryRunner.dropForeignKey('users', 'UserAppointments');

      await queryRunner.dropForeignKey('appointments', 'AppointmentClient');

      await queryRunner.dropForeignKey('appointments', 'AppointmentUser');
    }

}
