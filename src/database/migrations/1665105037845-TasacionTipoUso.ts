import { MigrationInterface, QueryRunner } from "typeorm";

export class TasacionTipoUso1665105037845 implements MigrationInterface {
    name = 'TasacionTipoUso1665105037845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`informe_tipouso\` (\`id\` bigint NOT NULL AUTO_INCREMENT COMMENT 'Generar ID', \`created_at\` timestamp(6) NOT NULL COMMENT 'Fecha de creación' DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL COMMENT 'Fecha de Actualización' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL COMMENT 'Fecha de Eliminación', \`is_hidden\` tinyint NOT NULL COMMENT 'oculto' DEFAULT 0, \`descripcion\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`informe_to_tipouso\` (\`id\` bigint NOT NULL AUTO_INCREMENT COMMENT 'Generar ID', \`created_at\` timestamp(6) NOT NULL COMMENT 'Fecha de creación' DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL COMMENT 'Fecha de Actualización' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL COMMENT 'Fecha de Eliminación', \`is_hidden\` tinyint NOT NULL COMMENT 'oculto' DEFAULT 0, \`porcentaje\` varchar(255) NOT NULL, \`tipo_uso_id\` bigint NOT NULL COMMENT 'Generar ID', \`informe_tasacion_id\` bigint NOT NULL COMMENT 'Generar ID', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`informe_tasacion\` DROP COLUMN \`tipouso_id\``);
        await queryRunner.query(`ALTER TABLE \`informe_to_tipouso\` ADD CONSTRAINT \`FK_24c69687d1aafc482c8573d12b2\` FOREIGN KEY (\`tipo_uso_id\`) REFERENCES \`informe_tipouso\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`informe_to_tipouso\` ADD CONSTRAINT \`FK_33be428536deba8266b2f314113\` FOREIGN KEY (\`informe_tasacion_id\`) REFERENCES \`informe_tasacion\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`informe_to_tipouso\` DROP FOREIGN KEY \`FK_33be428536deba8266b2f314113\``);
        await queryRunner.query(`ALTER TABLE \`informe_to_tipouso\` DROP FOREIGN KEY \`FK_24c69687d1aafc482c8573d12b2\``);
        await queryRunner.query(`ALTER TABLE \`informe_tasacion\` ADD \`tipouso_id\` int NOT NULL`);
        await queryRunner.query(`DROP TABLE \`informe_to_tipouso\``);
        await queryRunner.query(`DROP TABLE \`informe_tipouso\``);
    }

}
