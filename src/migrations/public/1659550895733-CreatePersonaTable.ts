import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreatePersonaTable1659550895733 implements MigrationInterface {
  private readonly tableName = 'public.persona'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nombre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'anio_nacimiento',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'color_ojos',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'genero',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'color_cabello',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'altura',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'peso',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'color_piel',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mundo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'peliculas',
            type: 'json',
            isNullable: false,
          },
          {
            name: 'especies',
            type: 'json',
            isNullable: false,
          },
          {
            name: 'naves',
            type: 'json',
            isNullable: false,
          },
          {
            name: 'vehiculos',
            type: 'json',
            isNullable: false,
          },
          {
            name: 'url',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'creado_en',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'actualizado_en',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName)
  }
}
